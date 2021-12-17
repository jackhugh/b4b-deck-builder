import React, { useMemo } from 'react';
import { SupplyTracks, supplyTracks } from '~/data/types';
import { objectKeys } from '~/util';
import Select from 'react-select';
import { supplyLines } from '~/data/supply-lines';
import { useStore } from '~/store';
import Modal from './Modal';

type EditSupplyTracksModalProps = { closeModal: () => void; isOpen: boolean };

export default function EditSupplyTracksModal({ closeModal, isOpen }: EditSupplyTracksModalProps) {
	return (
		<Modal title='Supply Track Unlocks' isOpen={isOpen} closeModal={closeModal}>
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
