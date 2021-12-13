import { SupplyLine } from './types';

export const supplyLines: Readonly<SupplyLine[]> = [
	{
		name: 'strip',
		cards: [
			{
				imageUrl: 'card_100.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'health' }],
				name: 'Vitamins',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_055.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'ammoCapacity' }],
				name: 'Ammo Pouch',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_124.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Charge: Hold [KEY] with Melee weapons to burst forward.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Charge attacks deal 100% increased damage.',
						appliedTo: ['damage'],
					},
				],
				name: 'Heavy Attack',
				type: 'offense',
				affinity: 'brawn',
			},
		],
	},
	{
		name: 'alley',
		cards: [
			{
				imageUrl: 'card_064.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'bulletDamage' },
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'bulletPenetration' },
				],
				name: 'Combat Training',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_056.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'ammoCapacity' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaEfficiency' },
				],
				name: 'Ammo Belt',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_013.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'aimDownSightsSpeed' }],
				name: 'Hi Vis Sights',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_058.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'accuracy' }],
				name: 'Front Sight Focus',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_135.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'offensiveInventory' }],
				name: 'Grenade Pouch',
				type: 'offense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_085.png',
				effects: [{ isTeamEffect: true, type: 'value', value: 0.1, appliedTo: 'ammoCapacity' }],
				name: 'Ammo For All',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_065.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.075, appliedTo: 'bulletDamage' },
					{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'bulletPenetration' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaEfficiency' },
				],
				name: 'Large Caliber Rounds',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_005.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'reloadSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Widemouth Magwell',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_129.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can sense nearby Offensive Accessories.',
						appliedTo: ['offensiveInventory'],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'More Offensive Accessories spawn.',
						appliedTo: ['offensiveInventory'],
					},
				],
				name: 'Offensive Scavenger',
				type: 'utility',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_057.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.75, appliedTo: 'ammoCapacity' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Support Accessories',
						appliedTo: ['supportInventory'],
					},
				],
				name: 'Ammo Mule',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_109.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'accessoryDamage' }],
				name: 'Grenade Training',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_059.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'accuracy' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaEfficiency' },
				],
				name: 'Optics Enthusiast',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_103.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'meleeDamage' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Batter Up',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_076.png',
				effects: [
					{
						isTeamEffect: true,
						type: 'special',
						isBuff: true,
						description:
							'When you or a teammates becomes incapacitated, all teammates gain 30% Damage, 20% Reload Speed, and Unlimited Ammo for 10 seconds.',
						appliedTo: ['damage', 'reloadSpeed'],
					},
				],
				name: 'Avenge The Fallen',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_094.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Each second you Aim Down Sights increases your Damage by 10% (up to 3 stacks).',
						appliedTo: ['damage'],
					},
				],
				name: 'Patient Hunter',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_136.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 2, appliedTo: 'offensiveInventory' },
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'damage' },
				],
				name: 'Double Grenade Pouch',
				type: 'offense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_086.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When crouching you neither take nor deal Friendly Fire damage.',
						appliedTo: ['damage'],
					},
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'health' },
				],
				name: 'Down In Front!',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_110.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'accessoryDamage' },
					{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'ammoCapacity' },
				],
				name: 'Demolitions Expert',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_006.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'reloadSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Aim Down Sights',
						appliedTo: [],
					},
				],
				name: 'Mag Coupler',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_128.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can equip a Primary weapon in your Secondary slot.',
						appliedTo: [],
					},
					{ isTeamEffect: false, type: 'value', value: -0.25, appliedTo: 'swapSpeed' },
				],
				name: 'Two Is One And One Is None',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_104.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'meleeDamage' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+10% Damage Resistance while using a Melee weapon',
						appliedTo: ['damageResistance'],
					},
					{ isTeamEffect: false, type: 'value', value: -0.15, appliedTo: 'ammoCapacity' },
				],
				name: 'Spiky Bits',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_066.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'bulletDamage' },
					{ isTeamEffect: false, type: 'value', value: 1.5, appliedTo: 'bulletPenetration' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'When you kill a Mutation, you lose 5 Copper.',
						appliedTo: [],
					},
				],
				name: 'Silver Bullets',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_015.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.8, appliedTo: 'aimDownSightsSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.5, appliedTo: 'aimDownSightsMoveSpeed' },
				],
				name: 'Steady Aim',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_143.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you stow your weapon, it reloads.',
						appliedTo: [],
					},
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'ammoCapacity' },
				],
				name: 'Admin Reload',
				type: 'offense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_150.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Each time your team loots Copper, you gain 3 additional Copper, stacking up to 75 additional Copper.',
						appliedTo: [],
					},
				],
				name: 'Money Grubbers',
				type: 'utility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_137.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'health' },
					{ isTeamEffect: true, type: 'value', value: 1, appliedTo: 'offensiveInventory' },
				],
				name: 'Surplus Pouches',
				type: 'offense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_092.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can sense nearby weapons.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'More weapons spawn.',
						appliedTo: [],
					},
				],
				name: 'Weapon Scavenger',
				type: 'utility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_077.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Melee kills grant 1 Temporary Health to you and nearby teammates.',
						appliedTo: ['health'],
					},
				],
				name: 'Vanguard',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_060.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'accuracy' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Aim Down Sights',
						appliedTo: [],
					},
				],
				name: 'Quick Kill',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_130.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Pain Meds you apply also grant +25 Damage for 60 seconds.',
						appliedTo: ['damage'],
					},
				],
				name: 'Chemical Courage',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_095.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Reloading a gun withing 0.75 seconds of reaching low ammo will increase its magazine size by 30% until the next reload.',
						appliedTo: [],
					},
				],
				name: 'Power Reload',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_075.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When crouching, gain 10% Damage Resistance and 40% Accuracy.',
						appliedTo: ['damageResistance', 'accuracy'],
					},
				],
				name: 'Hunker Down',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_039.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'damage' },
					{ isTeamEffect: false, type: 'value', value: -0.3, appliedTo: 'health' },
				],
				name: 'Glass Cannon',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_096.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies.',
						appliedTo: ['damage'],
					},
				],
				name: 'Marked For Death',
				type: 'utility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_142.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Pistol kills have a 2% chance to spawn ammo.',
						appliedTo: [],
					},
				],
				name: 'Highwayman',
				type: 'utility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_114.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+20% Melee Damage against Mutations',
						appliedTo: ['meleeDamage'],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you deal Melee damage to a Mutation heal 1 Health and recover 3 Stamina.',
						appliedTo: ['health', 'stamina'],
					},
				],
				name: 'Ignore The Pain',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_118.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+100% Explosive Damage',
						appliedTo: ['damage'],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+35% Explosive Resistance',
						appliedTo: [],
					},
				],
				name: 'Bomb Squad',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_122.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Gain 2 Temporary Health whenever you kill a Ridden within 2 meters.',
						appliedTo: [],
					},
				],
				name: 'Face Your Fears',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_080.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'health' },
					{ isTeamEffect: true, type: 'value', value: 1, appliedTo: 'extraLife' },
				],
				name: 'Needs Of The Many',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_079.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+25% Accuracy with Assult Rifles and Sniper Rifles.',
						appliedTo: [],
					},
				],
				name: 'Trigger Control',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_111.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'accessoryDamage' },
					{ isTeamEffect: false, type: 'value', value: -0.25, appliedTo: 'swapSpeed' },
				],
				name: 'Improvised Explosives',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_050.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'weakspotDamage' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Aim Down Sights',
						appliedTo: [],
					},
				],
				name: "Killer's Instinct",
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_078.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Precision Kills grant 5% Reload Speed for 5 seconds (stacking up to 10 times).',
						appliedTo: [],
					},
				],
				name: 'In The Zone',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_084.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+40% Move Speed while aiming down sights with Sniper Rifles.',
						appliedTo: [],
					},
				],
				name: 'Controlled Movement',
				type: 'mobility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_083.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+40% Reload Speed with Shotguns.',
						appliedTo: [],
					},
				],
				name: 'Scattergun Skills',
				type: 'offense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_153.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Each teammates gains 100 bonus Copper at the start of each level.',
						appliedTo: [],
					},
				],
				name: 'Share The Wealth',
				type: 'utility',
				affinity: 'fortune',
			},
		],
	},
	{
		name: 'clinic',
		cards: [
			{
				imageUrl: 'card_061.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'damageResistance' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Motorcycle Jacket',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_106.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'traumaResistance' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Durable',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_087.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'When you use a Medical Accessory, the target heals for an additional 20 Health over 30 seconds.',
						appliedTo: [],
					},
				],
				name: 'Poultice',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_068.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'healingEfficiency' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaEfficiency' },
				],
				name: 'EMT Bag',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_073.png',
				effects: [
					{
						isTeamEffect: true,
						type: 'special',
						isBuff: true,
						description:
							'When you or a teammate becomes incapacitated, all teammates heal for 20 health over 15 seconds.',
						appliedTo: [],
					},
				],
				name: 'Inspiring Sacrifice',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_062.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'damageResistance' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaEfficiency' },
				],
				name: 'Padded Suit',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_101.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'health' },
					{ isTeamEffect: false, type: 'value', value: -0.15, appliedTo: 'ammoCapacity' },
				],
				name: 'Hydration Pack',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_133.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When using Shotguns, gain 0.25 Temporary Health for each pellet that hits.',
						appliedTo: [],
					},
				],
				name: 'Buckshot Bruiser',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_091.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can sense nearby Support Accessories.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'More Support Accessories spawn.',
						appliedTo: [],
					},
				],
				name: 'Support Scavenger',
				type: 'utility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_138.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'supportInventory' }],
				name: 'Fanny Pack',
				type: 'defense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_007.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'meleeStaminaEfficiency' },
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'meleeAttackSpeed' },
				],
				name: 'Slugger',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_019.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'reviveSpeed' }],
				name: 'Smelling Salts',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_107.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'traumaResistance' },
					{ isTeamEffect: false, type: 'value', value: -0.15, appliedTo: 'ammoCapacity' },
				],
				name: 'Body Armor',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_119.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Take 1 less damage from all Ridden.',
						appliedTo: [],
					},
				],
				name: 'Scar Tissue',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_127.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Heal 10 Trauma Damage at the start of each level.',
						appliedTo: [],
					},
				],
				name: 'Fresh Bandage',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_139.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 2, appliedTo: 'supportInventory' },
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'damage' },
				],
				name: 'Shoulder Bag',
				type: 'defense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_020.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 1.5, appliedTo: 'reviveSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Pep Talk',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_123.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'staminaRegeneration' },
					{ isTeamEffect: true, type: 'value', value: 0.1, appliedTo: 'health' },
				],
				name: 'Well Fed',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_074.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Healing a teammates also applies 50% of the effect to you.',
						appliedTo: [],
					},
				],
				name: 'Charitable Soul',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_093.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you exit a starting saferoom, your team gains 50 Temporary Health.',
						appliedTo: [],
					},
				],
				name: 'Amped Up',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_063.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'damageResistance' },
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'health' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Aim Down Sights',
						appliedTo: [],
					},
				],
				name: 'Motorcycle Helmet',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_132.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Precision Kills have a 20% chance to cause Ridden to explode, dealing 15 damage to other Ridden within 4 meters.',
						appliedTo: [],
					},
				],
				name: 'Broadside',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_029.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'useSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Heals teammates for an additional 20 Health when you revive them.',
						appliedTo: [],
					},
				],
				name: 'Combat Medic',
				type: 'defense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_140.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'health' },
					{ isTeamEffect: true, type: 'value', value: 1, appliedTo: 'supportInventory' },
				],
				name: "Box O' Bags",
				type: 'defense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_102.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'health' },
					{ isTeamEffect: false, type: 'value', value: -0.3, appliedTo: 'stamina' },
				],
				name: 'Canned Goods',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_108.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'traumaResistance' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: '-100% Fire Resistance',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: '-100%  Acid Resistance',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: '-100% Explosion Resistance',
						appliedTo: [],
					},
				],
				name: 'Wooden Armor',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_088.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you use a Medical Accessory, all teammates heal for 5 Health.',
						appliedTo: [],
					},
				],
				name: 'Group Therapy',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_125.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Melee hits cause the target to take 20% increased damage for 5 seconds.',
						appliedTo: [],
					},
				],
				name: 'Sunder',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_131.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Gain +15% Damage Resistance while you have Temporary Health.',
						appliedTo: [],
					},
				],
				name: 'Numb',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_146.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 2, appliedTo: 'extraLife' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'Lose 50 Copper at the start of each level.',
						appliedTo: [],
					},
				],
				name: 'Life Insurance',
				type: 'defense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_126.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Kills from greated than 15 meters graint 5 Temporary Health  to teammates within 10 meters of the target.',
						appliedTo: [],
					},
				],
				name: 'Overwatch',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_116.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you take a single hit for 15 or more damage, heal 10 health over 5 seconds.',
						appliedTo: [],
					},
				],
				name: 'True Grit',
				type: 'defense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_117.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+100% Fire damage.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Kills with fire grant you 3 Temporary Health.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can sense flammable objects nearby.',
						appliedTo: [],
					},
				],
				name: 'Pyro',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_113.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Melee hits against Weakspots deal +20 additional Stumble Damage.',
						appliedTo: [],
					},
				],
				name: 'Heavy Hitter',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_121.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+100% Bullet Penetration with Assult Rifles.',
						appliedTo: [],
					},
				],
				name: "Line 'Em Up",
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_021.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 2.25, appliedTo: 'reviveSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Offensive Accessories',
						appliedTo: [],
					},
					{ isTeamEffect: true, type: 'value', value: 0.2, appliedTo: 'reducedIncapacitatedTrauma' },
				],
				name: 'Rousing Speech',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_031.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'healingEfficiency' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you use a Medical Accessory, you gain 15% Move Speed for 15 seconds.',
						appliedTo: [],
					},
				],
				name: 'Medical Expert',
				type: 'defense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_099.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'When you use a Medical Accessory, the target gains +20% Maximum Health until the end of the level.',
						appliedTo: [],
					},
				],
				name: 'Experienced EMT',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_156.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Your team heals 5 Trauma Damage and refills 10% Ammo at the start of each level.',
						appliedTo: [],
					},
				],
				name: 'Saferoom Recovery',
				type: 'defense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_089.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'First Aids and Defibrillators also recover 15 Trauma Damage and 1 Extra Life.',
						appliedTo: [],
					},
				],
				name: 'Medical Professional',
				type: 'defense',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_043.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'When you use a Medical Accessory, it has a 25% chance to have 100% increased effect.',
						appliedTo: [],
					},
				],
				name: 'Miraculous Recovery',
				type: 'defense',
				affinity: 'reflex',
			},
		],
	},
	{
		name: 'nest',
		cards: [
			{
				imageUrl: 'card_001.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'stamina' },
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'staminaRegeneration' },
					{ isTeamEffect: false, type: 'value', value: 0.03, appliedTo: 'moveSpeed' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Cross Trainers',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_010.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'weakspotDamage' }],
				name: 'Ridden Slayer',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_016.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.25, appliedTo: 'weaponSwapSpeed' }],
				name: 'Shooting Gloves',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_025.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'stamina' },
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'sprintEfficiency' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Superior Cardio',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_041.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you take a hit for 10 or more damage, gain 20% Move Speed for 3 seconds.',
						appliedTo: [],
					},
				],
				name: 'Evasive Action',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_151.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can shoot while sprinting.',
						appliedTo: [],
					},
				],
				name: 'Run And Gun',
				type: 'mobility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_044.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'useSpeed' },
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'stamina' },
				],
				name: 'Screwdriver',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_070.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'staminaRegeneration' },
					{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'health' },
				],
				name: 'Energy Bar',
				type: 'mobility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_047.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'You can sense nearby Quick Accessories.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'More Quick Accessories spawn.',
						appliedTo: [],
					},
				],
				name: 'Utility Scavenger',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_022.png',
				effects: [{ isTeamEffect: false, type: 'value', value: 0.05, appliedTo: 'moveSpeed' }],
				name: 'Dash',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_032.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+35% Move Speed while firing with Shotguns.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+10% Damage with Shotguns.',
						appliedTo: [],
					},
				],
				name: 'Rolling Thunder',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_011.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'weakspotDamage' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Reckless Strategy',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_028.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Breakout: Hold [KEY] to free yourself from Grabs.',
						appliedTo: [],
					},
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'breakoutCooldownReduction' },
				],
				name: 'Breakout',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_023.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'moveSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Fleet Of Foot',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_037.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Precision Kills grant you 10% Move Speed for 5 seconds.',
						appliedTo: [],
					},
				],
				name: 'Pep In Your Step',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_017.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'weaponSwapSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'health' },
				],
				name: 'Guns Out',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_014.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'aimDownSightsSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Tunnel Vision',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_002.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'stamina' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Energy Drink',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_035.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'No Movement Penalty for strafe and backpedal.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Sprint',
						appliedTo: [],
					},
				],
				name: 'Marathon Runner',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_008.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'meleeStaminaEfficiency' },
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'meleeAttackSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Brazen',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_040.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Gain 5% Weakspot Damage for each Precision Kill in the last 10 seconds.',
						appliedTo: [],
					},
				],
				name: 'Sadistic',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_026.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'sprintEfficiency' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Olympic Sprinter',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_145.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Your secondary weapons have unlimited ammo.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'Your secondary weapons reload 20% slower.',
						appliedTo: [],
					},
				],
				name: 'Ammo Stash',
				type: 'offense',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_148.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Gain 10% of your total Copper in each Saferoom.',
						appliedTo: [],
					},
				],
				name: 'Compound Interest',
				type: 'utility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_018.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.75, appliedTo: 'weaponSwapSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'When you take damage, your Accuracy is reduced by 20% for 3 seconds.',
						appliedTo: [],
					},
				],
				name: 'Cocky',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_036.png',
				effects: [{ isTeamEffect: true, type: 'value', value: 0.15, appliedTo: 'stamina' }],
				name: 'Mandatory PT',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_141.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Melee kills have a 2% chance to spawn ammo.',
						appliedTo: [],
					},
				],
				name: 'Mugger',
				type: 'utility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_105.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.6, appliedTo: 'meleeDamage' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Your Melee Attacks cause cleave through enemies dealing damage in a large area.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Sprint',
						appliedTo: [],
					},
				],
				name: 'Mean Drunk',
				type: 'offense',
				affinity: 'brawn',
			},
			{
				imageUrl: 'card_045.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.75, appliedTo: 'useSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.05, appliedTo: 'damageResistance' },
				],
				name: 'Multitool',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_048.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Pain Meds you apply also grant: +10% Move Speed, +10% Reload Speed and +10% Weapon Swap Speed for 30 seconds.',
						appliedTo: [],
					},
				],
				name: 'Stimulants',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_009.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'meleeAttackSpeed' },
					{ isTeamEffect: false, type: 'value', value: 0.3, appliedTo: 'meleeStaminaEfficiency' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Your Melee Attacks no longer stick in tough enemies.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'DISABLES: Aim Down Sights',
						appliedTo: [],
					},
				],
				name: 'Meth Head',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_038.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15%).',
						appliedTo: [],
					},
				],
				name: 'Shredder',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_027.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'sprintEfficiency' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'When you take damage while Sprinting, you lose all Stamina.',
						appliedTo: [],
					},
				],
				name: 'Reckless',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_024.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.15, appliedTo: 'moveSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'When you take damage, your Accuracy is reduced by 20% for 3 seconds.',
						appliedTo: [],
					},
				],
				name: 'Run Like Hell',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_051.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'Change weapons within 0.75 seconds of reaching low ammo grants + 20% Damage for 5 seconds.',
						appliedTo: [],
					},
				],
				name: 'Power Swap',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_003.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.6, appliedTo: 'stamina' },
					{ isTeamEffect: false, type: 'value', value: -0.2, appliedTo: 'slowResistance' },
				],
				name: 'Rhythmic Breathing',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_049.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'When you exit a starting saferoom your team gains + 15% Move Speed for 30 seconds.',
						appliedTo: [],
					},
				],
				name: 'On Your Mark',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_030.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description:
							'When you throw an Offensive Accessory, gain 20 Temporary Health and 20% Move Speed for 5 seconds.',
						appliedTo: [],
					},
				],
				name: 'Fire In The Hole!',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_046.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 1.25, appliedTo: 'useSpeed' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: false,
						description: 'When you take damage, you have a chance to be blinded for 1 second.',
						appliedTo: [],
					},
				],
				name: 'Headband Magnifier',
				type: 'utility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_071.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.4, appliedTo: 'staminaRegeneration' },
					{ isTeamEffect: false, type: 'value', value: -0.1, appliedTo: 'staminaEfficiency' },
				],
				name: 'Cold Brew Coffee',
				type: 'mobility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_012.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.5, appliedTo: 'weakspotDamage' },
					{ isTeamEffect: false, type: 'value', value: -0.75, appliedTo: 'aimDownSightsMoveSpeed' },
				],
				name: 'Hyper-Focused',
				type: 'offense',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_097.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.1, appliedTo: 'weakspotDamage' },
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Allows players to see values for damage they deal and enemy health bars.',
						appliedTo: [],
					},
				],
				name: 'Knowledge Is Power',
				type: 'utility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_144.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'When you kill a Mutatio, gain 10 Copper (up to 300 per level).',
						appliedTo: [],
					},
				],
				name: 'Bounty Hunter',
				type: 'utility',
				affinity: 'fortune',
			},
			{
				imageUrl: 'card_033.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+6% Move Speed while using an SMG.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+35% Reload Speed while using an SMG.',
						appliedTo: [],
					},
				],
				name: 'Speed Demon',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_072.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 1, appliedTo: 'staminaRegeneration' },
					{ isTeamEffect: false, type: 'value', value: -0.5, appliedTo: 'maxiumStamina' },
				],
				name: 'Natural Sprinter',
				type: 'mobility',
				affinity: 'discipline',
			},
			{
				imageUrl: 'card_034.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+45% Move Speed while firing.',
						appliedTo: [],
					},
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: '+5% Move Speed while not firing.',
						appliedTo: [],
					},
				],
				name: 'Hellfire',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_054.png',
				effects: [
					{ isTeamEffect: false, type: 'value', value: 0.2, appliedTo: 'sprintSpeed' },
					{ isTeamEffect: false, type: 'value', value: -0.3, appliedTo: 'sprintStaminaEfficiency' },
				],
				name: 'Mad Dash',
				type: 'mobility',
				affinity: 'reflex',
			},
			{
				imageUrl: 'card_155.png',
				effects: [
					{
						isTeamEffect: false,
						type: 'special',
						isBuff: true,
						description: 'Gain 250 bonus Copper at the start of each level.',
						appliedTo: [],
					},
				],
				name: 'Hazard Pay',
				type: 'utility',
				affinity: 'fortune',
			},
		],
	},
];
