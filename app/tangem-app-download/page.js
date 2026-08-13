import GuidePage from '../../components/GuidePage';
import { pages } from '../../lib/pages';
import { makeMetadata } from '../../components/metadata';
const slug='tangem-app-download';
const data=pages[slug];
export const metadata=makeMetadata(slug,data);
export default function Page(){return <GuidePage slug={slug} data={data}/>}
