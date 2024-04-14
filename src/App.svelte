<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Login from './Login.svelte';

	import  { isLogin } from "./lib/login";

</script>

<main>
	{#if $isLogin}
		<Router {routes} />
	{:else}
		<Login />
	{/if } 
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
