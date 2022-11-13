import { Loader } from "react-feather";

type Props = {
	width?: string;
	height?: string;
};

export const Loading = ({ width = "w-full", height = "h-full" }: Props): JSX.Element => (
	<div
		className={`flex flex-col gap-3 justify-center items-center bg-gray-100 dark:bg-gray-800 z-50 ${width} ${height}`}
		role="status"
	>
		<Loader size={32} className="animate-spin" />
		<p className="indent-3.5">Loading...</p>
	</div>
);
