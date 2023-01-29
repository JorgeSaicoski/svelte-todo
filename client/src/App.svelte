<script>
	import {todoList, user} from "./store";
	import Form from "./components/Form.svelte";
	import Card from "./components/Card.svelte";
	import Login from "./components/Login.svelte";

	export let initTodoList

	let is_logged = false

	todoList.set(initTodoList)
	function addTodo(e){
		initTodoList.push(e.detail)
		todoList.set(initTodoList)
	}
	function removeTodo(index){
		initTodoList.splice(index.detail,1)
		todoList.set(initTodoList)
	}
	function setLogin(e){
		user.set(e.detail.name)
		is_logged = true
	}



</script>

<main>
	{#if !is_logged}
		<Login on:login={setLogin} ></Login>
	{:else }
		<h1>Hello {$user}! </h1>
		<Form on:new={addTodo}></Form>
		{#each $todoList as todo, index}
			<Card {todo} {index} on:remove={removeTodo}></Card>
		{/each}
	{/if}
</main>


