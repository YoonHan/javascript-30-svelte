<script lang="ts">
	import type { ALLOWED_KEYS } from '../constants'

	/**
	 * props
	 */
	export let keyName: (typeof ALLOWED_KEYS)[number]
	export let explanation: string
	export let soundSrc: string

	/**
	 * states
	 */
	let audioEl: HTMLAudioElement
	let buttonEl: HTMLButtonElement
	let isActive = false

	function handleKeydownWindow($event: KeyboardEvent) {
		const { key } = $event

		if (key.toUpperCase() === keyName) {
			playAudio()
			isActive = true
		} else {
			isActive = false
		}
	}

	function handleClickWindow($event: MouseEvent) {
		const { target } = $event

		if (buttonEl.contains(target as HTMLElement)) {
			playAudio()
			isActive = true
		} else {
			isActive = false
		}
	}

	function playAudio() {
		if (!audioEl) {
			return
		}

		/**
		 * if an audio has been playing
		 * reset its running time to 0 (initial state)
		 */
		if (audioEl.paused) {
			audioEl.play()
		} else {
			audioEl.currentTime = 0
		}
	}
</script>

<!-- This is more Svelte way to register window event -->
<svelte:window on:keydown={handleKeydownWindow} on:click={handleClickWindow} />

<button bind:this={buttonEl}>
	<kbd class="key" class:active={isActive}>
		<span class="keyName">{keyName}</span>
		<span class="explanation">{explanation}</span>
	</kbd>
</button>

<!-- hidden audio element -->
<audio bind:this={audioEl}>
	<source src={soundSrc} type="audio/wav" />
</audio>

<style>
	.key {
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		padding: 1rem 1.5rem;
		border: 3.5px solid black;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}

	.key:hover,
	.key.active {
		background-color: rgba(0, 0, 0, 0.8);
		border-color: gold;
	}

	.keyName {
		font-size: 28px;
		color: #feffff;
	}

	.explanation {
		margin-top: 0.5rem;
		font-size: 16px;
		color: gold;
		text-transform: uppercase;
	}
</style>
