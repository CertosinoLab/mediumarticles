<script>
    import {sharedData} from "../store";

    function generateRandomNumber() {
        return Math.floor(Math.random() * 600)
    }

    function setNewData() {
        let newData = [];
        for(let i = 0; i < 6; i++) {
            newData.push(generateRandomNumber());
        }
        return newData;
    }

    function fetchData() {
        sharedData.set(setNewData())
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
