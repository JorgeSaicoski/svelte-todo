<script>

	import Form from "./components/Form.svelte";
	import Card from "./components/Card.svelte";

	export let todoList
	export let user

	function addTodo(e){
		todoList.push(e.detail)
		console.log(todoList)
	}


</script>

<main>
	<h1>Hello {user.name}! </h1>
	<Form on:new={addTodo}></Form>
	{#each todoList as todo, index}
		<Card {todo}></Card>
	{/each}
</main>

