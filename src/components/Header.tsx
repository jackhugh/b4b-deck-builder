export default function Header() {
	return (
		<header className='h-full flex items-center px-20 bg-gradient-to-r from-header-1 to-header-2/70 backdrop-blur backdrop-saturate-150 border-b-2 border-white/10'>
			<span className='text-3xl title select-none'>
				<span className='text-brand'>B4B</span> Deck Builder
			</span>
			{/* <span className='flex gap-8 ml-auto'>
				<button className='title'>Create</button>
				<button className='title'>Browse</button>
				<button className='title'>Builds</button>
			</span> */}
		</header>
	);
}
