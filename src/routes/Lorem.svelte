<script lang="ts">
    export let params: {repeat?: string} = {};

    let repeat = 1;
    $: {
        repeat = 1
        if (params?.repeat) {
            repeat = parseInt(params.repeat, 10)
            if (repeat < 1) {
                repeat = 1
            }
        }
    }

    import Button, { Label } from '@smui/button';

    let clicked = 0;
</script>

<h1>Lorem ipsum</h1>
<p>Tip: try changing the number in the URL's fragment, e.g. <code>#/lorem/4</code></p>
{#each Array(repeat) as _}
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consequatur dicta, explicabo delectus, cupiditate, rem illo repellat aperiam saepe id minus ipsa. Illum libero consectetur fuga neque officia, adipisci commodi.Porro eius harum sed architecto maxime, molestiae cum ad dignissimos eum, nihil eligendi? Non quo, modi officia doloribus distinctio pariatur sed? Veniam facere beatae ipsam reprehenderit suscipit! Sequi, distinctio debitis.
    </p>
{/each}

<Button on:click={() => clicked++} variant="raised">
    <Label>Raised</Label>
</Button>

<style>
	h1 {
		color: #008cff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>

