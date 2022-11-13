export const BlockContact = (): JSX.Element => {
	const onClick = () => alert("Contact blocked");

	return (
		<div className="delete-contact">
			<div className="py-2 5">
				<button
					type="button"
					title="Delete contact"
					aria-label="Delete this contact"
					className="!px-0 !bg-transparent text-red-500 hover:text-red-600 focus-visible:text-red-700"
					onClick={onClick}
				>
					Block this contact
				</button>
			</div>
		</div>
	);
};
