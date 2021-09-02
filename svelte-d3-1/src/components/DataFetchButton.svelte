<script>
    import {sharedData} from "../store";

    function getRandomInt(max) {
        console.log(Math.floor(Math.random() * max))
    }

    function fetchData() {
        sharedData.set([10, 566, 468, 80, 103, 265])
    }
</script>

<button on:click={() => getRandomInt(10)}>Sono Data Fetch Button</button>
<button on:click={fetchData}>increment</button>
