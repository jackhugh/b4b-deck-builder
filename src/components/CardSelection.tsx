import { useStore } from '~/store';
import Card from './Card';
import { Reorder } from 'framer-motion';

export default function CardSelection() {
	const cardSelection = useStore((state) => state.cardSelection);
	const reorderCards = useStore((state) => state.reorderCards);

	return (
		<div className='flex-1'>
			<Reorder.Group
				className='h-full flex flex-col gap-4 overflow-y-auto'
				axis='y'
				values={cardSelection}
				onReorder={reorderCards}
				layoutScroll
			>
				{cardSelection.map((card) => (
					<Reorder.Item key={card.name} value={card}>
						<Card card={card} />
					</Reorder.Item>
				))}
			</Reorder.Group>
		</div>
	);
}
