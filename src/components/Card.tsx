import React from 'react';
import { CardInterface } from '~/data/types';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useStore } from '~/store';

type CardProps = { card: CardInterface };

export default function Card({ card }: CardProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	const width = 240;
	const height = 375;

	const angle = 25;

	const x = useMotionValue(width / 2);
	const y = useMotionValue(height / 2);

	const rotateY = useTransform(x, [0, width], [angle, -angle]);
	const rotateX = useTransform(y, [0, height], [-angle, angle]);

	const onMouseMove: React.MouseEventHandler = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();

		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);
	};

	return (
		<motion.button
			// layoutId={card.imageUrl}
			style={
				{
					// rotateX: rotateX,
					// rotateY: rotateY,
				}
			}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1 }}
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
			onMouseMove={onMouseMove}
			onClick={() => toggleCard(card)}
		>
			<img src={`/cards/${card.imageUrl}`} className='w-full rounded-lg' />
		</motion.button>
	);
}
