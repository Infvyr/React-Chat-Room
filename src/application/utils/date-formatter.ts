const dateOptions: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "short",
	day: "2-digit"
};

const timeOptions: Intl.DateTimeFormatOptions = {
	timeStyle: "short"
};

export const formatDate = (dateTime: Date) =>
	new Intl.DateTimeFormat("en-GB", dateOptions).format(dateTime);

export const formatTime = (time: Date) =>
	new Intl.DateTimeFormat("en-GB", timeOptions).format(time);
