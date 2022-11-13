import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

export const Toggler = (): JSX.Element => {
	const [enabled, setEnabled] = useState(false);
	const [theme, setTheme] = useState("dark");

	const onClick = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)")) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className="!px-0 hover:!bg-transparent focus:!bg-transparent relative inline-flex h-5 w-10 items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2"
			aria-label={`Switch theme color to ${enabled ? "dark" : "light"} `}
			onClick={onClick}
			title={`${enabled ? "Switch to dark mode" : "Switch to light mode"}`}
		>
			{theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
		</Switch>
	);
};
