import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '~/store';
import clsx from 'clsx';
import { CardInterface } from '~/data/types';

type CardProps = { card: CardInterface };

// NOTE - react.memo causes issues with motion layout prop
export default React.memo(function Card({ card }: CardProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1 }}
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
			onClick={() => toggleCard(card)}
			className={clsx('select-none')}
			layout='position'
			// layoutId={card.imageUrl}
		>
			<img src={`/cards/${card.imageUrl}`} className='block rounded-lg' draggable={false} />
		</motion.button>
	);
});
