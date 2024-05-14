import { useTranslations } from 'next-intl';

export function IntroSection() {
	const t = useTranslations('Sections.intro');

	return (
		<section className='h-screen w-full bg-[#02345a98]'>
			<div className='container'>
				<h2>{t('title')}</h2>
			</div>
		</section>
	);
}
