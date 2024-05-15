import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { IntroSection } from '@/components/sections/intro';

export default function Home() {
	return (
		<>
			<IntroSection />
			<AboutSection />
			<AttractionsSection />
		</>
	);
}
