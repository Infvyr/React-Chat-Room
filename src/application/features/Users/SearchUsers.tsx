import { filterUserAtom } from "@/application/atoms/user";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

export const SearchUsers = (): JSX.Element => {
	const [filter, setFilter] = useAtom(filterUserAtom);

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFilter(value);
	};

	return (
		<input
			value={filter}
			onChange={onSearch}
			type="text"
			name="search"
			placeholder="Find a user"
			className="search px-5 bg-transparent outline-none focus:border-b-gray-400 focus:dark:border-b-white w-full border-b-[1px] border-gray-300 dark:border-slate-600 transition-colors text-gray-400"
		/>
	);
};
