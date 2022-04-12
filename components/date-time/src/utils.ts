export const formatDateTimeFromISOString = (
	ISOString: string,
	displayDate: boolean,
	displayTime: boolean,
	clockType?: 12 | 24
) => {
	const date = new Date(ISOString);

	let dateOptions = { year: "numeric", month: "long", day: "numeric" };
	let formattedDate = displayDate
		? date.toLocaleString("en-GB", dateOptions)
		: null;

	let formattedTime = null;
	if (displayTime) {
		const hours = date.getHours();
		const minutes = date.getMinutes();

		formattedTime =
			clockType === 24
				? hours < 10
					? `0${hours}:${minutes}`
					: `${hours}:${minutes}`
				: `${hours > 12 ? hours - 12 : hours}:${minutes}${
						hours > 11 ? "pm" : "am"
				  }`;
	}

	return {
		formattedDate,
		formattedTime,
	};
};
