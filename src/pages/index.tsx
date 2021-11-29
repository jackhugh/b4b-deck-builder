import CardBrowser from '~/components/CardBrowser';
import CardSelection from '~/components/CardSelection';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import dynamic from 'next/dynamic';

export default function Index() {
	return (
		<>
			<Header />
			<div className='flex min-h-screen'>
				<CardBrowser className='flex-1 p-4' />
				<Sidebar
					className='ml-auto w-[30rem]'
					tabs={[
						{
							name: 'Cards',
							renderFn: () => <CardSelection />,
						},
						{
							name: 'Stats',
							// renderFn: () => <Stats />,
							renderFn: () => '',
						},
						{
							name: 'Supply Lines',
							renderFn: () => '',
						},
					]}
				/>
			</div>
		</>
	);
}
