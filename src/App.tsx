import { AppLayout, AppSidebar } from "@/layout";

function App(): JSX.Element {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] max-w-7xl mx-auto min-h-screen">
			<AppSidebar />
			<AppLayout />
		</div>
	);
}

export default App;
