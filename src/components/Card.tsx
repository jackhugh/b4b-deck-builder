import { Card as CardInterface } from '~/data/types';
import { useStore } from '~/store';
import clsx from 'clsx';
import Image from 'next/image';
import * as cardImages from '~/data/card-imports';
import { motion } from 'framer-motion';

type Props = { card: CardInterface };

export default function Card({ card }: Props) {
	// TODO: fix this
	const isSelected = useStore((state) => state.cardSelection.includes(card));
	const toggleCard = useStore((state) => state.toggleCard);

	return (
		<motion.button
			className={clsx(
				'flex flex-col border-2 bg-clip-content overflow-hidden rounded-lg bg-[rgb(12,12,12)]',
				isSelected ? 'border-white' : 'border-transparent'
			)}
			onClick={() => toggleCard(card)}
			onMouseMove={(e) => console.log(e)}
		>
			<Image
				src={cardImages[`${card.imageUrl.replace('.png', '')}` as keyof typeof cardImages]}
				placeholder='blur'
			/>
		</motion.button>
	);
}
