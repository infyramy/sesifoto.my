# How to Add News to SesiFoto

This project now supports **bilingual news content** (English & Bahasa Melayu). Follow these steps to add a new update, announcement, or feature release.

## 1. Open Data File
Navigate to: `src/data/news.tsx`

## 2. Add New Item
Scroll to the `NEWS_DATA` array and append a new object. Use the following structure:

```tsx
{
    id: 'unique-id-for-item', // e.g., 'raya-2026-launch'
    slug: 'unique-url-slug',  // e.g., 'raya-2026-launch'
    date: '12 Feb 2026',
    category: 'announcement', // Options: 'announcement', 'feature', 'article'
    
    // Title in both languages
    title: {
        en: 'English Title Here',
        bm: 'Tajuk Bahasa Melayu Di Sini'
    },

    // Short summary for the card view
    summary: {
        en: 'Short summary for the card view (English).',
        bm: 'Ringkasan pandek untuk paparan kad (BM).'
    },

    // Full Content
    content: {
        // CONTENT FOR BAHASA MELAYU
        bm: (
            <div className="space-y-6">
               <p>Perenggan pertama dalam Bahasa Melayu...</p>
               <h3 className="text-xl font-bold">Subtajuk</h3>
               <p>Perenggan seterusnya...</p>
            </div>
        ),
        
        // CONTENT FOR ENGLISH
        en: (
            <div className="space-y-6">
               <p>First paragraph in English...</p>
               <h3 className="text-xl font-bold">Subtitle</h3>
               <p>Next paragraph...</p>
            </div>
        )
    }
}
```

## 3. Using Rich Components
You can use the helper components defined in `news.tsx` to make the content look professional.

### Section Header with Icon
```tsx
<SectionHeader icon={<CheckCircle2 className="w-6 h-6 text-green-500" />} title="Section Title" />
```

### Warning/Alert Box
```tsx
<div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6">
  <div className="flex gap-4">
    <WarningIcon />
    <div>
      <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500">Alert Title</h3>
      <p>Alert description text...</p>
    </div>
  </div>
</div>
```

### Pricing/Info Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <PricingCard price="RM50" messages="800" bookings="~266" t="simple" />
</div>
```

## 4. Verification
1.  Save the file.
2.  Go to `http://localhost:5173/news`.
3.  Check if the new item appears in the list.
4.  Switch languages (EN/BM) to ensure the title and summary change.
5.  Click into the article and ensure the content changes when switching languages.
