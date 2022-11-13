type Props = {
	photo?: string;
	name?: string;
	imgWidth?: number;
	imgHeight?: number;
	imgClass?: string;
};

export const Avatar = ({
	name,
	photo,
	imgWidth = 100,
	imgHeight = 100,
	imgClass = ""
}: Props): JSX.Element => (
	<figure>
		<img
			src={photo}
			alt={name}
			width={imgWidth}
			height={imgHeight}
			className={`avatar ${imgClass}`}
		/>
	</figure>
);
