# Gadget Gor Frontend

Modern e-commerce frontend for online gadget selling.

## Features

- Home page with 6 sections
- Product cards and product details page
- Order place page
- User dashboard
- Admin dashboard
- Login/Register UI
- Tailwind CSS modern responsive design
- React Hot Toast ready
- Backend API helper ready in `lib/api.ts`

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: http://localhost:3000

## Backend API

Set your backend URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Then connect login/register/product/order forms with your backend routes.
