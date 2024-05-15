import { Button, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

import bgIntro from '@/assets/images/bg-intro.jpg';
import { ListIcon, Phone, UsersRound } from 'lucide-react';

export function IntroSection() {
	const t = useTranslations('Sections.intro');

	return (
		<section
			className='relative h-screen w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#02345a52] before:z-10'
			style={{ backgroundImage: `url(${bgIntro.src})` }}>
			<div className='relative z-20 container h-full flex flex-col justify-center items-center'>
				<div className='flex flex-col items-center gap-6'>
					<h2 className='text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]'>
						{t('title')}
					</h2>
					<Form className='flex gap-4 w-full justify-center items-center'>
						<Input
							name='quests'
							prefix={<UsersRound size={22} strokeWidth={1} />}
							placeholder={t('form.quests')}
							size='large'
							className='w-full max-w-[250px] !bg-white/90 !focus:!bg-white'
							type='number'
						/>
						<Input
							name='phone'
							prefix={<Phone size={22} strokeWidth={1} />}
							placeholder={t('form.phone')}
							size='large'
							className='w-full max-w-[354px] !bg-white/90 !focus:!bg-white'
							type='tel'
						/>
						<Input
							name='notes'
							prefix={<ListIcon size={22} strokeWidth={1} />}
							placeholder={t('form.notes')}
							size='large'
							className='w-full max-w-[354px] !bg-white/90 !focus:!bg-white'
						/>
						<Button type='primary' className='h-full' size='large'>
							{t('form.reserve')}
						</Button>
					</Form>
				</div>
			</div>
		</section>
	);
}
