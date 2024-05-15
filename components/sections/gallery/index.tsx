'use client';

import { Fancybox } from '@/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export function GallerySection() {
	const sliderRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<section className='py-10'>
			<div className='container'>
				<h2 className='section-title text-end'>Gallery</h2>
				<div className='relative'>
					<Fancybox className='py-[60px]'>
						<Swiper ref={sliderRef} slidesPerView={4} pagination={false}>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
					</Fancybox>
					<div
						className='cursor-pointer grid place-items-center absolute z-10 top-1/2 -translate-y-1/2 left-0 w-[60px] h-[60px] rounded-full bg-[#e1963c]'
						onClick={handlePrev}>
						<ArrowLeft color='white' strokeWidth={1} absoluteStrokeWidth />
					</div>
					<div
						className='cursor-pointer grid place-items-center absolute z-10 top-1/2 -translate-y-1/2 right-0 w-[60px] h-[60px] rounded-full bg-[#e1963c]'
						onClick={handleNext}>
						<ArrowRight color='white' strokeWidth={1} absoluteStrokeWidth />
					</div>
				</div>
			</div>
		</section>
	);
}
