import clsx from 'clsx';
import { useState } from 'react';

type SidebarProps = { tabs: { name: string; renderFunction: () => React.ReactNode }[] };

export default function Sidebar({ tabs }: SidebarProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<aside className='bg-black-5 min-h-full rounded-l-xl'>
			<div className='flex justify-evenly border-b-2 border-brand'>
				{tabs.map((tab, i) => (
					<button
						key={i}
						onClick={() => setActiveTab(i)}
						className={clsx(
							'uppercase text-lg font-bold rounded-t-xl w-full p-2',
							activeTab === i && 'bg-brand'
						)}
					>
						{tab.name}
					</button>
				))}
			</div>
			<div className='p-4'>{tabs[activeTab].renderFunction()}</div>
		</aside>
	);
}
