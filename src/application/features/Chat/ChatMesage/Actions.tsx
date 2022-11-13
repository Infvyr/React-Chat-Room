import { Paperclip } from "react-feather";

export const ChatMessageActions = (): JSX.Element => (
	<div className="absolute right-2 top-1">
		<label htmlFor="upload">
			<span
				title="Upload attachments"
				aria-label="Upload any attachments"
				className="w-9 h-9 inline-flex items-center justify-center"
			>
				<Paperclip size={18} />
			</span>

			<input type="file" name="upload" id="upload" className="hidden" />
		</label>
	</div>
);
