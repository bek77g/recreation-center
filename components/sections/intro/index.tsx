import { Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export function IntroSection() {
	const t = useTranslations('Sections.intro');

	return (
		<section className='h-screen w-full bg-[#02345a98]'>
			<div className='container h-full flex flex-col justify-center items-center'>
				<div className='flex flex-col items-center gap-6'>
					<h2 className='text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]'>
						{t('title')}
					</h2>
					<Form className='flex gap-4 w-full justify-center'>
						<Input size='large' className='w-full max-w-[250px]' />
						<Input size='large' className='w-full max-w-[354px]' />
						<Input size='large' className='w-full max-w-[354px]' />
					</Form>
				</div>
			</div>
		</section>
	);
}
