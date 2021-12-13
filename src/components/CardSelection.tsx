import { useStore } from '~/store';
import CardPreview from './CardPreview';
import { Reorder } from 'framer-motion';
import clsx from 'clsx';

export default function CardSelection() {
	const cardSelection = useStore((state) => state.cardSelection);
	const reorderCards = useStore((state) => state.reorderCards);
	const resetSelection = useStore((state) => state.resetSelection);

	return (
		<>
			<div className='flex w-full select-none'>
				<span>
					<span
						className={clsx(
							cardSelection.length > 15 && 'text-red-500',
							cardSelection.length === 15 && 'text-green-500',
							'w-6 inline-block text-right'
						)}
					>
						{cardSelection.length}
					</span>
					<span>/15</span>
				</span>
				<button className='ml-auto mr-4' onClick={resetSelection}>
					Reset
				</button>
			</div>
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
