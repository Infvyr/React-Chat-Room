import { UserBar, UserOptions } from "@/application";

export const ChatHeader = (): JSX.Element => (
	<header className="p-5 border-b-[1px] border-colors flex items-center gap-3 justify-between">
		<UserBar />
		<UserOptions />
	</header>
);
