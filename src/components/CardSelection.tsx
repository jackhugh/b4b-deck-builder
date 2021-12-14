import { useStore } from '~/store';
import CardPreview from './CardPreview';
import { Reorder } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CardSelection() {
	const cardSelection = useStore((state) => state.cardSelection);
	const reorderCards = useStore((state) => state.reorderCards);
	const resetSelection = useStore((state) => state.resetSelection);

	const router = useRouter();

	return (
		<>
			<button className='w-full text-right pr-4 pb-2' onClick={resetSelection}>
				Reset
			</button>
			<Reorder.Group
				axis='y'
				values={cardSelection}
				onReorder={reorderCards}
				className='flex flex-col gap-2 items-center'
			>
				{cardSelection.map((card, i) => (
					<CardPreview key={card.imageUrl} card={card} number={i + 1} />
				))}
			</Reorder.Group>
		</>
	);
}
