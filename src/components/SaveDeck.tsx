import { useState } from 'react';
import Modal from './Modal';

export default function SaveDeck() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setModalOpen(true)}
				className='absolute bottom-0 left-0 py-4 px-4 m-4 bg-header-2/80 hover:bg-header-2 title rounded-lg shadow-blur shadow-black'
			>
				Save
			</button>
			<Modal title='Save Deck' isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
				This is a test
			</Modal>
		</>
	);
}
