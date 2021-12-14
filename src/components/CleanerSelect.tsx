import { cleaners } from '~/data/cleaners';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '~/store';
import { useMemo, useState } from 'react';

const cleanersSorted = [...cleaners].sort();

export default function CleanerSelect() {
	const cleaner = useStore((state) => state.cleaner);
	const setCleaner = useStore((state) => state.setCleaner);

	const [direction, setDirection] = useState(0);

	const cleanerIndex = useMemo(
		() => cleanersSorted.findIndex((elem) => elem.imageUrl === cleaner?.imageUrl),
		[cleaner]
	);

	const changeCleaner = (direction: number) => {
		if (!cleanersSorted[cleanerIndex + direction]) return;
		setDirection(direction);
		setCleaner(cleanersSorted[cleanerIndex + direction]);
	};

	return (
		// REVIEW: inconsistent gap?
		<div className='flex flex-col gap-2'>
			<span className='title text-xl'>Cleaners</span>

			<div className='w-full relative overflow-hidden'>
				{/* dummy image for sizing */}
				<img src={cleaners[0].imageUrl} className='w-full block invisible' />

				<AnimatePresence custom={direction}>
					{cleaner && (
						<motion.div
							className='w-full absolute inset-0'
							key={cleaner.imageUrl}
							variants={variants}
							custom={direction}
							initial='enter'
							animate='center'
							exit='exit'
							transition={{
								x: { type: 'spring', stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 },
							}}
						>
							<img className='w-full block' src={cleaner.imageUrl} alt={cleaner.name} />
						</motion.div>
					)}
				</AnimatePresence>

				<div className='absolute inset-0 flex items-center z-20 select-none'>
					{cleanerIndex > 0 && (
						<button
							className='text-3xl font-bold absolute left-0 p-2 h-full'
							children='<'
							onClick={() => changeCleaner(-1)}
						/>
					)}
					{cleanerIndex < cleanersSorted.length - 1 && (
						<button
							className='text-3xl font-bold absolute right-0 p-2 h-full'
							children='>'
							onClick={() => changeCleaner(1)}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

const variants = {
	center: {
		x: 0,
		opacity: 1,
	},
	enter: (dir: number) => ({
		x: dir > 0 ? '100%' : '-100%',
		opacity: 0,
	}),
	exit: (dir: number) => ({
		x: dir < 0 ? '100%' : '-100%',
		opacity: 0,
	}),
};
