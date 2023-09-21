/**
 * @type {import('prettier').Config}
 */
module.exports = {
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: "none",
	printWidth: 120,
	plugins: [
		"prettier-plugin-svelte"
	],
	pluginSearchDirs: [
		"."
	],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte"
			}
		}
	]
}