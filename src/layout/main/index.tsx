import { Outlet } from "react-router-dom";

export function AppLayout(): JSX.Element {
	return (
		<main className="flex flex-col">
			<Outlet />
		</main>
	);
}
