<script>
    import Card, { Content } from "@smui/card";
    import List, { Item, Text } from "@smui/list";

    import { data } from "../lib/archivements";

    import arch from "../data/archivement.json";

    let sortedAchievements = Object.entries(arch).sort(
        (a, b) => a[1].order - b[1].order,
    );

    function clickHandler(d) {
        console.log(`in click handler: ${JSON.stringify(d)}`)
        $data = d
    } 
    $: console.log(`in Archivemente svelte: ${JSON.stringify($data)}`);
</script>


<div
    class="scrollbar scrollbar-corner-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-300 card-display overflow-y-auto h-screen"
>
    <div class="card-container">
        <Card>
            <Content component={List}>
                {#each sortedAchievements as archivements}
                    <Item on:click={() => clickHandler(archivements[1].achievements)}>
                        {archivements[1].name}
                    </Item>
                {/each}
            </Content>
        </Card>
    </div>
</div>


<div class="flex gap-4">
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
