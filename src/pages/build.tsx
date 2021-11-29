import clsx from 'clsx';
import { useState } from 'react';
import create from 'zustand';
import cards from '~/data/card-data.json';
import { Card as CardInterface } from '~/data/types';

export default function Build() {
	const headerHeight = '4rem';
	const sidebarPad = '1rem';

	return (
		<div className='relative'>
			<div className='sticky top-0' style={{ height: headerHeight }}>
				<Header />
			</div>
			<div className='flex'>
				<div
					className='flex-1 flex justify-center items-start p-4'
					style={{ minHeight: `calc(100vh - ${headerHeight})` }}
				>
					<CardBrowser />
				</div>
				<div
					className='w-96 sticky overflow-y-auto'
					style={{
						height: `calc(100vh - ${headerHeight} - (${sidebarPad} * 2))`,
						top: `calc(${headerHeight} + ${sidebarPad})`,
					}}
				>
					<Sidebar
						tabs={[
							{
								name: 'Cards',
								renderFunction: () => 123,
							},
							{
								name: 'Stats',
								renderFunction: () => 456,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}

function CardBrowser() {
	return (
		<div className='w-[70rem] h-full flex'>
			<div>cards here</div>
		</div>
	);
}

type CardProps = { card: Card };

function Card() {}

function Header() {
	return (
		<header className='bg-black h-full flex items-center px-12'>
			<span className='text-3xl font-bold uppercase text-white'>
				<span className='text-brand'>B4B</span> Deck Builder
			</span>
		</header>
	);
}

type SidebarProps = { tabs: { name: string; renderFunction: () => React.ReactNode }[] };

function Sidebar({ tabs }: SidebarProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<aside className='bg-black-5 min-h-full rounded-l-xl'>
			<div className='flex justify-evenly border-b-2 border-brand'>
				{tabs.map((tab, i) => (
					<button
						key={i}
						onClick={() => setActiveTab(i)}
						className={clsx('uppercase font-bold rounded-t-xl w-full p-2', activeTab === i && 'bg-brand')}
					>
						{tab.name}
					</button>
				))}
			</div>
			<div className='p-4'>{tabs[activeTab].renderFunction()}</div>
		</aside>
	);
}
