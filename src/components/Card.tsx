import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '~/store';
import clsx from 'clsx';
import { CardInterface } from '~/data/types';

type CardProps = { card: CardInterface };

export default React.memo(function Card({ card }: CardProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	const [showCard, setShowCard] = useState(true);

	return (
		<motion.div
			// REVIEW - performance impact.
			onViewportEnter={() => setShowCard(true)}
			onViewportLeave={() => setShowCard(false)}
			// REVIEW
			style={{ height: 367, width: 240 }}
		>
			{showCard && (
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1 }}
					onClick={() => toggleCard(card)}
					className={clsx('select-none')}
					layout='position'
					// layoutId={card.imageUrl}
				>
					<img src={card.imageUrl} className='block rounded-lg' draggable={false} alt={card.name} />
				</motion.button>
			)}
		</motion.div>
	);
});
