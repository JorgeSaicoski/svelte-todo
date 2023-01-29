<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher()

    function submit(e){
        const todoForm = new FormData(e.target)
        const data = {};
        for (const field of todoForm) {
            const [key, value] = field;
            data[key] = value;

        }
        dispatch("new", data)
    }

</script>

<form on:submit|preventDefault={submit}>
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" />
    </div>
    <div>
        <label for="description">Description</label>
        <textarea name="description"></textarea>
    </div>
    <div>
        <button type="submit">Submit</button>

    </div>
</form>