<script lang="ts">
	import { onMount } from 'svelte'
	import KeyboardButton from './components/KeyboardButton.svelte'
	import clapSound from './assets/sounds/clap.wav'
	import hihatSound from './assets/sounds/hihat.wav'
	import kickSound from './assets/sounds/kick.wav'
	import openhatSound from './assets/sounds/openhat.wav'
	import boomSound from './assets/sounds/boom.wav'
	import rideSound from './assets/sounds/ride.wav'
	import snareSound from './assets/sounds/snare.wav'
	import tomSound from './assets/sounds/tom.wav'
	import tinkSound from './assets/sounds/tink.wav'
</script>

<main class="wrapper">
	<section class="keys-wrapper">
		<KeyboardButton keyName="A" explanation="clap" soundSrc={clapSound} />
		<KeyboardButton keyName="S" explanation="hihat" soundSrc={hihatSound} />
		<KeyboardButton keyName="D" explanation="kick" soundSrc={kickSound} />
		<KeyboardButton keyName="F" explanation="openhat" soundSrc={openhatSound} />
		<KeyboardButton keyName="G" explanation="boom" soundSrc={boomSound} />
		<KeyboardButton keyName="H" explanation="ride" soundSrc={rideSound} />
		<KeyboardButton keyName="J" explanation="snare" soundSrc={snareSound} />
		<KeyboardButton keyName="K" explanation="tom" soundSrc={tomSound} />
		<KeyboardButton keyName="L" explanation="tink" soundSrc={tinkSound} />
	</section>
</main>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: url('./assets/images/background.jpg');
	}

	.keys-wrapper {
		display: grid;
		grid-template-rows: 1;
		grid-auto-flow: column;
		grid-auto-columns: minmax(0, 1fr);
		gap: 1rem;
	}
</style>
