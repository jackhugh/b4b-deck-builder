export default function Header() {
	return (
		<header className='h-full flex items-center px-20 bg-gradient-to-l from-brand/10 to-black backdrop-blur backdrop-saturate-150 border-b-2 border-white/10'>
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
