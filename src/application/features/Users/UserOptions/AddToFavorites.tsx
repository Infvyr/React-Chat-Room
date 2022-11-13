import { Switch } from "@headlessui/react";
import { useState } from "react";

export const AddToFavorites = (): JSX.Element => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="add-to-favorites">
			<div className="flex justify-between items-center py-2.5">
				<Switch.Group>
					<Switch.Label className="hover:text-gray-300 transition-colors">
						Add to favorites
					</Switch.Label>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${enabled ? "bg-gray-300 dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-600"}
          relative inline-flex h-5 w-9 !min-h-[1px] cursor-pointer !rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 !px-0 hover:!bg-gray-300 hover:dark:!bg-gray-600`}
					>
						<span className="sr-only">Add to favorites</span>
						<span
							aria-hidden="true"
							className={`${enabled ? "translate-x-2 bg-white" : "-translate-x-2 bg-white/50"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
						/>
					</Switch>
				</Switch.Group>
			</div>
		</div>
	);
};
