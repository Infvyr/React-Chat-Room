import { Menu, Popover, Transition } from "@headlessui/react";
import { MoreInfo, UserInfo } from "@/application";
import { Fragment, useRef } from "react";

export const UserOptions = (): JSX.Element => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<div className="features inline-flex items-center gap-x-3 z-10">
			<Popover className="">
				<Popover.Button
					title="Correspondent info"
					aria-label="Show more information about correspondent"
					ref={buttonRef}
					className="!px-0 w-9"
				>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="16" x2="12" y2="12" />
						<line x1="12" y1="8" x2="12.01" y2="8" />
					</svg>
				</Popover.Button>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-300"
					enterFrom="transform opacity-0 translate-x-full"
					enterTo="transform opacity-100 translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="transform opacity-100 translate-x-0"
					leaveTo="transform opacity-0 translate-x-full"
				>
					<Popover.Panel className="fixed top-0 right-0 bottom-0 w-full sm:w-2/4 xl:w-1/4 bg-gray-100 dark:bg-gray-800  drop-shadow-xl z-[1]">
						<UserInfo buttonRef={buttonRef} />
					</Popover.Panel>
				</Transition>
			</Popover>

			<Menu as="div" className="relative">
				<Menu.Button
					title="More options"
					aria-label="Show additional options"
					className="!px-0 w-9"
				>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="1" />
						<circle cx="12" cy="5" r="1" />
						<circle cx="12" cy="19" r="1" />
					</svg>
				</Menu.Button>

				<MoreInfo />
			</Menu>
		</div>
	);
};
