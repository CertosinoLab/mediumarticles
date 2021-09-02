<script>
    import {sharedData} from "../store";

    function getRandomInt(max) {
        console.log(Math.floor(Math.random() * max))
    }

    function fetchData() {
        sharedData.set([Math.floor(Math.random() * 600),
            Math.floor(Math.random() * 600),
            Math.floor(Math.random() * 600),
            Math.floor(Math.random() * 600),
            Math.floor(Math.random() * 600),
            Math.floor(Math.random() * 600)
        ])
    }
</script>

<style>
    .fetch-button {
        float: left;
        cursor: pointer;
        margin-top: 10px;
    }
</style>

<button class="fetch-button" on:click={fetchData}>Fetch Data</button>
