import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type SidebarProps = { tabs: { name: string; renderFunction: () => React.ReactNode }[] };

export default function Sidebar({ tabs }: SidebarProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<aside className='rounded-l-xl h-full flex flex-col border-2 border-white/10 to-brand/5 from-black-5'>
			<div className='flex justify-evenly sticky top-0 z-10 bg-black-5 rounded-tl-xl'>
				{tabs.map((tab, i) => (
					<SidebarTab
						key={i}
						name={tab.name}
						setActiveTab={() => setActiveTab(i)}
						isActive={activeTab === i}
					/>
				))}
			</div>
			<motion.div key={activeTab} layoutScroll className='px-4 py-2 h-full overflow-y-auto'>
				{tabs[activeTab].renderFunction()}
			</motion.div>
		</aside>
	);
}

type SidebarTabProps = { setActiveTab: () => void; name: string; isActive: boolean };

function SidebarTab({ name, setActiveTab, isActive }: SidebarTabProps) {
	return (
		<div className='w-full'>
			<button onClick={setActiveTab} className={clsx('title text-lg w-full p-2 relative')}>
				{name}
			</button>
			{isActive && <motion.div layoutId='tab-underline' className='h-[2px] bg-brand/30' />}
		</div>
	);
}
