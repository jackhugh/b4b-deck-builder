import { playerModifiers } from '~/data/player-modifiers';

export type Modifiers = keyof typeof playerModifiers;

interface EffectBase {
	type: string;
	isTeamEffect: boolean;
}

export interface ValueEffect extends EffectBase {
	type: 'value';
	value: number;
	appliedTo: Modifiers;
}

export interface SpecialEffect extends EffectBase {
	type: 'special';
	description: string;
	isBuff: boolean;
	appliedTo: Modifiers[];
}

export type EffectInterface = ValueEffect | SpecialEffect;

export interface CardInterface {
	name: string;
	imageUrl: string;
	type: CardTypes;
	affinity: CardAffinities;
	effects: EffectInterface[];
}

export interface SupplyLine {
	name: SupplyTracks;
	cards: CardInterface[];
}

export const supplyTracks = {
	strip: {
		name: 'The Strip',
		isUnlockable: false,
	},
	alley: {
		name: "Paul's Alley",
		isUnlockable: true,
	},
	clinic: {
		name: 'The Clinic',
		isUnlockable: true,
	},
	nest: {
		name: "The Crow's Nest",
		isUnlockable: true,
	},
};

export const cardTypes = {
	offense: {
		name: 'Offense',
	},
	defense: {
		name: 'Defense',
	},
	utility: {
		name: 'Utility',
	},
	mobility: {
		name: 'Mobility',
	},
};

export const cardAffinities = {
	reflex: {
		name: 'Reflex',
	},
	discipline: {
		name: 'Discipline',
	},
	brawn: {
		name: 'Brawn',
	},
	fortune: {
		name: 'Fortune',
	},
};

export interface CleanerInterface {
	name: string;
	description: string;
	imageUrl: string;
	effects: EffectInterface[];
}

export type SupplyTracks = keyof typeof supplyTracks;
export type CardTypes = keyof typeof cardTypes;
export type CardAffinities = keyof typeof cardAffinities;
