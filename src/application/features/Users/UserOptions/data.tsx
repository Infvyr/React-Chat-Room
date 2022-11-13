import { BellOff, Edit2, Trash2, Users, Video, XCircle } from "react-feather";

export const OPTIONS = [
	{
		name: "Edit",
		icon: <Edit2 />
	},
	{
		name: "Mute",
		icon: <BellOff />
	},
	{
		name: "Video",
		icon: <Video />
	},
	{
		name: "Create Group",
		icon: <Users />
	},
	{
		name: "Clear Chat History",
		icon: <XCircle />
	},
	{
		name: "Delete Chat",
		icon: <Trash2 className="stroke-red-500" />
	}
];
