import { Avatar } from "@/application";

type Props = {
	name: string;
	photo: string;
};

export const Author = ({ name, photo }: Props): JSX.Element => (
	<div className="flex items-center gap-x-2">
		<Avatar name={name} photo={photo} imgWidth={24} imgHeight={24} />
		<h6 className="font-medium">{name}</h6>
	</div>
);
