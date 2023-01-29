<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher()
    function login(e){
        const todoForm = new FormData(e.target)
        const data = {};
        for (const field of todoForm) {
            const [key, value] = field;
            data[key] = value;

        }
        dispatch("login", data)
    }
    let type = "password"
    function changeType(){
        if (type==="password"){
            type = "text"
        }else{
            type="password"
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" />
    </div>
    <div>
        <label for="password">Password</label>
        <input type={type} name="password" />
        <button on:click|preventDefault={changeType}>Eye</button>
    </div>
    <div>
        <button type="submit">Submit</button>

    </div>
</form>