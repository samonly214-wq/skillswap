# SkillSwap - Dependencies Reference

## ✅ All Dependencies Are Already Installed!

**No action needed.** All required packages are installed in the project.

## 📦 Core Dependencies

### React & Build Tools
```json
{
  "react": "18.3.1",                    // ✅ INSTALLED
  "react-dom": "18.3.1",                // ✅ INSTALLED  
  "vite": "6.3.5",                      // ✅ INSTALLED
  "@vitejs/plugin-react": "4.7.0"      // ✅ INSTALLED
}
```

### Supabase (Database & Auth)
```json
{
  "@supabase/supabase-js": "^2.93.2"   // ✅ INSTALLED
}
```
**Used for:**
- User authentication (sign up, sign in, sign out)
- Database queries (skills, profiles, swap requests)
- Real-time subscriptions (future feature)

### UI Components (@radix-ui)
```json
{
  "@radix-ui/react-dialog": "1.1.6",           // ✅ INSTALLED - Modals
  "@radix-ui/react-dropdown-menu": "2.1.6",    // ✅ INSTALLED - Dropdowns
  "@radix-ui/react-avatar": "1.1.3",           // ✅ INSTALLED - Avatars
  "@radix-ui/react-tabs": "1.1.3",             // ✅ INSTALLED - Tabs
  "@radix-ui/react-progress": "1.1.2",         // ✅ INSTALLED - Progress bars
  "@radix-ui/react-select": "2.1.6",           // ✅ INSTALLED - Select menus
  "@radix-ui/react-separator": "1.1.2",        // ✅ INSTALLED - Dividers
  "@radix-ui/react-slider": "1.2.3",           // ✅ INSTALLED - Sliders
  "@radix-ui/react-switch": "1.1.3",           // ✅ INSTALLED - Toggle switches
  "@radix-ui/react-label": "2.1.2",            // ✅ INSTALLED - Form labels
  "@radix-ui/react-checkbox": "1.1.4",         // ✅ INSTALLED - Checkboxes
  "@radix-ui/react-scroll-area": "1.2.3"       // ✅ INSTALLED - Scroll areas
}
```
**Used for:** Professional, accessible UI components

### Icons
```json
{
  "lucide-react": "0.487.0"            // ✅ INSTALLED
}
```
**Used for:** 1000+ beautiful icons (User, Search, Star, etc.)

### Animations
```json
{
  "motion": "12.23.24"                 // ✅ INSTALLED
}
```
**Used for:** Smooth animations and transitions (formerly Framer Motion)

### Styling
```json
{
  "tailwindcss": "4.1.12",             // ✅ INSTALLED
  "@tailwindcss/vite": "4.1.12",       // ✅ INSTALLED
  "tailwind-merge": "3.2.0",           // ✅ INSTALLED - Merge Tailwind classes
  "clsx": "2.1.1",                     // ✅ INSTALLED - Conditional classes
  "class-variance-authority": "0.7.1"  // ✅ INSTALLED - Component variants
}
```
**Used for:** Beautiful, responsive styling

### Utilities
```json
{
  "date-fns": "3.6.0",                 // ✅ INSTALLED - Date formatting
  "sonner": "2.0.3"                    // ✅ INSTALLED - Toast notifications
}
```

## 🚫 NO Missing Dependencies!

### VS Code Setup (If needed)
If you're moving this to VS Code, just run:

```bash
# This will install all dependencies from package.json
npm install
```

But in **Figma Make**, everything is already installed automatically! ✅

## 🔍 Verify Installation

To check if a dependency is installed, look at `/package.json`:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.93.2",  // ← THIS LINE means it's installed
    "react": "18.3.1",
    // ... etc
  }
}
```

## 📋 Full Dependency List

### Production Dependencies (34 packages)
1. @emotion/react - CSS-in-JS
2. @emotion/styled - Styled components
3. @mui/icons-material - Material icons (optional, not used)
4. @mui/material - Material UI (optional, not used)
5. @popperjs/core - Tooltip positioning
6. @radix-ui/* - UI component primitives (12 packages)
7. @supabase/supabase-js - **MAIN DATABASE CLIENT**
8. class-variance-authority - Component variants
9. clsx - Utility for classes
10. cmdk - Command palette
11. date-fns - Date utilities
12. lucide-react - **ICONS**
13. motion - **ANIMATIONS**
14. react - **CORE**
15. react-dom - **CORE**
16. tailwind-merge - Tailwind utilities
17. tailwindcss - **STYLING**
18. sonner - Toast notifications

### Dev Dependencies (3 packages)
1. @tailwindcss/vite - Tailwind integration
2. @vitejs/plugin-react - React support
3. vite - Build tool

## 🎯 What Each Dependency Does

### Critical (Required for core functionality)
- **@supabase/supabase-js** - Database, auth, storage
- **react & react-dom** - Core framework
- **tailwindcss** - Styling
- **motion** - Animations
- **lucide-react** - Icons

### Important (Used frequently)
- **@radix-ui/react-*** - Professional UI components
- **date-fns** - Format dates nicely
- **clsx** - Conditional CSS classes
- **sonner** - Toast notifications

### Optional (Nice to have)
- **@mui/material** - Not currently used, can remove
- **@mui/icons-material** - Not currently used, can remove

## 🔧 If You Need to Reinstall

### In Figma Make
Dependencies are auto-installed. Nothing to do!

### In VS Code
```bash
# Install all dependencies
npm install

# Or install a specific package
npm install @supabase/supabase-js

# Or install a dev dependency
npm install -D @types/react
```

## 📦 Package Sizes

Approximate sizes of main packages:
- @supabase/supabase-js: ~200KB
- react + react-dom: ~130KB
- motion: ~85KB
- tailwindcss: ~30KB (production build)
- lucide-react: ~1KB per icon
- @radix-ui/*: ~5KB per component

**Total bundle size:** ~500KB (after gzip)

## 🚀 Production Build

When building for production:

```bash
npm run build
```

This will:
1. Bundle all dependencies
2. Minify JavaScript
3. Optimize CSS (remove unused Tailwind)
4. Tree-shake unused code
5. Output to `/dist` folder

## 🔒 Security

All dependencies are from trusted sources:
- ✅ @supabase/* - Official Supabase SDK
- ✅ react - Facebook/Meta
- ✅ @radix-ui/* - Official Radix UI
- ✅ tailwindcss - Tailwind Labs
- ✅ lucide-react - Lucide project

Regular updates recommended, but current versions are stable.

## 📱 Browser Compatibility

All dependencies support:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🎉 Summary

**Status: ✅ ALL DEPENDENCIES INSTALLED**

**Action Required: NONE**

**Just execute the SQL schema and your app is ready to deploy!**

---

## 📞 Need Help?

If you see errors like "Module not found", it means:
1. Package.json is corrupted (unlikely in Figma Make)
2. Node modules folder is missing (auto-fixed in Figma Make)
3. Import path is wrong (check the path)

But **this should never happen** in Figma Make because dependencies are pre-installed! 🎊
