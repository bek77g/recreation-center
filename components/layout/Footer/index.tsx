import { Logo } from '@/components/ui';

interface IFooter {}

export function Footer({}: IFooter) {
	return (
		<footer className='container'>
			<div className='grid grid-cols-4'>
				<div>
					<Logo />
				</div>
			</div>
		</footer>
	);
}
