import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './globals.css';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AntdRegistry>{children}</AntdRegistry>;
}
