import cards from '~/data/card-data.json';
import { CardInterface } from '~/data/types';
import { useStore } from '~/store';
import Card from './Card';
import { motion } from 'framer-motion';

export default function CardBrowser() {
	const cardSelection = useStore((state) => state.cardSelection);

	return (
		<div className='flex'>
			<motion.div
				className='grid justify-center w-full gap-4'
				style={{ gridTemplateColumns: 'repeat(auto-fill, 15rem' }}
			>
				{cards
					.filter((card) => !cardSelection.includes(card as CardInterface))
					.map((card) => (
						<Card card={card as CardInterface} key={card.imageUrl} />
					))}
			</motion.div>
		</div>
	);
}
