<script>
	import {todoList} from "./store";
	import Form from "./components/Form.svelte";
	import Card from "./components/Card.svelte";

	export let initTodoList
	export let user

	todoList.subscribe(e=>{
		console.log(e)
	})
	function addTodo(e){
		initTodoList.push(e.detail)
		/*
		todoList.update(todo =>{
			todo.push(e.detail)
		})
		
		 */
		todoList.set(initTodoList)
	}


</script>

<main>
	<h1>Hello {user.name}! </h1>
	<Form on:new={addTodo}></Form>
	{#each $todoList as todo, index}
		<Card {todo}></Card>
	{/each}
</main>

