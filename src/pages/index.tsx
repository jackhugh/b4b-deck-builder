import CardBrowser from '~/components/CardBrowser';
import CardSelection from '~/components/CardSelection';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

export default function Build() {
	const headerHeight = '4rem';
	const sidebarPad = '1rem';

	return (
		<div className='relative'>
			<div className='sticky top-0 z-10' style={{ height: headerHeight }}>
				<Header />
			</div>
			<div className='flex'>
				<div
					className='flex-1 flex justify-center items-start p-4'
					style={{ minHeight: `calc(100vh - ${headerHeight})` }}
				>
					<div className='max-w-[100rem] w-full'>
						<CardBrowser />
					</div>
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
								renderFunction: () => <CardSelection />,
							},
							{
								name: 'Stats',
								renderFunction: () => '',
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
