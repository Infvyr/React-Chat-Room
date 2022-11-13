import { Toggler } from "@/application";
import { Logo } from "@/components";
import { Link } from "react-router-dom";

export const SidebarHeader = (): JSX.Element => (
	<div className="px-5 flex items-center gap-5">
		<Logo />
		<h2>
			<Link to="/" className="focus:outline-none focus:ring-1 focus:ring-offset-2">
				Chat Room
			</Link>
		</h2>
		<div className="ml-auto">
			<Toggler />
		</div>
	</div>
);
