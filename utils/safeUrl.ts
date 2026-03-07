const FALLBACK_URL = 'https://sesifoto.my';

const isAllowedProtocol = (protocol: string) => protocol === 'https:' || protocol === 'http:';

const matchesAllowedHosts = (hostname: string, allowedHosts: string[]) => {
  const normalized = hostname.toLowerCase();
  return allowedHosts.some((host) => {
    const allowed = host.toLowerCase();
    return normalized === allowed || normalized.endsWith(`.${allowed}`);
  });
};

export const toSafeExternalUrl = (
  value: string | undefined | null,
  allowedHosts: string[],
  fallback: string = FALLBACK_URL
): string => {
  if (!value) return fallback;

  try {
    const parsed = new URL(value);
    if (!isAllowedProtocol(parsed.protocol)) return fallback;
    if (!matchesAllowedHosts(parsed.hostname, allowedHosts)) return fallback;
    return parsed.toString();
  } catch {
    return fallback;
  }
};

export const toSafeBookingUrl = (value: string | undefined | null): string =>
  toSafeExternalUrl(value, ['sesifoto.my'], FALLBACK_URL);
