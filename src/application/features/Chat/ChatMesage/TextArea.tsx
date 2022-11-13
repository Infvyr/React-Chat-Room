import { chatMessageAtom } from "@/application/atoms/message";
import { useAtom } from "jotai";
import { ChangeEvent, KeyboardEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useCreateMessage } from "@/application/hooks";
import styles from "./styles.module.css";

export const ChatTextArea = (): JSX.Element => {
	const [message, setMessage] = useAtom(chatMessageAtom);

	const { createMessage } = useCreateMessage(message);

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		if (value.trim().length >= 0) {
			setMessage(value);
		}
	};

	const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.code === "Enter" && !event.shiftKey) {
			event.preventDefault();

			if (message.trim().length > 0) {
				await createMessage().then(() => setMessage(""));
			}
		}
	};

	return (
		<TextareaAutosize
			autoFocus
			className={styles.textarea}
			name="message"
			rows={5}
			placeholder="Write a message..."
			onChange={handleOnChange}
			onKeyDown={handleKeyDown}
			value={message}
		/>
	);
};
