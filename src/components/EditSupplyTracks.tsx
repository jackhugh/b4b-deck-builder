import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { SupplyTracks, supplyTracks } from '~/data/types';
import { objectKeys } from '~/util';
import Select from 'react-select';
import { supplyLines } from '~/data/supply-lines';
import { useStore } from '~/store';

type EditSupplyTracksProps = { closeModal: () => void };

export default function EditSupplyTracks({ closeModal }: EditSupplyTracksProps) {
	return (
		<Modal closeModal={closeModal}>
			<div className='title text-2xl'>Supply Track Unlocks</div>
			<p>
				Select the next card you will <span className='font-bold'>unlock</span> in each supply track.
			</p>
			{objectKeys(supplyTracks)
				.filter((key) => supplyTracks[key].isUnlockable)
				.map((key) => (
					<SelectableSupplyTrack key={key} id={key} />
				))}
		</Modal>
	);
}

type SelectableSupplyTrackProps = { id: SupplyTracks };

function SelectableSupplyTrack({ id }: SelectableSupplyTrackProps) {
	const selectedCard = useStore((state) => state.unlockedSupplyTracks[id]);
	const setUnlockedSupplyTracks = useStore((state) => state.setUnlockedSupplyTracks);

	const options = useMemo(
		() =>
			supplyLines
				.find((supplyLine) => supplyLine.name === id)
				?.cards.map((card) => ({
					label: card.name,
					value: card,
				})),
		[]
	);

	return (
		<>
			<span className='font-bold'>{supplyTracks[id].name}</span>
			<Select
				className='w-full text-black rounded-lg'
				value={selectedCard ? options?.filter((elem) => elem.value === selectedCard) : undefined}
				options={options}
				// mem leak here. no idea.
				onChange={(card) => card && setUnlockedSupplyTracks(id, card.value)}
			/>
		</>
	);
}

type ModalProps = { closeModal: () => void; children: React.ReactNode };

export function Modal({ closeModal, children }: ModalProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
			className='fixed inset-0 bg-black/50 backdrop-blur z-50 flex flex-col items-center justify-center'
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
				{children}
				<button className='self-end' onClick={closeModal}>
					close
				</button>
			</motion.div>
			<div className='flex-[2]' />
		</motion.div>
	);
}
