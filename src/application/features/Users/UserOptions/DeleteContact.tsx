export const DeleteContact = (): JSX.Element => {
	const onClick = () => alert("Contact deleted");

	return (
		<div className="delete-contact">
			<div className="py-2 5">
				<button
					type="button"
					title="Delete contact"
					aria-label="Delete this contact"
					className="!px-0 !bg-transparent hover:text-gray-300 focus-visible:text-gray-300"
					onClick={onClick}
				>
					Delete this contact
				</button>
			</div>
		</div>
	);
};
