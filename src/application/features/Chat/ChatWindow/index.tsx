import { ChatBody, ChatMessage } from "@/application";

export const ChatWindow = (): JSX.Element => (
	<div className="grid grid-rows-[1fr_auto] gap-y-5">
		<ChatBody />
		<ChatMessage />
	</div>
);
