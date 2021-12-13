import create from 'zustand';
import { CardAffinities, CardInterface, CardTypes, Modifiers, SupplyLine, SupplyTracks } from './data/types';

interface StoreInterface {
	cardSelection: CardInterface[];
	filters: {
		text: string;
		type: CardTypes[];
		affinity: CardAffinities[];
		teamEffects: boolean;
		modifiers: Modifiers[];
		unlockedCards: boolean;
	};
	// TODO - maybe just use the supply-lines file to store supply track info
	unlockedSupplyLines: Partial<Record<SupplyTracks, CardInterface>>;
	setUnlockedSupplyLine: (supplyLine: SupplyTracks, card: CardInterface) => void;
	resetFilters: () => void;
	setFilters: (setFilters: (filters: StoreInterface['filters']) => Partial<StoreInterface['filters']>) => void;
	resetSelection: () => void;
	toggleCard: (card: CardInterface) => void;
	reorderCards: (cards: CardInterface[]) => void;
}

export const useStore = create<StoreInterface>((set) => ({
	cardSelection: [],
	filters: {
		text: '',
		type: [],
		affinity: [],
		teamEffects: false,
		modifiers: [],
		unlockedCards: false,
	},
	unlockedSupplyLines: {},
	setUnlockedSupplyLine: (supplyLine, card) =>
		set((state) => ({ unlockedSupplyLines: { ...state.unlockedSupplyLines, [supplyLine]: card } })),
	resetSelection: () => set(() => ({ cardSelection: [] })),
	resetFilters: () =>
		set(() => ({
			filters: { text: '', type: [], affinity: [], teamEffects: false, modifiers: [], unlockedCards: false },
		})),
	setFilters: (fn) => set((state) => ({ filters: { ...state.filters, ...fn(state.filters) } })),
	toggleCard: (card) =>
		set((state) => ({
			// TODO - this probably won't work with persist as card will be a different instance - need to find all strict equality comparison examples and replace with .find() solution.
			cardSelection: state.cardSelection.includes(card)
				? state.cardSelection.filter((elem) => elem !== card)
				: [...state.cardSelection, card],
		})),
	reorderCards: (cards) => set(() => ({ cardSelection: cards })),
}));
