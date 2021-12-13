import { useStore } from '~/store';
import { playerModifiers } from '~/data/player-modifiers';
import { Modifiers } from '~/data/types';
import { objectKeys } from '~/util';
import { useMemo } from 'react';

export function useStats() {
	const cards = useStore((state) => state.cardSelection);

	return useMemo(() => {
		const effects: Record<string, number> = {};

		cards.forEach((card) => {
			card.effects.forEach((effect) => {
				if (effect.type === 'value') {
					effects[effect.appliedTo] = (effects[effect.appliedTo] ?? 0) + effect.value;
				}
			});
		});

		return objectKeys(effects)
			.map((effect) => {
				const effectName = effect as Modifiers;
				return {
					name: playerModifiers[effectName].name,
					value: Math.round(effects[effectName] * 100) / 100,
					displayValue: `${effects[effectName] > 0 ? '+' : ''}${
						playerModifiers[effectName].displayAs === 'percentage'
							? Math.round(effects[effectName] * 100)
							: Math.round(effects[effectName] * 100) / 100
					}${playerModifiers[effectName].displayAs === 'percentage' ? '%' : ''}`,
				};
			})
			.sort((a, b) => b.value - a.value);
	}, [cards]);
}
