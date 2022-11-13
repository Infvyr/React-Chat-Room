import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";
import App from "@/App";
import { fetcher } from "./application/api";

import "@/styles/index.css";

const LazyNotFoundPage = lazy(() => import("@/pages/NotFound"));
const LazyErrorFallback = lazy(() =>
	import("@/components/ErrorFallback").then((module) => ({ default: module.ErrorFallback }))
);
const LazyLoading = lazy(() =>
	import("@/components/Loading").then((module) => ({ default: module.Loading }))
);
const LazyChatIntro = lazy(() =>
	import("@/application/features/Chat/ChatIntro").then((module) => ({ default: module.ChatIntro }))
);
const LazyUserPage = lazy(() => import("@/pages/User"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <LazyNotFoundPage />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<LazyLoading />}>
						<LazyChatIntro />
					</Suspense>
				)
			},
			{
				path: "users/:userId",
				element: (
					<Suspense fallback={<LazyLoading />}>
						<LazyUserPage />
					</Suspense>
				)
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ErrorBoundary FallbackComponent={LazyErrorFallback}>
		<Suspense>
			<React.StrictMode>
				<SWRConfig value={{ fetcher, suspense: true }}>
					<RouterProvider router={router} />
				</SWRConfig>
			</React.StrictMode>
		</Suspense>
	</ErrorBoundary>
);
