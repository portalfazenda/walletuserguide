export const siteName = 'Cold Wallet Companion';
export const siteDescription = 'Independent guides for setting up, using and troubleshooting hardware wallets safely.';

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`;
  return 'https://example.com';
}

export const official = {
  tangem: 'https://tangem.com/en/',
  help: 'https://tangem.com/en/help-center/',
  security: 'https://tangem.com/en/help-center/security/',
  firmware: 'https://tangem.com/en/help-center/security/firmware-authenticity/',
  recovery: 'https://tangem.com/en/help-center/security/device-loss-recovery/',
  seed: 'https://tangem.com/en/help-center/security/all-about-seed-phrases/',
  supported: 'https://tangem.com/en/wallet-for/page/1/',
  play: 'https://play.google.com/store/apps/details?id=com.tangem.wallet',
  appstore: 'https://apps.apple.com/app/tangem-crypto-wallet/id1354868448',
  github: 'https://github.com/tangem/tangem-app'
};
