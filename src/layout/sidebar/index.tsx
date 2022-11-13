import { UsersList } from "@/application";
import { SidebarHeader } from "@/layout";

export function AppSidebar(): JSX.Element {
	return (
		<aside className="py-5 sm:py-10 border-[1px] border-colors">
			<SidebarHeader />
			<UsersList />
		</aside>
	);
}
