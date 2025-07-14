# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website celebrating NUS High School's 20th anniversary. The application features a video intro, interactive story cards showcasing anniversary events, message board with AI content moderation and scroll-based dynamic backgrounds, and streamlined navigation focusing on core content.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Core Technologies
- **Next.js 15** with App Router and React 19 RC
- **TypeScript** with strict configuration
- **Tailwind CSS** with shadcn/ui components
- **Framer Motion** for animations
- **OpenAI API** for content moderation
- **Upstash Redis** for message storage

### Project Structure
- `src/app/` - App Router pages and API routes
- `src/components/` - Reusable UI components and CalendarPreview
- `src/types/` - TypeScript interfaces for events and navigation
- `src/lib/` - Utility functions (shuffle algorithm, image mapping)
- `src/hooks/` - Custom React hooks (scroll background management)
- `public/imgs/` - Static assets including intro videos
- `public/showcase/` - Event-specific photos organized by folders

### Key Components

**Main Layout (`src/app/layout.tsx`)**
- Fixed background with school logo
- Horizontal navigation bar (converted from sidebar)
- Global font configuration (Geist Sans/Mono)

**Homepage (`src/app/page.tsx`)**
- Video intro transitioning to interactive story cards
- Rich content display with expandable modals for full stories
- Photo-centric design using showcase images as backgrounds
- Featured event highlighting and responsive grid layout
- Smooth hover effects without jarring animations

**Message Board (`src/app/message-board/page.tsx`)**
- Scroll-based dynamic backgrounds using event showcase photos
- Enhanced instructional banner with clear submission guidelines
- Improved floating action button with hover tooltip
- AI content moderation with detailed user feedback
- Translucent overlays for optimal readability

**Message Board API (`src/app/api/messages/route.ts`)**
- OpenAI GPT-3.5-turbo powered content analysis
- Redis persistence with Upstash integration
- Multi-criteria validation: appropriateness, relevance, sincerity
- Detailed feedback for rejected submissions

**Navigation (`src/components/Sidebar.tsx`)**
- Streamlined horizontal navigation (Home + Messages only)
- Top-centered positioning with backdrop blur
- Interactive hover effects revealing text labels
- Responsive design with enhanced accessibility

### Configuration Details

**Styling System**
- Uses shadcn/ui "new-york" style with CSS variables
- Custom color scheme with neutral base
- Path aliases configured: `@/*` maps to `src/*`

**Environment Variables Required**
- `OPENAI_API_KEY` - For message content moderation
- `UPSTASH_REDIS_REST_URL` - Redis database URL
- `UPSTASH_REDIS_REST_TOKEN` - Redis authentication token

## Important Implementation Notes

### Story Card System (`src/app/page.tsx`)
- Interactive cards with photo backgrounds from `public/showcase/` 
- Expandable modals revealing full story content with rich typography
- Featured event highlighting with special badges and larger layouts
- Seeded randomization using Fisher-Yates algorithm for consistent sessions
- Smooth hover effects without jarring scale animations

### Event Data Structure (`src/types/timeline.ts`)
- Rich content model with `title`, `description`, `fullStory`, and `highlights`
- Featured event flagging for visual emphasis
- Image mapping system linking events to showcase photos
- Flexible structure supporting detailed storytelling over chronological ordering

### Scroll-Based Backgrounds (`src/hooks/useScrollBackground.ts`)
- Dynamic background system cycling through event showcase photos
- Smooth transitions based on scroll position percentage
- Images: Games Day, Mascot Launch, Nanosatellite, Research Congress, Speech Day
- Optimized with `bg-contain` for proper image display and readability

### Image Management (`src/lib/imageMapping.ts`)
- Centralized mapping of event keys to showcase photo paths
- Organized by event folders: Games Day, Mascot Launch, Nanosatellite, etc.
- Supports easy addition of new showcase images

### Enhanced Message Board UX
- Comprehensive instructional banner with submission guidelines
- Floating action button with hover tooltip and improved visibility
- Scroll-triggered background changes creating immersive experience
- AI-powered content moderation with detailed user feedback

### Navigation Simplification
- Reduced to core tabs: Home and Messages only
- Horizontal layout optimized for modern web browsing patterns
- Calendar page maintained for direct access but removed from main navigation
- Responsive design with proper spacing and accessibility

### Content Highlights
Key story elements emphasized throughout the site:
- **Nobel Laureate** Sir Konstantin Novoselov (Research Congress)
- **President Tharman** Shanmugaratnam (Speech Day)
- **NUSHSat1** - Singapore's first school-built nanosatellite
- **Novus** - Student-designed school mascot
- **School Motto** - "Experiment, explore and excel!"

### Video Handling
The homepage video uses both WebM and MP4 sources for browser compatibility, with state management for smooth transition to story card content.

### Component Library
Uses shadcn/ui components with Radix UI primitives and Lucide icons. Component configuration is stored in `components.json`.