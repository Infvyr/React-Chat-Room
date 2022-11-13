import { formatTime } from "@/application/utils/date-formatter";

type Props = { timestamp: string };

export const PublishTime = ({ timestamp }: Props): JSX.Element => {
	const date = new Date(timestamp);
	const dateTime = date.toLocaleDateString();

	return (
		<time dateTime={dateTime}>
			<small className="text-gray-800 dark:text-gray-300">{formatTime(date)}</small>
		</time>
	);
};
