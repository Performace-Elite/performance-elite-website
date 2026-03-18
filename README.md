# Performance Elite Volleyball Consulting Website

Deploy-ready React/Vite site for GitHub + Vercel.

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Import the repo into Vercel.
4. Deploy.

## Important before going live

Update the FormSubmit redirect in `src/App.jsx`:

```jsx
<input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
```

Replace `yourdomain.com` with your real Vercel or custom domain.

## FormSubmit note

The first live submission will send a confirmation email to `performanceelitevolleyball@gmail.com`.
Open it and confirm to activate submissions.
