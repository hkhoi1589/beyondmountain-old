'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const animation = { duration: 20000, easing: (t) => t };

export default function Carousel(props) {
	const [sliderRef] = useKeenSlider({
		loop: true,
		slides: { origin: 'center', perView: 2, spacing: 10 },
		breakpoints: {
			'(min-width: 640px)': {
				slides: { origin: 'center', perView: 2.5, spacing: 10 },
			},
			'(min-width: 1024px)': {
				slides: { origin: 'center', perView: 3.5, spacing: 10 },
			},
		},
		// renderMode: "performance",
		mode: 'free',
		drag: true,
		rtl: props.rtl,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});
	return (
		<div ref={sliderRef} className='keen-slider'>
			<div className='keen-slider__slide rounded-lg'>
				<img width={378} height={212} src='/img/course/s-1.png' />
			</div>
			<div className='keen-slider__slide rounded-lg'>
				<img width={378} height={212} src='/img/course/s-2.png' />
			</div>
			<div className='keen-slider__slide rounded-lg'>
				<img width={378} height={212} src='/img/course/s-3.png' />
			</div>
			<div className='keen-slider__slide rounded-lg'>
				<img width={378} height={212} src='/img/course/s-4.png' />
			</div>
			<div className='keen-slider__slide rounded-lg'>
				<img width={378} height={212} src='/img/course/s-2.png' />
			</div>
		</div>
	);
}
