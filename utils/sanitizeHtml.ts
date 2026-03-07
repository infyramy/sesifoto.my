const ALLOWED_TAGS = new Set([
  'br',
  'strong',
  'em',
  'i',
  'b',
  'u',
  'ul',
  'ol',
  'li',
  'p',
  'span',
]);

const ALLOWED_STYLE_PROPS = new Set([
  'font-size',
  'opacity',
  'list-style',
  'padding-left',
  'margin-top',
]);

const CACHE_LIMIT = 300;
const sanitizedCache = new Map<string, string>();

const sanitizeClassName = (value: string) =>
  value
    .replace(/[^\w\s\-:/[\].()%#]/g, '')
    .trim();

const sanitizeStyle = (value: string) => {
  const safeEntries: string[] = [];
  const declarations = value.split(';');

  for (const declaration of declarations) {
    const [rawProp, rawVal] = declaration.split(':');
    if (!rawProp || !rawVal) continue;
    const prop = rawProp.trim().toLowerCase();
    const val = rawVal.trim();
    if (!ALLOWED_STYLE_PROPS.has(prop)) continue;
    if (!/^[#(),.%\-\s0-9a-zA-Z]+$/.test(val)) continue;
    safeEntries.push(`${prop}: ${val}`);
  }

  return safeEntries.join('; ');
};

const sanitizeNode = (node: Node, doc: Document): Node | null => {
  if (node.nodeType === Node.TEXT_NODE) {
    return doc.createTextNode(node.textContent ?? '');
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const el = node as Element;
  const tag = el.tagName.toLowerCase();

  if (!ALLOWED_TAGS.has(tag)) {
    const fragment = doc.createDocumentFragment();
    Array.from(el.childNodes).forEach((child) => {
      const safeChild = sanitizeNode(child, doc);
      if (safeChild) fragment.appendChild(safeChild);
    });
    return fragment;
  }

  const safeEl = doc.createElement(tag);

  if (el.hasAttribute('class')) {
    const safeClass = sanitizeClassName(el.getAttribute('class') ?? '');
    if (safeClass) safeEl.setAttribute('class', safeClass);
  }

  if (el.hasAttribute('style')) {
    const safeStyle = sanitizeStyle(el.getAttribute('style') ?? '');
    if (safeStyle) safeEl.setAttribute('style', safeStyle);
  }

  Array.from(el.childNodes).forEach((child) => {
    const safeChild = sanitizeNode(child, doc);
    if (safeChild) safeEl.appendChild(safeChild);
  });

  return safeEl;
};

export const sanitizeRichHtml = (html: string): string => {
  if (!html) return '';

  const cached = sanitizedCache.get(html);
  if (cached !== undefined) {
    return cached;
  }

  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') {
    return html.replace(/[<>]/g, '');
  }

  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, 'text/html');
  const safeDoc = document.implementation.createHTMLDocument('');
  const fragment = safeDoc.createDocumentFragment();

  Array.from(parsed.body.childNodes).forEach((child) => {
    const safeNode = sanitizeNode(child, safeDoc);
    if (safeNode) fragment.appendChild(safeNode);
  });

  const wrapper = safeDoc.createElement('div');
  wrapper.appendChild(fragment);
  const sanitized = wrapper.innerHTML;

  if (sanitizedCache.size >= CACHE_LIMIT) {
    const firstKey = sanitizedCache.keys().next().value;
    if (firstKey) sanitizedCache.delete(firstKey);
  }
  sanitizedCache.set(html, sanitized);

  return sanitized;
};
