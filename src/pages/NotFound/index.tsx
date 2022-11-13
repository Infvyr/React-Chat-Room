import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
	return (
		<div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-800">
			<h1 className="text-white">Oops! Something went wrong!</h1>
			<Link to="/" className="btn btn-primary">
				Go home
			</Link>
		</div>
	);
}

export default NotFoundPage;
