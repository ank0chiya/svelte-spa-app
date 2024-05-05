<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Header from "../components/Header.svelte";
    import { data } from "../lib/archivements";

    $: console.log(`in Archivemente svelte: ${JSON.stringify($data)}`);
</script>

<Header />

<div class="flex gap-4">
    <Sidebar />
    <div class="flex-col">
        {#each $data as d}
            {#if d instanceof Array}
                {#each d as _d}
                    <div>
                        {JSON.stringify(_d)}
                    </div>
                {/each}
            {:else}
                <div>
                    {JSON.stringify(d)}
                </div>
            {/if}
        {/each}
    </div>
</div>
