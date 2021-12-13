export default function Header() {
	return (
		<header className='bg-black/70 backdrop-blur backdrop-saturate-150 h-full flex items-center px-20'>
			<span className='text-3xl title'>
				<span className='text-brand'>B4B</span> Deck Builder
			</span>
			{/* <span className='flex gap-8 ml-auto'>
				<button className='title'>Browse</button>
				<button className='title'>Favorites</button>
				<button className='title'>Saved</button>
				<button className='title'>Create</button>
			</span> */}
		</header>
	);
}
