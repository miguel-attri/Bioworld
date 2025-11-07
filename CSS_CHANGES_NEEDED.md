# CSS Changes Needed for Pack Pilot SOW Page

Based on inspection of https://pack-pilot-sow.netlify.app/, here are the CSS changes needed:

## 1. Logo Images
**Issue**: Currently using placeholder divs, need actual SVG logos
**Fix**: 
- Add logo images to `/public/assets/` directory:
  - `Attri_Logo.svg`
  - `Bioworld_Logo.svg`
- Update Header and Footer components to use Next.js Image component

## 2. Active Navigation Indicator
**Issue**: Active section should have a bottom border/underline
**Current**: Only text color changes
**Fix**: Add bottom border indicator:
```tsx
{activeSection === item.toLowerCase() && (
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
)}
```

## 3. Color Definitions ✅ FIXED
**Issue**: Colors were incorrect
**Actual Values from Site**:
```js
colors: {
  charcoal: '#111111', // rgb(17, 17, 17) - Much darker than initially set
  accent: '#F2C94C',   // rgb(242, 201, 76) - Yellow/Gold, NOT black!
  surface: '#F5F5F5',  // rgb(245, 245, 245) - Slightly different
  black: '#000000',
  white: '#FFFFFF',
}
```
**Fix**: ✅ Updated in tailwind.config.js

## 4. Typography
**Issue**: Font-display class needs proper definition
**Fix**: Ensure `font-display` is properly configured in Tailwind:
```js
fontFamily: {
  display: ['Work Sans', 'sans-serif'],
}
```

## 5. Section Padding
**Issue**: Need consistent section padding
**Fix**: Already have `.section-padding` utility, verify it matches:
```css
.section-padding {
  @apply py-20 md:py-24 px-6 md:px-12 lg:px-20;
}
```

## 6. Hero Section Pattern Background
**Issue**: Pattern background opacity and positioning
**Current**: Using inline style with opacity-[0.02]
**Fix**: Ensure pattern background is correctly applied:
```tsx
<div className="absolute inset-0 opacity-[0.02]">
  <div className="absolute inset-0" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }}></div>
</div>
```

## 7. Card Hover Effects
**Issue**: Cards should have proper hover transitions
**Current**: Basic hover effects
**Fix**: Ensure all cards have:
```tsx
className="hover:border-accent hover:shadow-md transition-all duration-300"
```

## 8. Pricing Section Badge
**Issue**: Price badge positioning and styling
**Fix**: Ensure badge is positioned correctly:
```tsx
<div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
  <div className="bg-accent px-12 py-5 shadow-lg">
    <span className="text-black font-bold text-3xl">$18,950</span>
  </div>
</div>
```

## 9. Timeline Section
**Issue**: Desktop timeline needs connecting line
**Fix**: Add horizontal line connecting all timeline items:
```tsx
<div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300"></div>
```

## 10. Animation Styles (Optional)
**Issue**: Site uses fade-in animations on scroll
**Note**: These are likely handled by a scroll animation library (Framer Motion, etc.)
**Fix**: If implementing animations, add:
- Fade-in on scroll
- Stagger animations for lists
- Transform animations

## 11. Text Color Classes
**Issue**: Ensure all text colors match
**Fix**: Verify usage of:
- `text-charcoal` for body text
- `text-black` for headings
- `text-gray-500` for labels
- `text-gray-600` for secondary text

## 12. Border Styles
**Issue**: Border colors and widths
**Fix**: Ensure:
- `border-black` for primary borders
- `border-gray-200` for card borders
- `border-gray-300` for secondary borders
- `border-2` for emphasis (pricing section)

## 13. Spacing
**Issue**: Consistent spacing throughout
**Fix**: Verify:
- Section padding: `py-20 md:py-24`
- Card padding: `p-10` for large cards, `p-8` for smaller
- Gap spacing: `gap-8` for grids, `gap-4` for flex items

## 14. Responsive Breakpoints
**Issue**: Ensure responsive design matches
**Fix**: Verify breakpoints:
- `md:` for tablets (768px+)
- `lg:` for desktops (1024px+)

## Priority Fixes:
1. ✅ Add logo images
2. ✅ Fix active navigation indicator
3. ✅ Verify color values
4. ✅ Check typography
5. ✅ Ensure all hover effects work
6. ✅ Verify spacing consistency

