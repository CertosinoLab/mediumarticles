<script>
	import Tesseract from 'tesseract.js';

	function logTesseract() {
		Tesseract.recognize(
				'https://tesseract.projectnaptha.com/img/eng_bw.png',
				'eng',
				{ logger: m => console.log(m) }
		).then(({ data: { text } }) => {
			console.log(text);
		})
	}

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={logTesseract}>Log Tesseract</button>
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
