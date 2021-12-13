import { AnimatePresence } from 'framer-motion';
import { useCardFilters } from '~/hooks/useCardFilters';
import Card from './Card';
import { CardFilter } from './CardFilter';

export default function CardBrowser() {
	const cards = useCardFilters();

	return (
		<div className='flex items-start gap-4'>
			<CardFilter />

			<div
				className='grid justify-center w-full gap-4'
				style={{ gridTemplateColumns: 'repeat(auto-fill, 15rem)' }}
			>
				{/* <AnimatePresence> */}
				{cards.map((card) => (
					<Card card={card} key={card.imageUrl} />
				))}
				{/* </AnimatePresence> */}
			</div>
		</div>
	);
}
