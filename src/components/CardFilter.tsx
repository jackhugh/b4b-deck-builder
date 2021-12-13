import clsx from 'clsx';
import { cardAffinities, cardTypes } from '~/data/types';
import { useStore } from '~/store';
import { objectKeys, setInArray } from '~/util';
import Select from 'react-select';
import { playerModifiers } from '~/data/player-modifiers';
import { useEffect, useState } from 'react';
import EditSupplyLines from './EditSupplyLines';

// TODO - clean up and move elsewhere
const effectsDropdownOptions = [
	...new Set(
		objectKeys(playerModifiers)
			.map((modifier) => playerModifiers[modifier].group)
			.sort()
	),
].map((effect) => ({ label: effect.toUpperCase(), value: effect, options: [] }));

objectKeys(playerModifiers).forEach((modifier) =>
	effectsDropdownOptions
		.find((effect) => effect.value === playerModifiers[modifier].group)
		// @ts-ignore
		?.options.push({ label: playerModifiers[modifier].name, value: modifier })
);

export function CardFilter() {
	const filters = useStore((state) => state.filters);
	const unlockedSupplyLines = useStore((state) => state.unlockedSupplyLines);
	const setFilters = useStore((state) => state.setFilters);
	const resetFilters = useStore((state) => state.resetFilters);

	const [editSupplyLines, setEditSupplyLines] = useState(false);

	useEffect(() => {
		if (objectKeys(unlockedSupplyLines).length) {
			setFilters(() => ({ unlockedCards: true }));
		}
	}, [unlockedSupplyLines]);

	return (
		<div className='flex flex-col items-start gap-4 w-[20rem] sticky top-[5rem]'>
			<div className='flex w-full items-baseline'>
				<span className='text-xl title'>Filter</span>
				<button className='ml-auto text-sm' onClick={resetFilters}>
					Clear All
				</button>
			</div>

			<input
				type='text'
				className='rounded-lg bg-black-25 focus:outline-none py-2 px-3 w-full placeholder-white/30 text-lg'
				placeholder='Search cards...'
				value={filters.text}
				onChange={(e) => setFilters(() => ({ text: e.target.value }))}
			/>

			<FilterSection name='Type'>
				{objectKeys(cardTypes).map((type) => (
					<CheckboxLabel
						key={type}
						name={cardTypes[type].name}
						isChecked={filters.type.includes(type)}
						onChange={(isChecked) =>
							setFilters((filters) => ({ type: setInArray(filters.type, type, isChecked) }))
						}
					/>
				))}
			</FilterSection>

			<FilterSection name='Affinity'>
				{objectKeys(cardAffinities).map((type) => (
					<CheckboxLabel
						key={type}
						name={cardAffinities[type].name}
						isChecked={filters.affinity.includes(type)}
						onChange={(isChecked) =>
							setFilters((filters) => ({ affinity: setInArray(filters.affinity, type, isChecked) }))
						}
					/>
				))}
			</FilterSection>

			<CheckboxLabel
				name='Team Effect'
				className='title'
				isChecked={filters.teamEffects}
				onChange={(isChecked) => setFilters(() => ({ teamEffects: isChecked }))}
			/>

			<div className='flex w-full'>
				<CheckboxLabel
					name='Unlocked Only'
					className='title'
					isChecked={filters.unlockedCards}
					disabled={!Object.keys(unlockedSupplyLines).length}
					onChange={(isChecked) => setFilters(() => ({ unlockedCards: isChecked }))}
				/>
				<button className='ml-auto' onClick={() => setEditSupplyLines(true)}>
					Edit
				</button>
				{editSupplyLines && <EditSupplyLines closeModal={() => setEditSupplyLines(false)} />}
			</div>

			<FilterSection name='Effects'>
				<Select
					instanceId='effects'
					className='w-full text-black rounded-lg'
					isMulti
					options={effectsDropdownOptions}
					value={effectsDropdownOptions
						.flatMap((elem) => elem.options)
						// @ts-ignore
						.filter((elem) => filters.modifiers.includes(elem.value))}
					// @ts-ignore
					onChange={(e) => setFilters(() => ({ modifiers: e.map((elem) => elem.value) }))}
				/>
			</FilterSection>

			{/* <FilterSection name='Supply Line'>
				<Select
					instanceId='supply-line'
					className='w-full text-black rounded-lg'
					isClearable
					isSearchable={false}
					options={[
						{ label: 'The Strip', value: 0 },
						{ label: "Paul's Alley", value: 1 },
						{ label: 'The Clinic', value: 2 },
						{ label: "The Crow's Nest", value: 3 },
					]}
				/>
			</FilterSection> */}
		</div>
	);
}

type FilterSection = { children: React.ReactNode; name: string };

function FilterSection({ children, name }: FilterSection) {
	return (
		<div className='flex flex-col items-start gap-2 w-full'>
			<span className='title'>{name}</span>
			<div className='pl-2 w-full'>{children}</div>
		</div>
	);
}

type CheckboxLabelProps = {
	name: string;
	isChecked: boolean;
	onChange: (isChecked: boolean) => void;
	className?: string;
	disabled?: boolean;
};

function CheckboxLabel({ name, isChecked, onChange, className, disabled = false }: CheckboxLabelProps) {
	return (
		<label className='flex items-center gap-2'>
			<input
				className={clsx('w-4 h-4')}
				type='checkbox'
				checked={isChecked}
				onChange={(e) => onChange(e.target.checked)}
				disabled={disabled}
			/>
			<span className={clsx('select-none', disabled && 'opacity-50', className)}>{name}</span>
		</label>
	);
}
