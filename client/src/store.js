import{ writable } from "svelte/store";

export const todoList = new writable([])
export const user = new writable("")