import { userAtom } from "@/application/atoms/user";
import { useAtomValue } from "jotai";
import { RefObject } from "react";
import {
	AddToFavorites,
	Avatar,
	BlockContact,
	DeleteContact,
	IconsPanel,
	SharedFiles
} from "@/application";
import { X } from "react-feather";

type Props = {
	buttonRef: RefObject<HTMLButtonElement>;
};

export const UserInfo = ({ buttonRef }: Props): JSX.Element => {
	const currentUser = useAtomValue(userAtom);

	return (
		<div className="relative overflow-y-scroll no-scrollbar max-h-screen">
			<button
				onClick={() => buttonRef.current?.click()}
				title="Close"
				aria-label="Close"
				className="rounded-none absolute right-0 top-0 group hover:!bg-red-500 focus-visible:!bg-red-500"
			>
				<X className="group-hover:stroke-white" />
			</button>
			<header className="px-5 pt-10 pb-5 flex flex-col items-center">
				<Avatar name={currentUser?.name} photo={currentUser?.photo} />
				<h3 className="my-1">{currentUser?.name}</h3>
				<IconsPanel name={currentUser?.name} />
			</header>
			<div className="px-5 pt-5 flex flex-col divide-y divide-gray-300 dark:divide-slate-600">
				<SharedFiles />
				<AddToFavorites />
				<DeleteContact />
				<BlockContact />
			</div>
		</div>
	);
};
