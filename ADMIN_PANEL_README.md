# Admin Panel Documentation

## Overview
The ADJC website now includes a comprehensive admin panel for managing blog posts. The admin panel is built with Vue 3 and integrates with Supabase for authentication and data management.

## Features
- **Authentication**: Secure login/logout system using Supabase Auth
- **Blog Management**: Create, read, update, and delete blog posts
- **Bilingual Support**: Full support for French and English content
- **Rich Content**: Support for multiple images, categories, tags, and metadata
- **Responsive Design**: Works on desktop and mobile devices

## Access
1. Click the lock icon (🔒) in the top navigation bar
2. Enter your admin credentials
3. You'll be redirected to the admin panel

## Blog Post Fields
Each blog post supports the following fields in both French and English:

- **Title**: The main headline
- **Category**: Content category (e.g., "Programme", "Événement")
- **Excerpt**: Short summary (appears in previews)
- **Content**: Full article body (supports HTML)
- **Images**: Main image, top image, and middle image URLs
- **Metadata**: Author, date, read time, tags

## Database Schema
The blog posts are stored in a Supabase table called `blog_posts` with the following structure:

```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  cat_fr TEXT NOT NULL,
  cat_en TEXT NOT NULL,
  excerpt_fr TEXT NOT NULL,
  excerpt_en TEXT NOT NULL,
  body_fr TEXT NOT NULL,
  body_en TEXT NOT NULL,
  img_url TEXT NOT NULL,
  img_top_url TEXT,
  img_mid_url TEXT,
  date TEXT NOT NULL,
  read_time INTEGER NOT NULL,
  author TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}'
);
```

## Security
- Authentication is handled by Supabase Auth
- Admin panel requires valid login credentials
- All database operations use Row Level Security (RLS)
- Service key is used for admin operations (not exposed to client)

## Usage Tips
1. **Images**: Use high-quality images hosted externally (Unsplash, etc.)
2. **Tags**: Separate multiple tags with commas
3. **Date Format**: Use format like "15 Mars 2026" or "March 15, 2026"
4. **Read Time**: Estimated reading time in minutes
5. **Categories**: Keep consistent across posts for better filtering

## Development
The admin panel consists of:
- `src/composables/useAuth.js` - Authentication logic
- `src/pages/AdminLoginPage.vue` - Login form
- `src/pages/AdminPanelPage.vue` - Main admin interface
- Updated navbar with admin login button

## Environment Variables
Make sure these are set in your `.env` file:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_SERVICE_KEY`