<script>
	import Router from 'svelte-spa-router'
	import Sidebar from "../components/Sidebar.svelte";
    import Header from "../components/Header.svelte";
	import HelloWorld from '../components/HelloWorld.svelte';

	import { viewportComponent } from '../lib/conponentswitcher'; 
    import { onMount } from 'svelte';

	const defaultView = HelloWorld
	viewportComponent.set(defaultView)

</script>

<Header />

<div class="flex gap-4">
	<Sidebar />
	<svelte:component this={$viewportComponent}></svelte:component>
</div>

<style>
</style>
