import { Fancybox } from '@/components/ui';
import { useTranslations } from 'next-intl';

export function AboutSection() {
	const t = useTranslations('Sections.about');

	return (
		<section>
			<div className='container'>
				<div>
					<h3 className='section-suptitle'>{t('suptitle')}</h3>
					<h2 className='section-title'>{t('title')}</h2>
				</div>
				<div>
					<p dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
					<Fancybox>
						<a href='' data-fancybox='gallery'></a>
					</Fancybox>
				</div>
			</div>
		</section>
	);
}
