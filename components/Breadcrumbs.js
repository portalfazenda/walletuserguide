import Link from 'next/link';
export default function Breadcrumbs({label}){return <div className="breadcrumbs"><Link href="/">Home</Link><span>›</span><span>{label}</span></div>}
