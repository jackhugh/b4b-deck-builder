import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ModalProps = { isOpen: boolean; closeModal: () => void; children: React.ReactNode; title: React.ReactNode };

export default function Modal({ closeModal, children, title, isOpen }: ModalProps) {
	useEffect(() => {
		const listener = (e: KeyboardEvent) => e.key === 'Escape' && closeModal();
		window.addEventListener('keydown', listener);
		return () => window.removeEventListener('keydown', listener);
	}, []);

	return isOpen ? (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
			className='fixed inset-0 bg-black/50 backdrop-blur z-10 flex flex-col items-center justify-center'
			onClick={closeModal}
		>
			<div className='flex-1' />
			<motion.div
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.2 }}
				className='flex flex-col items-start gap-4 p-6 bg-black-5 rounded-xl border-2 border-white/10'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='title text-2xl'>{title}</div>
				{children}
				<button className='self-end' onClick={closeModal}>
					close
				</button>
			</motion.div>
			<div className='flex-[2]' />
		</motion.div>
	) : null;
}
