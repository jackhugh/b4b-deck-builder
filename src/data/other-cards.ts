import { CardInterface } from './types';

export const otherCards: Readonly<CardInterface[]> = [
	{
		imageUrl: '/cards/card_004.png',
		effects: [{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'reloadSpeed' }],
		name: 'Reload Drills',
		type: 'offense',
		affinity: 'reflex',
	},
	{
		imageUrl: '/cards/card_042.png',
		effects: [
			{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'stamina' },
			{ isTeamEffect: false, type: 'value', value: -0.75, appliedTo: 'staminaRegeneration' },
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description:
					'When you kill an enemy, gain 10 Stamina instantly and an additional 10 Stamina over 5 seconds.',
				appliedTo: [],
			},
		],
		name: 'Adrenaline Fueled',
		type: 'offense',
		affinity: 'reflex',
	},
	{
		imageUrl: '/cards/card_052.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+30% Sniper Ammo Capacity',
				appliedTo: [],
			},
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+10% Damage with Sniper Rifles',
				appliedTo: [],
			},
		],
		name: 'Stock Pouch',
		type: 'offense',
		affinity: 'reflex',
	},
	{
		imageUrl: '/cards/card_053.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+30% Pistol/SMG Ammo Capacity',
				appliedTo: [],
			},
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+10% Damage with Pistols and SMGs',
				appliedTo: [],
			},
		],
		name: 'Mag Carrier',
		type: 'offense',
		affinity: 'reflex',
	},
	{
		imageUrl: '/cards/card_067.png',
		effects: [{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'healingEfficiency' }],
		name: 'Antibiotic Ointment',
		type: 'defense',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_069.png',
		effects: [
			{ isTeamEffect: false, type: 'value', value: 0.6, appliedTo: 'healingEfficiency' },
			{ isTeamEffect: false, type: 'value', value: -0.5, appliedTo: 'useSpeed' },
		],
		name: 'Field Surgeon',
		type: 'defense',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_081.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'Turns your Bash into a Knife that counts as a Melee weapon.',
				appliedTo: [],
			},
		],
		name: 'Combat Knife',
		type: 'offense',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_082.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'Gain 30% Move Speed and Accuracy while crouched and using an LMG.',
				appliedTo: [],
			},
		],
		name: 'Meatgrinder',
		type: 'offense',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_090.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'You can sense nearby Ammo.',
				appliedTo: [],
			},
			{ isTeamEffect: false, type: 'special', isBuff: true, description: 'More Ammo spawns.', appliedTo: [] },
		],
		name: 'Ammo Scavenger',
		type: 'utility',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_098.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+10% Rifle Ammo Capacity',
				appliedTo: [],
			},
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+10% Damage with Assult Rifles and LMGs',
				appliedTo: [],
			},
		],
		name: 'Tactical Vest',
		type: 'offense',
		affinity: 'discipline',
	},
	{
		imageUrl: '/cards/card_112.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description:
					'When you or your team kills a Mutation gain 1% damage (up to 15%) until the end of the level.',
				appliedTo: [],
			},
		],
		name: 'Confident Killer',
		type: 'offense',
		affinity: 'brawn',
	},
	{
		imageUrl: '/cards/card_115.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description:
					'Gain 10% Melee Damage, 10% Melee Speed, and 5% Move Speed for each Melee kill in the last 4 seconds.',
				appliedTo: [],
			},
		],
		name: 'Berserker',
		type: 'offense',
		affinity: 'brawn',
	},
	{
		imageUrl: '/cards/card_120.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'Melee kills heal 2 Health',
				appliedTo: [],
			},
		],
		name: 'Battle List',
		type: 'defense',
		affinity: 'brawn',
	},
	{
		imageUrl: '/cards/card_134.png',
		effects: [
			{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'extraLife' },
			{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
		],
		name: 'Second Chance',
		type: 'defense',
		affinity: 'brawn',
	},
	{
		imageUrl: '/cards/card_147.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'Kills while at Critical Health recover 1 Health.',
				appliedTo: [],
			},
		],
		name: 'Wounded Animal',
		type: 'defense',
		affinity: 'fortune',
	},
	{
		imageUrl: '/cards/card_149.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description:
					'Whenever you or your team loots Copper, you have a 35% chance to find 35% additional Copper.',
				appliedTo: [],
			},
		],
		name: 'Lucky Pennies',
		type: 'utility',
		affinity: 'fortune',
	},
	{
		imageUrl: '/cards/card_152.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'You can sense nearby Copper.',
				appliedTo: [],
			},
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: 'More Copper Piles spawn.',
				appliedTo: [],
			},
		],
		name: 'Copper Scavenger',
		type: 'utility',
		affinity: 'fortune',
	},
	{
		imageUrl: '/cards/card_154.png',
		effects: [
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+30% Shotgun Ammo Capacity',
				appliedTo: [],
			},
			{
				isTeamEffect: false,
				type: 'special',
				isBuff: true,
				description: '+10% Damage with Shotguns',
				appliedTo: [],
			},
		],
		name: 'Shell Carrier',
		type: 'offense',
		affinity: 'fortune',
	},
];
