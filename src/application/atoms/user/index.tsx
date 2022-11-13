import { User } from "@/ts";
import { atom } from "jotai";

export const userAtom = atom<User | undefined>(undefined);
export const usersAtom = atom<User[] | undefined>(undefined);
export const filterUserAtom = atom<string>("");
export const filteredUsersAtom = atom((get) =>
	get(usersAtom)?.filter((usr) => {
		if (get(filterUserAtom) === "") {
			return ["Nothing"];
		}
		if (usr.name.toLowerCase().includes(get(filterUserAtom).toLowerCase())) {
			return usr;
		}
	})
);
