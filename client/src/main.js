import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		initTodoList:[],
		user: {
			name:"Jorge"
		},
	}
});

export default app;