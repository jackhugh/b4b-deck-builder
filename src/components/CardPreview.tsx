import { CardInterface } from '~/data/types';
import { motion, Reorder } from 'framer-motion';
import { useStore } from '~/store';
import { useState } from 'react';

type CardPreviewProps = { card: CardInterface; number: number };

export default function CardPreview({ card, number }: CardPreviewProps) {
	const toggleCard = useStore((state) => state.toggleCard);
	// const [showPreview, setShowPreview] = useState(true);

	return (
		<Reorder.Item value={card} className='select-none w-full h-16'>
			<motion.button
				className='flex gap-2 w-full h-full'
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 1 }}
				// onClick={() => toggleCard(card)}
				// onHoverStart={() => setShowPreview(true)}
				// onHoverEnd={() => setShowPreview(false)}
				// layoutId={card.imageUrl}
			>
				{/* REVIEW: fixed width */}
				<div className='text-xl font-bold self-center w-4 text-center'>{number}</div>
				<div
					className='flex-1 h-full rounded-lg bg-cover'
					style={{ backgroundImage: `url(/cards/${card.imageUrl})` }}
				/>

				{/* {showPreview && (
					<img
						className='absolute top-0 h-[20rem] right-[calc(100% + 2rem)] right-1/2 block rounded-lg'
						draggable={false}
						src={`/cards/${card.imageUrl}`}
						alt={card.name}
					/>
				)} */}
			</motion.button>
		</Reorder.Item>
	);
}
