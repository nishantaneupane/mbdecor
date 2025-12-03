# MD Decor - Sanity Integration Branch

This branch adds **dual data source support** to the MD Decor project, allowing you to switch between JSON files and Sanity CMS.

## ✨ Features Added

- **Environment-based data source switching** via `DATA_SOURCE` env variable
- **Sanity CMS integration** with schemas for categories, products, and banners
- **Unified data layer** - same API for both JSON and Sanity
- **Type-safe queries** with TypeScript interfaces
- **Backward compatible** - existing JSON data still works

## 🔧 Configuration

### Using JSON (Default)
```env
DATA_SOURCE=json
```

### Using Sanity
```env
DATA_SOURCE=sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
```

## 📁 New Files

- `/lib/sanity.client.ts` - Sanity client configuration
- `/lib/sanity.queries.ts` - All Sanity queries
- `/sanity/schemas/` - Category, Product, Banner schemas
- `/sanity.config.ts` - Sanity studio configuration
- `/.env.local` - Environment configuration
- `/.env.example` - Example environment file
- `/SANITY_SETUP.md` - Complete setup documentation

## 🔄 Modified Files

- `/lib/data.ts` - Now supports both JSON and Sanity
- `/components/Navbar.tsx` - Updated to handle async data
- All page components - Added `await` for async data calls
- `/app/studio/[[...tool]]/page.tsx` - Studio setup instructions

## 🚀 Quick Start

1. **Clone and install dependencies** (already done)

2. **Use JSON data (default)**:
   ```bash
   npm run dev
   ```

3. **Switch to Sanity**:
   - Create a Sanity project at [sanity.io](https://www.sanity.io)
   - Update `.env.local` with your credentials
   - Set `DATA_SOURCE=sanity`
   - Run `npx sanity dev` in a separate terminal
   - Access studio at `http://localhost:3333`

## 📝 How It Works

The `lib/data.ts` file checks the `DATA_SOURCE` environment variable:

```typescript
const DATA_SOURCE = process.env.DATA_SOURCE || "json";

export async function getAllCategories(): Promise<Category[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getAllCategories();
  }
  return categoriesData; // JSON fallback
}
```

## ✅ Testing

Build successful with JSON data source:
```bash
npm run build
# ✓ Compiled successfully
```

## 📚 Documentation

See `SANITY_SETUP.md` for complete setup instructions including:
- Sanity project creation
- Schema definitions
- Data migration
- Studio deployment

## 🔀 Merging to Main

This branch can be safely merged to main. It:
- Maintains backward compatibility
- Defaults to JSON data
- Passes all builds
- Includes comprehensive documentation
