import create from 'zustand';
import { Card } from './data/types';

interface StoreInterface {
	cardSelection: Card[];
	toggleCard: (card: Card) => void;
	reorderCards: (cards: Card[]) => void;
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
