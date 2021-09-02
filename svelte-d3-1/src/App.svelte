<script>
	import ChartContainer from './components/ChartContainer.svelte'
	import DataFetchButton from "./components/DataFetchButton.svelte";
	import {sharedData} from "./store";

	let chartData;

	sharedData.subscribe(value => {
		console.log(value);
		chartData = value;
	});
</script>

<main>
	{#key chartData}
		<ChartContainer />
	{/key}
	<DataFetchButton />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
