<script lang="ts">
	import { BoulevardsInParis, ReduceExercise8Data, inventors, people } from './data'
	import type { Inventor, PeopleName } from './types'

	// Get your shorts on - this is an array workout!
	// ## Array Cardio Day 1

	// Some data we can work with are in another file (data.ts)

	// Array.prototype.filter()
	// 1. Filter the list of inventors for those who were born in the 1500's
	const inventorsBornIn1500s = inventors.filter(({ year: birthYear }) => Math.floor(birthYear / 100) === 15)
	console.log({ inventorsBornIn1500s })

	// Array.prototype.map()
	// 2. Give us an array of the inventors first and last names
	const firstNames = inventors.map(({ first }) => first)
	const lastNames = inventors.map(({ last }) => last)
	console.log({ firstNames, lastNames })

	// Array.prototype.sort()
	// 3. Sort the inventors by birthdate, oldest to youngest
	const sortedInventorsFromOldestToYoungest = JSON.parse(JSON.stringify(inventors)) as Inventor[]
	sortedInventorsFromOldestToYoungest.sort((a, b) => a.year - b.year)
	console.log({ sortedInventorsFromOldestToYoungest })

	// Array.prototype.reduce()
	// 4. How many years did all the inventors live all together?
	const yearsLiveAllTogether = inventors.reduce((sum, { year, passed }) => sum + passed - year, 0)
	console.log({ yearsLiveAllTogether })

	// 5. Sort the inventors by years lived
	const sortedInventorsByYearsLived = JSON.parse(JSON.stringify(inventors)) as Inventor[]
	sortedInventorsByYearsLived.sort((a, b) => {
		const aYearsLived = a.passed - a.year
		const bYearsLived = b.passed - b.year

		return bYearsLived - aYearsLived
	})
	console.log({ sortedInventorsByYearsLived })

	// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
	// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
	const listOfBoulevardsInParisWithDe = BoulevardsInParis.filter((boulevardName) => boulevardName.includes('de'))
	console.log({ listOfBoulevardsInParisWithDe })

	// 7. sort Exercise
	// Sort the people alphabetically by last name
	const sortedPeopleNameByTheirLastName = JSON.parse(JSON.stringify(people)) as PeopleName[]
	sortedPeopleNameByTheirLastName.sort((a, b) => {
		const aLastName = a.split(', ')[1]
		const bLastName = b.split(', ')[1]
		return aLastName.charCodeAt(0) - bLastName.charCodeAt(0)
	})
	console.log({ sortedPeopleNameByTheirLastName })

	// 8. Reduce Exercise
	// Sum up the instances of each of these
	const numOfInstances = ReduceExercise8Data.reduce(
		(acc, data) => {
			if (data in acc) {
				acc[data] += 1
			} else {
				acc[data] = 1
			}

			return acc
		},
		{} as Record<string, number>
	)
	console.log({ numOfInstances })
</script>

<svelte:head>
	<title>Array Cardio 💪</title>
	<link rel="icon" href="https://fav.farm/💪" />
</svelte:head>

<section class="wrapper">
	<p class="intro-text">
		<em>Psst: have a look at the JavaScript Console</em> 💁
	</p>

	<div class="question-explanation">
		<h1 class="heading">Used Dataset</h1>
		<div class="data-wrapper">
			<strong>Inventors: </strong>
			<pre>{JSON.stringify(inventors, null, 2)}</pre>
		</div>
		<div class="data-wrapper">
			<strong>Boulevards in Paris: </strong>
			<pre>{JSON.stringify(BoulevardsInParis, null, 2)}</pre>
		</div>
		<div class="data-wrapper">
			<strong>People Names: </strong>
			<pre>{JSON.stringify(people, null, 2)}</pre>
		</div>
		<div class="data-wrapper">
			<strong>Question 8 Data: </strong>
			<pre>{JSON.stringify(ReduceExercise8Data, null, 2)}</pre>
		</div>
	</div>

	<div class="question-wrapper">
		<div class="question">
			<h1 class="heading">1. Filter the list of inventors for those who were born in the 1500's</h1>
			<div class="answer">
				<pre>{JSON.stringify(inventorsBornIn1500s, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">2. Give us an array of the inventors first and last names</h1>
			<div class="answer">
				<pre>{JSON.stringify(firstNames, null, 2)}</pre>
				<pre>{JSON.stringify(lastNames, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">3. Sort the inventors by birthdate, oldest to youngest</h1>
			<div class="answer">
				<pre>{JSON.stringify(sortedInventorsFromOldestToYoungest, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">4. How many years did all the inventors live all together?</h1>
			<div class="answer">
				{yearsLiveAllTogether}
			</div>
		</div>
		<div class="question">
			<h1 class="heading">5. Sort the inventors by years lived</h1>
			<div class="answer">
				<pre>{JSON.stringify(sortedInventorsByYearsLived, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">6. create a list of Boulevards in Paris that contain 'de' anywhere in the name</h1>
			<div class="answer">
				<pre>{JSON.stringify(listOfBoulevardsInParisWithDe, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">7. sort Exercise</h1>
			<div class="answer">
				<pre>{JSON.stringify(sortedPeopleNameByTheirLastName, null, 2)}</pre>
			</div>
		</div>
		<div class="question">
			<h1 class="heading">8. Reduce Exercise</h1>
			<div class="answer">
				<pre>{JSON.stringify(numOfInstances, null, 2)}</pre>
			</div>
		</div>
	</div>
</section>

<style>
	.wrapper {
		padding: 24px;
	}

	.intro-text {
		margin-bottom: 24px;
	}

	.heading {
		font-family: sans-serif;
		font-size: 24px;
		font-weight: 500;
		letter-spacing: -0.16px;
	}

	.question-explanation {
		background-color: rgba(0, 0, 0, 0.05);
		border: 1px solid gray;
		border-radius: 8px;
		padding: 16px;
		margin-bottom: 32px;
	}

	.data-wrapper {
		margin-top: 16px;
	}

	.question-wrapper {
		display: grid;
		gap: 24px;
	}

	.question {
		padding: 16px;
		border: 1px solid lightgray;
		border-radius: 8px;
	}

	.answer {
		position: relative;
		font-family: 'Courier New', Courier, monospace;
		font-size: 18px;
		font-weight: 500;
		margin-top: 16px;
		margin-left: 16px;
	}

	.answer::before {
		content: '>';
		position: absolute;
		top: 0;
		left: -16px;
	}
</style>
