// eslint-disable-next-line import/named
import { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div className="" role="alert">
			<h4 className="">
				⚠ Oops, something went wrong
				<button type="button" className="" aria-label="Close" onClick={resetErrorBoundary} />
			</h4>
			<hr />
			{error.message}
		</div>
	);
}
