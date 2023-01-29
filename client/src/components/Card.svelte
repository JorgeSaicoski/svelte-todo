<script>
    export let todo
    export let index
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher()
    function remove(){
        dispatch("remove", index)
    }
</script>
<div>
    <p>{todo.title}</p>
    <p>{todo.description}</p>
    <button on:click={remove}>Remove</button>
</div>