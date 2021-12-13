export function objectKeys<T extends object>(object: T) {
	const arr = Object.keys(object) as (keyof T)[];
	return Object.keys(object) as (keyof T)[];
}

export function objectMap() {}

export function setInArray<T>(array: T[], value: T, show: boolean) {
	if (show) {
		if (array.includes(value)) {
			return array;
		} else {
			return [...array, value];
		}
	} else {
		if (array.includes(value)) {
			return array.filter((elem) => elem !== value);
		} else {
			return array;
		}
	}
}
