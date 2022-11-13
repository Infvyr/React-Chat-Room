import { chatMessageAtom } from "@/application/atoms/message";
import { useCreateMessage } from "@/application/hooks";
import { useAtom } from "jotai";
import { Send } from "react-feather";
import styles from "./styles.module.css";

export const SubmitMessage = (): JSX.Element => {
	const [message, setMessage] = useAtom(chatMessageAtom);
	const { createMessage } = useCreateMessage(message);

	const isDisabled = !message.trim().length;

	const handleOnClick = async () => {
		await createMessage().then(() => setMessage(""));
	};

	return (
		<div className="submit mb-1.5">
			<button
				aria-label="Send message"
				className={`${isDisabled ? styles.btn : `btn-primary ${styles.btn}`}`}
				disabled={isDisabled}
				title="Send message"
				type="button"
				onClick={handleOnClick}
			>
				<Send size={18} />
				<span className={styles["send-text"]}>Send</span>
			</button>
		</div>
	);
};
