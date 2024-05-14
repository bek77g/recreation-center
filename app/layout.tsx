import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return <AntdRegistry>{children}</AntdRegistry>;
}
