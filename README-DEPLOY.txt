COLD WALLET COMPANION — TANGEM SEO PROJECT

1) Upload this project to a GitHub repository.
2) In Vercel, create/import the repository as a Next.js project.
3) Framework preset: Next.js.
4) Build command: next build (default).
5) Install command: npm install (default).
6) No custom start command is needed on Vercel.
7) After Vercel gives you the final production domain, add this Environment Variable:

   NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.vercel.app

   Use the final canonical domain, with https:// and no trailing slash.

8) Redeploy once after adding/changing NEXT_PUBLIC_SITE_URL.
9) Test:
   /
   /tangem/
   /tangem-wallet/
   /tangem-setup/
   /tangem-app-download/
   /tangem-recovery/
   /sitemap.xml
   /robots.txt

SEO NOTES
- Site identity: Cold Wallet Companion (independent).
- The site does NOT impersonate Tangem.
- App/download buttons point to official stores or official Tangem GitHub.
- Recovery/security pages never collect seed phrases, recovery phrases, private keys or access codes.
- Tangem firmware page correctly explains Tangem's immutable/non-updatable hardware firmware architecture.

SEARCH CONSOLE PRIORITY AFTER DEPLOY
1. Submit sitemap.xml once.
2. Request indexing for /tangem/
3. Request indexing for /tangem-setup/
4. Request indexing for /tangem-recovery/
5. Let the remaining pages be discovered through sitemap + internal links.
