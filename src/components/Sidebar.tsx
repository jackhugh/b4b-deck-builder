import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { variants } from './CleanerSelect';

type SidebarProps = { tabs: { name: string; component: () => React.ReactNode }[] };

export default function Sidebar({ tabs }: SidebarProps) {
	const [[activeTab, prevTab], setTabs] = useState([0, 0]);
	const direction = activeTab - prevTab;

	return (
		<aside className='rounded-l-xl h-full flex flex-col border-2 border-white/10'>
			<div className='flex justify-evenly sticky top-0 z-10 select-none'>
				{tabs.map((tab, i) => (
					<SidebarTab
						key={i}
						name={tab.name}
						setActiveTab={() => setTabs((prev) => [i, prev[0]])}
						isActive={activeTab === i}
					/>
				))}
			</div>
			<div className='relative flex-1 overflow-x-hidden'>
				<AnimatePresence custom={direction}>
					<motion.div
						key={activeTab}
						layoutScroll
						className='px-4 py-2 overflow-y-auto absolute inset-0 w-full h-full'
						variants={variants}
						custom={direction}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
					>
						{tabs[activeTab].component()}
					</motion.div>
				</AnimatePresence>
			</div>
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
