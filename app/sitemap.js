import { getSiteUrl } from '../lib/site';
import { routeOrder } from '../lib/pages';
export default function sitemap(){const base=getSiteUrl();const now=new Date();return [{url:`${base}/`,lastModified:now,changeFrequency:'weekly',priority:1},...routeOrder.map((slug,i)=>({url:`${base}/${slug}/`,lastModified:now,changeFrequency:'monthly',priority:i<6?.9:.7}))]}
