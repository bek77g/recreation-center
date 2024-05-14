import { useTranslations } from 'next-intl';

export function WhatsAppFloating({
	phone = '',
	text = '',
}: {
	phone: string;
	text: string;
}) {
	const t = useTranslations('Floating');

	return (
		<a
			href='https://wa.me/{phone}?text={text}'
			className='cursor-pointer bg-white/30 hover:backdrop-blur-xl backdrop-blur flex items-center gap-3 py-2 px-4 fixed right-0 bottom-10 rounded-l-full'>
			<svg
				width='36'
				height='36'
				viewBox='0 0 36 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clip-path='url(#clip0_357_0)'>
					<path
						d='M9.51518 30.8325L10.1037 31.1235C12.5562 32.5778 15.3027 33.2565 18.0494 33.2565C26.6817 33.2565 33.7444 26.2756 33.7444 17.7433C33.7444 13.6711 32.0768 9.69582 29.1341 6.78704C26.1912 3.87827 22.2673 2.23006 18.0494 2.23006C9.41716 2.23006 2.35427 9.211 2.45243 17.8403C2.45243 20.7489 3.33527 23.5608 4.80663 25.9846L5.19897 26.5665L3.6296 32.287L9.51518 30.8325Z'
						fill='#00E676'
					/>
					<path
						d='M30.8015 5.23571C27.4663 1.84225 22.8559 0 18.1474 0C8.14191 0 0.0981562 8.04746 0.196172 17.8402C0.196172 20.9428 1.07902 23.9486 2.55052 26.6634L0 35.8744L9.51511 33.4504C12.1636 34.9049 15.1064 35.5836 18.0494 35.5836C27.9568 35.5836 36.0006 27.536 36.0006 17.7434C36.0006 12.9924 34.1367 8.53228 30.8017 5.23571H30.8015ZM18.1474 32.5779C15.4988 32.5779 12.8503 31.8993 10.5941 30.5419L10.0056 30.251L4.3162 31.7053L5.78756 26.1788L5.39522 25.597C1.07902 18.7131 3.13903 9.5988 10.2018 5.33259C17.2645 1.06652 26.3873 3.10267 30.7035 10.0836C35.0196 17.0646 32.9595 26.0817 25.8969 30.3479C23.6406 31.8022 20.8941 32.5778 18.1474 32.5778V32.5779ZM26.7796 21.8157L25.7006 21.3309C25.7006 21.3309 24.1312 20.6522 23.1502 20.1674C23.0521 20.1674 22.9541 20.0704 22.8559 20.0704C22.5616 20.0704 22.3654 20.1674 22.1692 20.2644C22.1692 20.2644 22.0712 20.3613 20.6979 21.9126C20.5997 22.1065 20.4036 22.2035 20.2074 22.2035H20.1092C20.0112 22.2035 19.815 22.1065 19.7169 22.0096L19.2264 21.8157C18.1474 21.3309 17.1665 20.7491 16.3817 19.9735C16.1855 19.7796 15.8912 19.5857 15.695 19.3918C15.0083 18.7131 14.3217 17.9373 13.8313 17.0647L13.7332 16.8708C13.6351 16.7738 13.6351 16.6769 13.537 16.483C13.537 16.2891 13.537 16.0952 13.6351 15.9982C13.6351 15.9982 14.0275 15.5134 14.3217 15.2226C14.518 15.0285 14.616 14.7378 14.8122 14.5439C15.0083 14.2529 15.1065 13.8651 15.0083 13.5742C14.9103 13.0894 13.7332 10.4716 13.439 9.88985C13.2427 9.59894 13.0466 9.50206 12.7523 9.40504H11.6733C11.477 9.40504 11.2809 9.50206 11.0846 9.50206L10.9865 9.59894C10.7903 9.69595 10.5941 9.88985 10.398 9.98673C10.2018 10.1808 10.1036 10.3745 9.90745 10.5686C9.22078 11.4412 8.82844 12.5077 8.82844 13.5742C8.82844 14.3498 9.02461 15.1256 9.31894 15.8043L9.41709 16.0952C10.2999 17.9373 11.477 19.5857 13.0466 21.04L13.439 21.4278C13.7332 21.7187 14.0275 21.9126 14.2237 22.2034C16.2837 23.9488 18.6379 25.2092 21.2864 25.8879C21.5807 25.9848 21.9731 25.9848 22.2674 26.0818H23.2483C23.7388 26.0818 24.3273 25.8879 24.7198 25.694C25.014 25.5001 25.2101 25.5001 25.4063 25.3062L25.6026 25.1122C25.7988 24.9183 25.995 24.8214 26.1911 24.6275C26.3873 24.4336 26.5835 24.2397 26.6816 24.0456C26.8778 23.6578 26.9758 23.173 27.074 22.6883V22.0096C27.074 22.0096 26.9758 21.9126 26.7796 21.8157Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_357_0'>
						<rect width='36' height='36' fill='white' />
					</clipPath>
				</defs>
			</svg>
			<p className='text-white'>{t('whatsapp')}</p>
		</a>
	);
}
