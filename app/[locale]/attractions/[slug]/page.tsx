import { AttractionDetail } from '@/components/sections/attraction';
import { getAttractionBySlug } from '@/utils/fetch';
export default async function AttractionDetailPage({ params }) {
  const data = await getAttractionBySlug(params.slug);

  return (
    <div className="pt-14">
      {data[0] ? <AttractionDetail data={data[0]} /> : <h2 className="pt-20">404</h2>}
    </div>
  );
}
