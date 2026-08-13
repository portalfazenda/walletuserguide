import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSiteUrl, siteDescription, siteName } from '../lib/site';

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: `${siteName} | Independent Hardware Wallet Guides`, template: `%s | ${siteName}` },
  description: siteDescription,
  robots: { index: true, follow: true },
  openGraph: { siteName, type: 'website' }
};

export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
