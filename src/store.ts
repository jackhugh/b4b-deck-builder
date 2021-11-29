import create from 'zustand';
import { CardInterface } from './data/types';

interface StoreInterface {
	cardSelection: CardInterface[];
	toggleCard: (card: CardInterface) => void;
	reorderCards: (cards: CardInterface[]) => void;
}

export const useStore = create<StoreInterface>((set) => ({
	cardSelection: [],
	toggleCard: (card) =>
		set((state) => ({
			cardSelection: state.cardSelection.includes(card)
				? state.cardSelection.filter((elem) => elem !== card)
				: [...state.cardSelection, card],
		})),
	reorderCards: (cards) => set(() => ({ cardSelection: cards })),
}));
