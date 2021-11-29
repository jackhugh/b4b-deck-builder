import { CardInterface } from '~/data/types';
import { motion, Reorder } from 'framer-motion';
import { useStore } from '~/store';

type CardPreviewProps = { card: CardInterface };

export default function CardPreview({ card }: CardPreviewProps) {
	const toggleCard = useStore((state) => state.toggleCard);

	return (
		<motion.button
			className='h-[75px] rounded-lg overflow-hidden'
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1 }}
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
			onClick={() => toggleCard(card)}
		>
			<div className='h-[75px] rounded-lg overflow-hidden'>
				<img src={`/cards/${card.imageUrl}`} alt='' className='w-full' />
			</div>
		</motion.button>
	);
}
