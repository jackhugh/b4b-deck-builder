import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '~/store';
import clsx from 'clsx';
import { CardInterface } from '~/data/types';
import Image from 'next/image';

type CardProps = { card: CardInterface };

// NOTE - react.memo causes issues with motion layout prop
export default React.memo(function Card({ card }: CardProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	const [showCard, setShowCard] = useState(false);

	return (
		<motion.div
			onViewportEnter={() => setShowCard(true)}
			onViewportLeave={() => setShowCard(false)}
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
					<Image
						src={card.imageUrl}
						className='block rounded-lg'
						width={15 * 16}
						height={15 * 16 * 1.5327}
						draggable={false}
					/>
				</motion.button>
			)}
		</motion.div>
	);
});
