<script lang="ts">
	import Panel from './components/Panel.svelte'
	import { PanelInfo } from './constant'
</script>

<svelte:head>
	<title>Flex Panels 💪</title>
	<link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet" type="text/css" />
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>

<div class="panels">
	{#each PanelInfo as panelData, index}
		<Panel order={index + 1} {panelData} />
	{/each}
</div>

<style>
	:global(html) {
		box-sizing: border-box;
		background: #ffc600;
		font-family: 'helvetica neue';
		font-size: 20px;
		font-weight: 200;
	}

	:global(body) {
		margin: 0;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	.panels {
		display: flex;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
