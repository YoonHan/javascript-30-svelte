<script lang="ts">
	let rootEl: HTMLDivElement | null = null
	let spacingValue = '10'
	let backgroundColorValue = '#ff6743'
	let blurValue = '0'

	const handleUpdate = ($event: Event) => {
		const inputEl = $event.target as HTMLInputElement
		if (!inputEl || !rootEl) {
			return
		}

		const cssVarName = inputEl.dataset['cssVar'] ?? ''
		const sizingUnit = inputEl.dataset['sizing'] ?? ''
		const value = inputEl.value
		rootEl.style.setProperty(cssVarName, `${value}${sizingUnit}`)
	}
</script>

<svelte:head>
	<title>Scoped CSS Variables and JS</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>

<div bind:this={rootEl}>
	<h2>Update CSS Variables with <span class="hl">JS</span></h2>

	<div class="controls">
		<label for="spacing">Spacing:</label>
		<input
			id="spacing"
			type="range"
			name="spacing"
			min="10"
			max="200"
			value={spacingValue}
			data-css-var="--spacing"
			data-sizing="px"
			on:input={handleUpdate}
		/>

		<label for="blur">Blur:</label>
		<input
			id="blur"
			type="range"
			name="blur"
			min="0"
			max="25"
			value={blurValue}
			data-css-var="--blur"
			data-sizing="px"
			on:input={handleUpdate}
		/>

		<label for="base">Base Color</label>
		<input
			id="base"
			type="color"
			name="base"
			value={backgroundColorValue}
			data-css-var="--backgroundColor"
			on:input={handleUpdate}
		/>
	</div>

	<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="background" class="image" />
</div>

<style>
	:global(body) {
		text-align: center;
		background: #193549;
		color: white;
		font-family: 'helvetica neue', sans-serif;
		font-weight: 100;
		font-size: 50px;
	}

	:root {
		--spacing: 10px;
		--backgroundColor: #ff6347;
		--blur: 0px;
	}

	input {
		width: 100px;
	}

	.controls {
		margin-bottom: 50px;
	}

	.image {
		padding: var(--spacing);
		background-color: var(--backgroundColor);
		filter: blur(var(--blur));
	}
</style>
