import clsx from 'clsx';
import { useState } from 'react';

interface SidebarTab {
	name: string;
	renderFn: () => React.ReactNode;
}

// TODO: see if we can do this with children instead using ts types
type SidebarProps = { tabs: SidebarTab[]; className?: string };
export default function Sidebar({ tabs, className }: SidebarProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={clsx('h-screen bg-white/5 rounded-l-lg shadow-xl', className)}>
			<div className='flex justify-evenly border-b-2 border-red-800'>
				{tabs.map((tab, i) => (
					<button
						className={clsx(
							'font-bold text-lg w-full p-2 uppercase',
							activeTab === i && 'bg-red-800 rounded-t-lg'
						)}
						onClick={() => setActiveTab(i)}
						key={i}
					>
						{tab.name}
					</button>
				))}
			</div>
			<div className='p-4'>{tabs.length > 0 && tabs[activeTab].renderFn()}</div>
		</div>
	);
}
