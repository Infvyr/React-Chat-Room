import { Message } from "@/ts";
import { atom } from "jotai";

export const chatMessageAtom = atom<string>("");
export const messagesAtom = atom<Message[] | null>(null);
