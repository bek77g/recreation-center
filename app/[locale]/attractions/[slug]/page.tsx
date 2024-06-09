import { AttractionDetail } from '@/components/sections/attraction';
import { getAttractionBySlug } from '@/utils/fetch';
import { notFound } from 'next/navigation';
export default async function AttractionDetailPage({ params }) {
  const data = await getAttractionBySlug(params.slug);

  if (!data[0]) return notFound();

  return (
    <div className="pt-14">
      <AttractionDetail data={data[0]} />
    </div>
  );
}
