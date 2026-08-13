import { getSiteUrl, siteName } from '../lib/site';
export function makeMetadata(slug,data){
 const base=getSiteUrl(); const url=`${base}/${slug}/`;
 return {
   title:data.title,
   description:data.description,
   alternates:{canonical:url},
   openGraph:{title:data.title,description:data.description,url,type:'article',siteName},
   twitter:{card:'summary_large_image',title:data.title,description:data.description}
 };
}
