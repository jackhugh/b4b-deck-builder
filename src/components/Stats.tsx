import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useStats } from '~/hooks/useStats';

export default function Stats() {
	const stats = useStats();

	return (
		<motion.div
			className='grid text-lg gap-2'
			style={{ gridTemplateColumns: 'fit-content(1px) 1fr' }}
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
		>
			{stats.map((stat) => (
				<>
					<span
						className={clsx(
							stat.value < 0 && 'text-red-500',
							stat.value > 0 && 'text-green-500',
							'font-bold text-right'
						)}
					>
						{stat.displayValue}
					</span>
					<span>{stat.name}</span>
				</>
			))}
		</motion.div>
	);
}
