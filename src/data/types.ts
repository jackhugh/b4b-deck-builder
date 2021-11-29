interface EffectBase {
	type: string;
	isTeamEffect: boolean;
}

export interface ValueEffect extends EffectBase {
	type: 'value';
	value: number;
	appliedTo: string;
}

export interface SpecialEffect extends EffectBase {
	type: 'special';
	description: string;
	isBuff: boolean;
}

export type EffectInterface = ValueEffect | SpecialEffect;

export interface CardInterface {
	name: string;
	imageUrl: string;
	// cost: number;
	type: keyof typeof cardTypes;
	affinity: keyof typeof cardAffinities;
	effects: EffectInterface[];
}

export interface SupplyLine {
	name: string;
	cards: CardInterface[];
}

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
