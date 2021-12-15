import CardBrowser from '~/components/CardBrowser';
import CardSelection from '~/components/CardSelection';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import Stats from '~/components/Stats';

export default function Index() {
	const headerHeight = '4rem';
	const sidebarPad = '2rem';

	return (
		<div className='relative'>
			<div className='sticky top-0 z-10' style={{ height: headerHeight }}>
				<Header />
			</div>

			<div className='flex'>
				<div
					className='flex-1 flex justify-center items-start py-4 px-10'
					style={{ minHeight: `calc(100vh - ${headerHeight})` }}
				>
					<div className='max-w-[100rem] w-full'>
						<CardBrowser />
					</div>
				</div>

				<div
					className='w-[22rem] sticky'
					style={{
						height: `calc(100vh - ${headerHeight} - (${sidebarPad} * 2))`,
						top: `calc(${headerHeight} + ${sidebarPad})`,
					}}
				>
					<Sidebar
						tabs={[
							{
								name: 'Cards',
								component: () => <CardSelection />,
							},
							{
								name: 'Stats',
								component: () => <Stats />,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
