<script>
	let isButtonOneClicked = false;
	let isButtonTwoClicked = false;
	let isButtonThreeClicked = false;
	let isButtonFourClicked = false;
	let isButtonFiveClicked = false;
	function Button1() {
		isButtonOneClicked = true;
	}
	function Button2() {
		isButtonTwoClicked = true;
	}
	function Button3() {
		isButtonThreeClicked = true;
	}
	function Button4() {
		isButtonFourClicked = true;
	}
	function Button5() {
		isButtonFiveClicked = true;
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		
	}
</script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
<main>
	<img src="https://media.discordapp.net/attachments/820235631049441291/821542212256923688/image0.png" alt="idk" width="80" height="">
	<h1>Made By Marcus.</h1>
	{#if !isButtonOneClicked}
	<button on:click={Button1}>Click Me</button>
	{:else if !isButtonTwoClicked}
	<button on:click={Button2}>Click Me Lol</button>
	{:else if !isButtonThreeClicked}
	<button on:click={Button3}>Not a troll lol click me</button>
	{:else if !isButtonFourClicked}
	<button on:click={Button4}>Click meeee</button>
	{:else if !isButtonFiveClicked}
	<button on:click={Button5}>Ok last one...</button>
	
	
	{/if}
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	button {
		color: #7289da;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		border-radius:12px;
	}
	button:hover {
		filter: brightness(1.30);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	h1{
		font-family: 'Train One', cursive;
	}
</style>