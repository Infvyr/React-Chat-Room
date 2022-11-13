export interface Message {
	id: string;
	userId: string;
	createdAt: string;
	body: string;
	layout: string;
	from?: string;
}
