const getDateVal = (string) => {
	const d = new Date(string);
	return +new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export const filterByDate = (arr, range) => {
	const filtered = arr.filter((item) => {
		if (!range || !range.from) return true;
		const artDate = getDateVal(item.date);
		return artDate >= getDateVal(range.from) && artDate <= getDateVal(range.to)
	})
	return filtered;
}
