import { formatDate } from "@/application/utils/date-formatter";
import { Download, Figma, FileText } from "react-feather";

const FILES = [
	{ id: 1, type: "pdf", name: "Workschedule.pdf", size: "243.3 KB", uploadedAt: new Date() },
	{
		id: 2,
		type: "figma",
		name: "Finall handoff.fig",
		size: "56.4 MB",
		uploadedAt: new Date("2022-11-12T19:53:56+0000")
	}
];

const fileTypeStyles = "flex-[1_0_50px] h-full p-2.5 border border-gray-600 rounded";

export const SharedFiles = (): JSX.Element => {
	const FileType = ({ fileType }: { fileType: string }) =>
		fileType === "pdf" ? (
			<FileText className={fileTypeStyles} />
		) : (
			<Figma className={fileTypeStyles} />
		);

	return (
		<div className="shared-files">
			<h4>Shared Files</h4>
			{!!FILES.length && (
				<ul className="my-5">
					{FILES.map((file) => (
						<li key={file.id} className="py-2 flex items-center gap-x-1">
							<div className="flex gap-x-2 basis-5/6">
								<FileType fileType={file.type} />
								<div className="flex-[1_0_calc(100%-50px)]">
									<h4>{file.name}</h4>
									<div className="flex lg:items-center flex-col lg:flex-row">
										<time dateTime={file.uploadedAt.toLocaleDateString()}>
											<small>{formatDate(file.uploadedAt)}</small>
										</time>
										<span className="mx-2 hidden lg:inline-block">&#x2022;</span>
										<small>{file.size}</small>
									</div>
								</div>
							</div>
							<button
								type="button"
								title="Download media"
								aria-label={`Download file ${file.name}`}
								className="!px-0 ml-auto basis-10 inline-flex justify-end w-5"
							>
								<Download />
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
