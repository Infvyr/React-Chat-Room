import { fetcher } from "@/application/api";
import { Message, User } from "@/ts";
import { useParams } from "react-router-dom";
import { useSetAtom } from "jotai";
import useSWR from "swr";
import { ChatHeader, ChatWindow } from "@/application";
import { userAtom } from "@/application/atoms/user";
import { lazy, Suspense, useEffect } from "react";
import { messagesAtom } from "@/application/atoms/message";
import { API } from "@/application/env";

const LazyNotFoundPage = lazy(() => import("@/pages/NotFound"));
const LazyLoading = lazy(() =>
	import("@/components/Loading").then((module) => ({ default: module.Loading }))
);

function UserPage(): JSX.Element {
	const { userId } = useParams();
	const { data: user, error } = useSWR<User>(`${API.users}/${userId}`, fetcher);
	const { data: messages } = useSWR<Message[]>(`${API.messages}?userId=${userId}`, fetcher);

	const setUserAtom = useSetAtom(userAtom);
	const setMessages = useSetAtom(messagesAtom);

	useEffect(() => {
		if (user) {
			setUserAtom(user);
		}
	}, [setUserAtom, user]);

	useEffect(() => {
		if (messages) {
			setMessages(messages);
		}
	}, [messages, setMessages]);

	if (error) {
		return (
			<Suspense fallback={<LazyLoading />}>
				<div className="h-full border-[1px] border-l-0 border-colors">
					<LazyNotFoundPage />
				</div>
			</Suspense>
		);
	}

	return (
		<div className="user-chat h-full border-[1px] border-l-0 border-colors">
			<ChatHeader />
			<ChatWindow />
		</div>
	);
}

export default UserPage;
