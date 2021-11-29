import clsx from 'clsx';
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { cardAffinities, cardTypes, Card as CardInterface } from '~/data/types';
import cards from '~/data/card-data.json';
import Card from './Card';
import { motion } from 'framer-motion';

type CardBrowserProps = { className?: string };

export default function CardBrowser({ className }: CardBrowserProps) {
	const [filterText, setFilterText] = useState('');
	const [cardTypes, setCardTypes] = useState<string[]>([]);
	const [cardAffinities, setCardAffinities] = useState<string[]>([]);
	const [showTeamEffects, setShowTeamEffects] = useState(false);

	const filteredResults = matchSorter(
		(cards as CardInterface[])
			.filter((card) => !cardTypes.length || cardTypes.includes(card.type))
			.filter((card) => !cardAffinities.length || cardAffinities.includes(card.affinity))
			.filter(
				(card) => !showTeamEffects || card.effects.reduce<boolean>((acc, cur) => acc || cur.isTeamEffect, false)
			),
		filterText,
		{
			keys: ['name', 'type', 'affinity', 'effects.*.description'],
		}
	);

	return (
		<div className={clsx('flex justify-center items-start gap-4', className)}>
			<motion.div
				style={{ gridTemplateColumns: 'repeat(auto-fill, 16rem' }}
				className='grid w-full gap-4 justify-center'
			>
				{filteredResults.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</motion.div>
			<CardBrowserFilter
				setFilterText={setFilterText}
				setCardTypes={setCardTypes}
				setCardAffinities={setCardAffinities}
				setShowTeamEffects={setShowTeamEffects}
			/>
		</div>
	);
}

type CardBrowserFilterProps = {
	setFilterText: Dispatch<SetStateAction<string>>;
	setCardTypes: Dispatch<SetStateAction<string[]>>;
	setCardAffinities: Dispatch<SetStateAction<string[]>>;
	setShowTeamEffects: Dispatch<SetStateAction<boolean>>;
};

function CardBrowserFilter({
	setFilterText,
	setCardTypes,
	setCardAffinities,
	setShowTeamEffects,
}: CardBrowserFilterProps) {
	/**
	 * cards i've unlocked
	 * total cost to unlock
	 * cost
	 * favourites
	 * supply line
	 * show cards with team effects only
	 * filter by effect
	 */

	const toggleInArray = (e: ChangeEvent<HTMLInputElement>, array: string[], value: string) => {
		if (e.target.checked) {
			return array.includes(value) ? array : [...array, value];
		} else {
			return array.includes(value) ? array.filter((elem) => elem !== value) : array;
		}
	};

	return (
		<div className='flex flex-col gap-4 rounded-lg p-4 bg-[rgb(12,12,12)] w-64 border-2 border-white/5'>
			<span className='text-xl font-bold uppercase'>Filter</span>
			<input
				type='text'
				className='w-full rounded-lg bg-white/5 outline-none p-2 font-medium placeholder-white/50'
				placeholder='Search...'
				onChange={(e) => setFilterText(e.target.value)}
			/>
			<div>
				<span className='uppercase font-bold'>Type</span>
				<div className='flex flex-col p-2'>
					{(Object.keys(cardTypes) as Array<keyof typeof cardTypes>).map((cardType) => (
						<FilterCheckbox
							name={cardTypes[cardType].name}
							onChange={(e) => setCardTypes((prev) => toggleInArray(e, prev, cardType))}
						/>
					))}
				</div>
			</div>
			<div>
				<span className='uppercase font-bold'>Affinity</span>
				<div className='flex flex-col p-2'>
					{(Object.keys(cardAffinities) as Array<keyof typeof cardAffinities>).map((affinity) => (
						<FilterCheckbox
							name={cardAffinities[affinity].name}
							onChange={(e) => setCardAffinities((prev) => toggleInArray(e, prev, affinity))}
						/>
					))}
				</div>
			</div>
			<label className='flex gap-1'>
				<FilterCheckbox onChange={(e) => setShowTeamEffects(e.target.checked)} />
				<span className='uppercase font-bold'>Team Effects</span>
			</label>
			<span className='uppercase font-bold'>Supply Line</span>
			<span className='uppercase font-bold'>Card Cost</span>
			<input type='range' min='1' max='100' id='myRange' />
		</div>
	);
}

type FilterCheckboxProps = { name?: string; onChange: ChangeEventHandler<HTMLInputElement> };
function FilterCheckbox({ name, onChange }: FilterCheckboxProps) {
	return (
		<label>
			<input type='checkbox' className='mr-2' onChange={onChange} />
			{<span className='select-none'>{name}</span>}
		</label>
	);
}
