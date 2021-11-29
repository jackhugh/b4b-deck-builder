import { useStore } from '~/store';
import CardPreview from './CardPreview';

export default function CardSelection() {
	const cardSelection = useStore((state) => state.cardSelection);
	const reorderCards = useStore((state) => state.reorderCards);

	return (
		<div className='flex flex-col gap-2'>
			{cardSelection.map((card) => (
				<CardPreview card={card} />
			))}
		</div>
	);
}
