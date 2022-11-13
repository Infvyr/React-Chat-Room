import { UserMessage } from "@/application";
import { messagesAtom } from "@/application/atoms/message";
import { useAtom } from "jotai";

export const ChatBody = (): JSX.Element => {
	const [messages] = useAtom(messagesAtom);

	return (
		<div className="chat-body p-5 overflow-y-scroll no-scrollbar min-h-[calc(100vh-150px)] max-h-[calc(100vh-150px)]">
			{!!messages?.length && (
				<ul className="flex flex-col gap-y-4">
					{messages.map((message) => (
						<UserMessage key={message.id} message={message} />
					))}
				</ul>
			)}
		</div>
	);
};
