import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { OPTIONS } from "./data";

export const MoreInfo = (): JSX.Element => (
	<Transition
		as={Fragment}
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<Menu.Items className="absolute right-0 mt-2 w-max origin-top-right rounded bg-white dark:bg-gray-600 shadow  focus:outline-none">
			{OPTIONS.map((item) => (
				<Menu.Item key={item.name}>
					{({ active }) => (
						<button
							className={`${
								active ? "bg-gray-300 dark:bg-gray-700" : undefined
							} group !rounded-none w-full flex justify-start items-center gap-x-4 hover:bg-gray-300 hover:dark:bg-gray-700 transition-colors`}
						>
							<span className="flex h-4 w-4 shrink-0 items-center justify-center">{item.icon}</span>
							<span
								className={`text-sm ${item.name === "Delete Chat" ? "text-red-500" : undefined}`}
							>
								{item.name}
							</span>
						</button>
					)}
				</Menu.Item>
			))}
		</Menu.Items>
	</Transition>
);
