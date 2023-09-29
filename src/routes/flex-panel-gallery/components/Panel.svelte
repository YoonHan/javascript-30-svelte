<script lang="ts">
	import type { PanelItem } from '../type'

	export let order: number = 0
	export let panelData: PanelItem = {} as PanelItem

	let open = false
	let openActive = false

	function handleClickPanel() {
		open = !open
	}

	function handleBlurPanel() {
		open = false
		openActive = false
	}

	function handleTransitionEnd() {
		if (open) {
			openActive = true
		} else {
			openActive = false
		}
	}
</script>

<button
	class="panel panel{order} {open ? 'open' : ''} {openActive ? 'open-active' : ''}"
	style="background-image: url({panelData.backgroundImageUrl});"
	on:click={handleClickPanel}
	on:blur={handleBlurPanel}
	on:transitionend={handleTransitionEnd}
>
	<p>{panelData.first}</p>
	<p>{panelData.second}</p>
	<p>{panelData.third}</p>
</button>

<style>
	.panel {
		display: flex;
		flex-direction: column;
		flex: 1;
		background: #6b0f9c;
		box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
		color: white;
		text-align: center;
		align-items: center;
		justify-content: center;
		/* Safari transitionend event.propertyName === flex */
		/* Chrome + FF transitionend event.propertyName === flex-grow */
		transition:
			font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
			flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
			background 0.2s;
		font-size: 20px;
		background-size: cover;
		background-position: center;
	}

	.panel > * {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 0 auto;
		margin: 0;
		width: 100%;
		transition: transform 0.5s;
	}

	.panel p {
		text-transform: uppercase;
		font-family: 'Amatic SC', cursive;
		text-shadow:
			0 0 4px rgba(0, 0, 0, 0.72),
			0 0 14px rgba(0, 0, 0, 0.45);
		font-size: 2em;
	}

	.panel p:nth-child(1) {
		transform: translateY(-100%);
	}

	.panel p:nth-child(2) {
		font-size: 4em;
	}

	.panel p:nth-child(3) {
		transform: translateY(100%);
	}

	.panel.open {
		flex: 5;
		font-size: 40px;
	}

	.panel.open-active p {
		transform: translateY(0);
	}
</style>
