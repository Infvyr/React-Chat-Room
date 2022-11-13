import { userAtom } from "@/application/atoms/user";
import { useAtomValue } from "jotai";

export const UserBar = (): JSX.Element => {
	const currentUser = useAtomValue(userAtom);

	return (
		<div className="px-0 inline-flex items-center gap-x-3">
			<img src={currentUser?.photo} alt="avatar" width={40} height={40} className="avatar" />
			<h1 className="text-xl select-none">{currentUser?.name}</h1>
		</div>
	);
};
