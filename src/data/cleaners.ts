import { CleanerInterface } from './types';

export const cleaners: Readonly<CleanerInterface[]> = [
	{
		description:
			'Doc can heal each teammate for 25 Health once per level. +20% Healing Efficiency, +25% Team Trauma Resistance. Starts with a Bandage.',
		effects: [
			{
				appliedTo: ['health'],
				description: 'Doc can heal each teammate for 25 Health once per level.',
				isBuff: true,
				isTeamEffect: false,
				type: 'special',
			},
			{
				appliedTo: 'healingEfficiency',
				isTeamEffect: false,
				type: 'value',
				value: 0.2,
			},
			{
				appliedTo: 'traumaResistance',
				isTeamEffect: true,
				type: 'value',
				value: 0.25,
			},
			{
				appliedTo: [],
				description: 'Starts with a Bandage.',
				isBuff: true,
				isTeamEffect: false,
				type: 'special',
			},
		],
		imageUrl: '/cleaners/doc.png',
		name: 'Doc',
	},
	{
		description:
			'Evangelo can quickly break out of grabs once every 60 Seconds. +75% Breakout Speed, +25% Stamina Regen, +5% Team Movement Speed. Starts with a Molotov.',
		effects: [
			{
				appliedTo: [],
				description: 'Evangelo can quickly break out of grabs once every 60 Seconds.',
				isBuff: true,
				isTeamEffect: true,
				type: 'special',
			},
			{
				appliedTo: 'breakoutSpeed',
				isTeamEffect: false,
				type: 'value',
				value: 0.75,
			},
			{
				appliedTo: 'staminaRegeneration',
				isTeamEffect: false,
				type: 'value',
				value: 0.25,
			},
			{
				appliedTo: 'moveSpeed',
				isTeamEffect: true,
				type: 'value',
				value: 0.05,
			},
			{
				appliedTo: [],
				description: 'Starts with a Molotov.',
				isBuff: true,
				isTeamEffect: false,
				type: 'special',
			},
		],
		imageUrl: '/cleaners/evangelo.png',
		name: 'Evangelo',
	},
	{
		description:
			'Hoffman has a chance to find Ammo whenever he kills a Ridden, +1 Offensive Inventory, +10% Max Team Ammo Capacity, Starts with an Ammo Pouch.',
		effects: [
			{
				appliedTo: [],
				description: 'Hoffman has a chance to find Ammo whenever he kills a Ridden.',
				isBuff: true,
				isTeamEffect: false,
				type: 'special',
			},
			{
				appliedTo: 'offensiveInventory',
				isTeamEffect: false,
				type: 'value',
				value: 1,
			},
			{
				appliedTo: 'ammoCapacity',
				isTeamEffect: true,
				type: 'value',
				value: 0.1,
			},
			{
				appliedTo: [],
				description: 'Starts with an Ammo Pouch.',
				isBuff: true,
				isTeamEffect: false,
				type: 'special',
			},
		],
		imageUrl: '/cleaners/hoffman.png',
		name: 'Hoffman',
	},
	{
		description:
			'Holly recovers 10 Stamina when she kills a Ridden. +10% Damage Resistance, +25 Team Stamina. Starts with a Stun gun.',
		imageUrl: '/cleaners/holly.png',
		name: 'Holly',
		effects: [
			{
				type: 'special',
				appliedTo: ['stamina'],
				description: 'Holly recovers 10 Stamina when she kills a Ridden.',
				isBuff: true,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'damageResistance',
				value: 0.1,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'stamina',
				value: 0.25,
				isTeamEffect: true,
			},
			{
				type: 'special',
				appliedTo: [],
				description: 'Starts with a Stun gun.',
				isBuff: true,
				isTeamEffect: false,
			},
		],
	},
	{
		description:
			'Precision kills grant Jim 2.5% stacking damage until he takes damage. +25% Aim Down Sights speed, +10% Team weakspot damage. Starts with Barbed wire.',
		imageUrl: '/cleaners/jim.png',
		name: 'Jim',
		effects: [
			{
				type: 'special',
				appliedTo: ['damage'],
				description: 'Precision kills grant Jim 2.5% stacking damage until he takes damage.',
				isBuff: true,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'aimDownSightsSpeed',
				value: 0.25,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'weakspotDamage',
				value: 0.1,
				isTeamEffect: true,
			},
			{
				type: 'special',
				appliedTo: [],
				description: 'Starts with Barbed wire.',
				isBuff: true,
				isTeamEffect: false,
			},
		],
	},
	{
		description:
			'Karlee can sense nearby hazards and Mutations. +1 Quick Inventory, +50% Team Use Speed. Starts with a Toolkit.',
		imageUrl: '/cleaners/karlee.png',
		name: 'Karlee',
		effects: [
			{
				type: 'special',
				appliedTo: [],
				description: 'Karlee can sense nearby hazards and Mutations.',
				isBuff: true,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'quickInventory',
				value: 1,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'useSpeed',
				value: 0.5,
				isTeamEffect: true,
			},
			{
				type: 'special',
				appliedTo: [],
				description: 'Starts with a Toolkit.',
				isBuff: true,
				isTeamEffect: false,
			},
		],
	},
	{
		description:
			'Mom can instantly Revive a teammate once per level. +1 Support Inventory, +1 Team Extra Life. Starts with Pain Meds.',
		imageUrl: '/cleaners/mom.png',
		name: 'Mom',
		effects: [
			{
				type: 'special',
				appliedTo: ['reviveSpeed'],
				description: 'Mom can instantly Revive a teammate once per level.',
				isBuff: true,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'supportInventory',
				value: 1,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'extraLife',
				value: 1,
				isTeamEffect: true,
			},
			{
				type: 'special',
				appliedTo: [],
				description: 'Starts with Pain Meds.',
				isBuff: true,
				isTeamEffect: false,
			},
		],
	},
	{
		description:
			'Precision Kills grant Walker +20% Accuracy for 5 Seconds. +10% Damage, +10 Team Health. Starts with a Frag Grenade.',
		imageUrl: '/cleaners/walker.png',
		name: 'Walker',
		effects: [
			{
				type: 'special',
				appliedTo: ['accuracy'],
				description: 'Precision Kills grant Walker +20% Accuracy for 5 Seconds.',
				isBuff: true,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'damage',
				value: 0.1,
				isTeamEffect: false,
			},
			{
				type: 'value',
				appliedTo: 'health',
				value: 0.1,
				isTeamEffect: true,
			},
			{
				type: 'special',
				appliedTo: [],
				description: 'Starts with a Frag Grenade.',
				isBuff: true,
				isTeamEffect: false,
			},
		],
	},
];
