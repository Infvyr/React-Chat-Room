import { User } from "@/ts";

type Props = {
	users: User[] | undefined;
};

export const NotFoundUsers = ({ users }: Props): JSX.Element | null =>
	users?.length === 0 ? (
		<p className="text-red-500 indent-5">Oops! Try another user name...</p>
	) : null;
