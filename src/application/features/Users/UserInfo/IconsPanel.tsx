import { MessageCircle, Phone, Video } from "react-feather";

type Props = {
	name?: string;
};

export const IconsPanel = ({ name }: Props): JSX.Element => (
	<ul className="my-3 flex items-center justify-center gap-x-2">
		<li>
			<button
				title={`Call ${name}`}
				aria-label=""
				className="!px-0 w-10 h-10 rounded-full border border-gray-200 dark:border-gray-500 bg-transparent"
			>
				<Phone size={19} />
			</button>
		</li>
		<li>
			<button
				title={`Text ${name}`}
				aria-label=""
				className="!px-0 w-10 h-10 rounded-full border border-gray-200 dark:border-gray-500 bg-transparent"
			>
				<MessageCircle size={19} />
			</button>
		</li>
		<li>
			<button
				title={`Video call ${name}`}
				aria-label=""
				className="!px-0 w-10 h-10 rounded-full border border-gray-200 dark:border-gray-500 bg-transparent"
			>
				<Video size={19} />
			</button>
		</li>
	</ul>
);
