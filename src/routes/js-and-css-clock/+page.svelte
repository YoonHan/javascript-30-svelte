<script lang="ts">
	import { onMount } from 'svelte'
	import { SECOND } from './constants'

	const secondCssVar = '--second'
	const hourDegPerSecondCssVar = '--hourDegPerSecond'
	const minuteDegPerSecondCssVar = '--minuteDegPerSecond'
	const secondDegPerSecondCssVar = '--secondDegPerSecond'

	onMount(() => {
		const documentEl = document.documentElement
		documentEl.style.setProperty(secondCssVar, '0')
		documentEl.style.setProperty(hourDegPerSecondCssVar, 'calc(30deg / 3600)')
		documentEl.style.setProperty(minuteDegPerSecondCssVar, 'calc(6deg / 60)')
		documentEl.style.setProperty(secondDegPerSecondCssVar, 'calc(360deg / 60)')

		const updateSecondIntervalId = setInterval(() => {
			if (!documentEl) {
				return
			}

			const currentSecond = documentEl.style.getPropertyValue(secondCssVar)
			const nextSecond = `${Number(currentSecond) + 1}`
			documentEl.style.setProperty(secondCssVar, nextSecond)
		}, 1 * SECOND)

		return () => {
			clearInterval(updateSecondIntervalId)
		}
	})
</script>

<svelte:head>
	<title>JS + CSS Clock 🕗</title>
	<link rel="icon" href="https://fav.farm/🕗" />
</svelte:head>

<div class="clock">
	<div class="clock-face">
		<div class="hand hour-hand"></div>
		<div class="hand minute-hand"></div>
		<div class="hand second-hand"></div>
	</div>
</div>

<style>
	:global(html) {
		background: #018ded url(https://unsplash.it/1500/1000?image=881&blur=5);
		background-size: cover;
		font-family: 'helvetica neue';
		text-align: center;
		font-size: 10px;
	}

	:global(body) {
		margin: 0;
		font-size: 2rem;
		display: flex;
		flex: 1;
		min-height: 100vh;
		align-items: center;
	}

	.clock {
		width: 30rem;
		height: 30rem;
		border: 20px solid white;
		border-radius: 50%;
		margin: 50px auto;
		position: relative;
		padding: 2rem;
		box-shadow:
			0 0 0 4px rgba(0, 0, 0, 0.1),
			inset 0 0 0 3px #efefef,
			inset 0 0 10px black,
			0 0 10px rgba(0, 0, 0, 0.2);
	}

	.clock-face {
		position: relative;
		width: 100%;
		height: 100%;
		transform: translateY(-3px); /* account for the height of the clock hands */
	}

	.hand {
		width: 50%;
		position: absolute;
		top: 50%;
		transform-origin: 100%;
	}

	.hour-hand {
		background: rgba(0, 0, 0, 0.9);
		height: 6px;
		transform: rotate(calc(var(--second) * var(--hourDegPerSecond)));
	}

	.minute-hand {
		background: rgba(0, 0, 0, 0.8);
		height: 5px;
		transform: rotate(calc(var(--second) * var(--minuteDegPerSecond)));
	}

	.second-hand {
		background: rgba(0, 0, 0, 0.7);
		height: 4px;
		transform: rotate(calc(var(--second) * var(--secondDegPerSecond)));
	}
</style>
