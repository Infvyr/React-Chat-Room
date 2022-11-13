import { fetcher } from "@/application/api";
import { messagesAtom } from "@/application/atoms/message";
import { Message } from "@/ts";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const useCreateMessage = (message: string) => {
	const { userId } = useParams();
	const [messages, setMessages] = useAtom(messagesAtom);

	const createMessage = async () => {
		try {
			const newMessage: Message = {
				id: uuidv4(),
				userId: userId as string,
				createdAt: new Date().toISOString(),
				body: message,
				layout: "right",
				from: "You"
			};

			if (message.trim().length > 0) {
				await fetcher("http://localhost:3001/messages", {
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					},
					body: JSON.stringify(newMessage)
				}).then((res: Message) => {
					if (messages !== null) {
						setMessages(messages?.concat(res));
					}
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	return { createMessage };
};
