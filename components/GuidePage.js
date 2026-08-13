import Breadcrumbs from './Breadcrumbs';
import Link from 'next/link';
import { getSiteUrl, siteName } from '../lib/site';

export default function GuidePage({slug,data}) {
  const base = getSiteUrl();
  const schema = {
    '@context':'https://schema.org','@type':'Article',
    headline:data.h1, description:data.description,
    mainEntityOfPage:`${base}/${slug}/`,
    author:{'@type':'Organization',name:siteName},
    publisher:{'@type':'Organization',name:siteName}
  };
  const crumb = {
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:`${base}/`},
      {'@type':'ListItem',position:2,name:data.h1,item:`${base}/${slug}/`}
    ]
  };
  return <main className="wrap main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(crumb)}} />
    <Breadcrumbs label={data.h1}/>
    <section className="hero"><div className="eyebrow">Independent hardware wallet guide</div><h1>{data.h1}</h1><p className="lead">{data.intro}</p><div className="notice"><strong>Security notice:</strong> This website never asks for your seed phrase, recovery words, private key or wallet access code.</div></section>
    <section className="contentGrid"><article>
      {data.sections.map(([h,t])=><section key={h} className="section"><h2>{h}</h2><p>{t}</p></section>)}
      <section className="officialBox"><h2>Official resources</h2><p>For downloads and security-sensitive actions, continue through official sources:</p><div className="buttons">{data.links.map(([label,url])=><a className="button" href={url} target="_blank" rel="noopener noreferrer" key={url}>{label} ↗</a>)}</div></section>
    </article>
    <aside className="aside"><h3>Related guides</h3><Link href="/tangem-setup/">Tangem Setup</Link><Link href="/tangem-app-download/">Tangem App Download</Link><Link href="/tangem-recovery/">Tangem Recovery</Link><Link href="/tangem-backup/">Tangem Backup</Link><Link href="/tangem-supported-coins/">Supported Coins</Link><Link href="/tangem-support/">Tangem Support</Link><Link href="/tangem-security/">Tangem Security</Link></aside>
    </section>
  </main>
}
