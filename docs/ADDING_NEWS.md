# Agent Skill: Add News (Strict Input Mode)

This is the single source of truth for adding a new news post into SesiFoto.

File to edit:
- `data/news.tsx`

## Core Rules (Must Follow)
- Do not assume missing data.
- Collect all required fields from the user first.
- Insert exactly what user provides for date, titles, summaries, and content.
- `isVisible` is mandatory on every post object.
- Do not add post type words into title (for example: do not auto-add `Announcement:` / `Feature:` / `Article:` in title).

## Required User Inputs (Ask First)
Ask the user and wait for complete answers before editing code:
1. `category` (post type): `announcement` | `feature` | `article`
2. `isVisible` (toggle): `true` (show) or `false` (hide)
3. `date` (exact display format user wants, example: `16 Feb 2026`)
4. `slug` (URL path segment, unique)
5. `id` (unique internal id)
6. `title.en`
7. `title.bm`
8. `summary.en`
9. `summary.bm`
10. `content.en` (full content)
11. `content.bm` (full content)
12. content layout style (how content should look):
   - simple paragraphs (`<div className="space-y-6">` + `<p>`), or
   - rich sections (headers, cards, alerts, lists), with explicit structure from user

## Intake Prompt Template (Use This)
Use this exact checklist when requesting input:

```text
Please provide these fields for the new post:
1) category: announcement | feature | article
2) isVisible: true | false
3) date:
4) id:
5) slug:
6) title.en:
7) title.bm:
8) summary.en:
9) summary.bm:
10) content.en:
11) content.bm:
12) content layout style: simple paragraphs or rich sections (state exact structure)

Note: I will publish exactly what you provide and will not auto-add type words into the title.
```

## Data Shape (Must Match)

```tsx
{
  id: 'unique-id',
  isVisible: true,
  title: {
    en: 'English title',
    bm: 'Tajuk BM'
  },
  date: '16 Feb 2026',
  category: 'announcement',
  slug: 'unique-slug',
  summary: {
    en: 'English summary',
    bm: 'Ringkasan BM'
  },
  content: {
    en: (
      <div className="space-y-6">
        <p>...</p>
      </div>
    ),
    bm: (
      <div className="space-y-6">
        <p>...</p>
      </div>
    )
  }
}
```

## Implementation Steps
1. Open `data/news.tsx`.
2. Confirm all required inputs are present.
3. Append a new object in `NEWS_DATA` using exact user data.
4. Ensure `isVisible` is present and matches user choice.
5. Ensure title is unchanged from user input (no auto prefix/suffix based on type).
6. Preserve existing JSX style unless user explicitly asks for a different layout style.

## Validation Checklist
- Build passes: `npm run build`
- Post appears in `/news` only when `isVisible: true`
- Direct detail URL is available only when `isVisible: true`
- EN/BM title, summary, and content render exactly as user gave
- Category badge matches `category`

## Rejection Conditions (Ask User Again)
Stop and request correction if any of these are missing:
- `category`
- `isVisible`
- `date`
- `id`
- `slug`
- any EN/BM title, summary, or content
- content layout style instruction
