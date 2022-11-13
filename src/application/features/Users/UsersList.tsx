import { fetcher } from "@/application/api";
import { User } from "@/ts";
import { NotFoundUsers, SearchUsers, UserItem } from "@/application";
import useSWR from "swr";
import { API } from "@/application/env";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { filteredUsersAtom, usersAtom } from "@/application/atoms/user";

export const UsersList = (): JSX.Element => {
	const { data, error } = useSWR<User[]>(API.users, fetcher);
	const setUsers = useSetAtom(usersAtom);
	const filteredUsers = useAtomValue(filteredUsersAtom);

	useEffect(() => {
		if (data) {
			setUsers(data);
		}
	}, [data, setUsers]);

	if (error) {
		return <p className="error-msg">Couldn't load users!</p>;
	}

	return (
		<div className="mt-5 sm:mt-10 h-96 sm:h-[calc(100vh-160px)] overflow-y-scroll no-scrollbar">
			<SearchUsers />
			<div className="my-5">
				<h3 className="mb-3 px-5 text-gray-400 text-sm font-medium tracking-wider uppercase">
					Direct messages
				</h3>

				<NotFoundUsers users={filteredUsers} />

				{filteredUsers?.length ? (
					<nav className="flex flex-col gap-y-2.5 px-5 overflow-y-scroll no-scrollbar max-h-[calc(100vh-200px)]">
						{filteredUsers?.map((user) => (
							<UserItem key={user.id} {...user} />
						))}
					</nav>
				) : null}
			</div>
		</div>
	);
};
