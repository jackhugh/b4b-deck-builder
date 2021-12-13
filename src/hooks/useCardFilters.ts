import { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useStore } from '~/store';
import { playerModifiers } from '~/data/player-modifiers';
import { otherCards } from '~/data/other-cards';
import { supplyLines } from '~/data/supply-lines';

// TODO - debounce with cache?
// hyphen not working eg. Hyper-Focused
// create register filter function
// sort function. may best be implemented within match sorter as that seems to sort by default?
export function useCardFilters() {
	const filters = useStore((state) => state.filters);
	const cardSelection = useStore((state) => state.cardSelection);
	const unlockedSupplyLines = useStore((state) => state.unlockedSupplyLines);

	const cards = useMemo(
		() => [
			...otherCards,
			...supplyLines
				.map((supplyLine, i) => {
					if (!filters.unlockedCards) return supplyLine.cards;
					if (!unlockedSupplyLines[supplyLine.name]) return supplyLine.cards;

					const index = supplyLines[i].cards.findIndex(
						(card) => card.imageUrl === unlockedSupplyLines[supplyLine.name]?.imageUrl
					);
					return supplyLine.cards.filter((card, i) => i <= index - 1);
				})
				.flat(),
		],
		[unlockedSupplyLines, filters.unlockedCards]
	);

	return useMemo(
		() =>
			matchSorter(cards, filters.text, {
				keys: [
					'name',
					'type',
					'affinity',
					'effects.*.description',
					(item) =>
						item.effects.reduce((acc, cur) => {
							if (cur.type === 'value') {
								acc.push(playerModifiers[cur.appliedTo].name);
							}
							return acc;
						}, [] as string[]),
				],
				// threshold: matchSorter.rankings.CONTAINS,
			}).filter((card) => {
				if (filters.type.length) {
					if (!filters.type.includes(card.type)) return false;
				}
				if (filters.affinity.length) {
					if (!filters.affinity.includes(card.affinity)) return false;
				}

				if (filters.teamEffects) {
					if (card.effects.every((elem) => !elem.isTeamEffect)) return false;
				}

				if (cardSelection.includes(card)) return false;

				if (filters.modifiers.length) {
					let foundModifier = false;

					card.effects.forEach((effect) => {
						if (effect.type === 'value') {
							if (filters.modifiers.includes(effect.appliedTo)) {
								foundModifier = true;
								// REVIEW
								if (effect.value > 0) {
								}
							}
						}
					});

					if (!foundModifier) return false;
				}

				return true;
			}),

		[filters, cardSelection, unlockedSupplyLines]
	);
}
