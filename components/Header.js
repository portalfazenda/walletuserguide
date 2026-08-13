import Link from 'next/link';
import { siteName } from '../lib/site';
export default function Header() {
  return <header className="siteHeader"><div className="wrap nav"><Link href="/" className="brand">◇ {siteName}</Link><nav><Link href="/tangem/">Tangem</Link><Link href="/tangem-setup/">Setup</Link><Link href="/tangem-recovery/">Recovery</Link><Link href="/tangem-support/">Support</Link></nav></div></header>;
}
