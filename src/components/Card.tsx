import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { CardInterface } from '~/data/types';
import { useStore } from '~/store';

type CardProps = { card: CardInterface };

export default React.memo(function Card({ card }: CardProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1 }}
			onClick={() => toggleCard(card)}
			className='select-none'
			layout='position'
		>
			<Image
				src={card.imageUrl}
				className='block rounded-lg'
				draggable={false}
				alt={card.name}
				// REVIEW - fixed width/height
				width={240}
				height={367}
			/>
		</motion.button>
	);
});
