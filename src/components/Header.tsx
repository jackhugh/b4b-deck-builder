import Image from 'next/image';

export default function Header() {
	return (
		<header className='h-16 bg-white/5 border-b-2 border-white/5 px-16 py-2 flex items-center gap-2'>
			<span className='text-3xl font-bold uppercase'>
				<span className='text-red-800'>B4B</span> Deck Builder
			</span>
			{/* <div className='ml-auto uppercase  font-bold flex gap-2'>
				<span>Deck Builder</span>
				<span>Browse</span>
				<span>Saved Builds</span>
			</div> */}
		</header>
	);
}
