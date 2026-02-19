# Kesariya Flower Decoration Website

A modern, static wedding services showcase website built with Next.js 14, TypeScript, and Tailwind CSS v3.

## Features

- 🎨 **Premium Design** - Beautiful gradient colors (rose/pink & gold) with modern aesthetics
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Static Export** - Fast performance with static site generation
- 🌸 **Service Showcase** - Display wedding services across multiple categories
- 📝 **Inquiry Form** - Contact form with validation (EmailJS integration ready)
- 🎯 **SEO Optimized** - Proper metadata and semantic HTML

## Services Categories

- Wedding Venues
- Mandap Decoration
- Stage Decoration
- Flower Decoration
- Catering Services
- Photography & Videography
- Music & DJ
- Lighting & Effects

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Forms:** React Hook Form
- **Email:** EmailJS (configuration needed)

## Getting Started

### Prerequisites

- Node.js 18+ (currently running on v18, but v20+ recommended for Next.js 16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── facilities/          # Services gallery
│   │   └── [slug]/         # Individual service pages
│   ├── categories/          # Category filter pages
│   │   └── [category]/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Header, Footer
│   ├── home/               # Home page sections
│   ├── facilities/         # Service components
│   └── forms/              # Inquiry form
├── lib/                     # Utilities and data
│   ├── facilities.ts       # Service data
│   └── email.ts            # EmailJS config
└── types/                   # TypeScript types
```

## Configuration

### EmailJS Setup

To enable the contact form email functionality:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `lib/email.ts` with your credentials:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

### Customization

**Brand Colors** - Edit `tailwind.config.js`:

- Primary (rose/pink): `hsl(340, 75%, 55%)`
- Secondary (gold): `hsl(45, 90%, 60%)`

**Fonts** - Google Fonts imported in `globals.css`:

- Headings: Playfair Display
- Body: Inter

**Service Data** - Edit `lib/facilities.ts` to add/modify services

## Deployment

This static site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

```bash
npm run build
# Deploy the 'out' directory
```

## TODO

- [ ] Add real facility images to `/public/images/facilities/`
- [ ] Configure EmailJS with actual credentials
- [ ] Add more facility entries
- [ ] Consider adding image gallery/lightbox for facility details
- [ ] Add testimonials section
- [ ] Set up Google Analytics (optional)

## Contact

For inquiries about Kesariya Flower Decoration services:

- Phone: +91 95175 65444
- Email: saching3gupta@gmail.com
- Location: Dakkhin Darwaja, Station Road, Basti, Uttar Pradesh 272002
- Instagram: [@kesariya_flower_decoration](https://www.instagram.com/kesariya_flower_decoration?igsh=bjN2c3dxNzVwbXp6)
- Facebook: [Kesariya Flower Decoration](https://www.facebook.com/share/1C7UeBDao2/)
- YouTube: [@sachingupta5296](https://m.youtube.com/%40sachingupta5296)

---

**Built with ❤️ for unforgettable celebrations**
