import { Author, PublishTime } from "@/application";
import { userAtom } from "@/application/atoms/user";
import { Message } from "@/ts";
import { useAtom } from "jotai";

type Props = {
	message: Message;
};

export const UserMessage = ({ message }: Props): JSX.Element => {
	const { body, createdAt, layout, from } = message;
	const [currentUser] = useAtom(userAtom);

	const name = from === "" ? (currentUser?.name as string) : "You";
	const isLeftAligned = layout === "left" ? "items-start" : "items-end";
	const isMessageLeftAligned = layout === "left" ? "ml-8" : "";
	const isAuthorRightAligned = layout === "left" ? "order-1" : "order-2";
	const isPublishTimeRightAligned = layout === "left" ? "order-2" : "order-1";
	const messageBg =
		from === "" ? "bg-stone-100 dark:bg-slate-700" : "bg-blue-100 dark:bg-slate-800";

	return (
		<li className={`flex flex-col gap-y-2 ${isLeftAligned}`}>
			<p
				className={`${isMessageLeftAligned} ${messageBg} p-3 rounded border border-gray-300 dark:border-gray-600`}
			>
				{body}
			</p>
			<footer className="flex items-center gap-x-2">
				<div className={isAuthorRightAligned}>
					<Author name={name} photo={currentUser?.photo as string} />
				</div>
				<div className={isPublishTimeRightAligned}>
					<PublishTime timestamp={createdAt} />
				</div>
			</footer>
		</li>
	);
};
