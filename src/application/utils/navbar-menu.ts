import styles from "@/application/features/Users/UserItem/styles.module.css";

export const setActiveLink = (isActive: boolean) => {
	const defaultLinkClassName = styles.default;
	const activeLinkClassName = styles.active;

	return isActive ? `${defaultLinkClassName} ${activeLinkClassName}` : defaultLinkClassName;
};
