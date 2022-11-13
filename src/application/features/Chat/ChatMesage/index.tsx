import { ChatMessageActions, ChatTextArea, SubmitMessage } from "@/application";
import styles from "./styles.module.css";

export const ChatMessage = (): JSX.Element => (
	<div className={styles["chat-wrapper"]}>
		<div className={styles["chat-inner-wrapper"]}>
			<div className={styles["chat-message"]}>
				<ChatTextArea />
				<ChatMessageActions />
			</div>
			<SubmitMessage />
		</div>
	</div>
);
