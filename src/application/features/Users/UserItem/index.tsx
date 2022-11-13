import { setActiveLink } from "@/application/utils/navbar-menu";
import { User } from "@/ts";
import { NavLink } from "react-router-dom";

import styles from "@/application/features/Users/UserItem/styles.module.css";

type Props = User;

export const UserItem = (props: Props): JSX.Element => {
	const { id, name, photo } = props;

	return (
		<NavLink
			to={`users/${id}`}
			className={({ isActive }) => setActiveLink(isActive)}
			end={`users/${id}` === "/"}
			aria-label={`Text ${name}`}
		>
			<img src={photo} alt={name} className="avatar" width={36} height={36} />
			<span className={styles.name}>{name}</span>
		</NavLink>
	);
};
