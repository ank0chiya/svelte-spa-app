<script>
    import Card, { Content } from "@smui/card";
    import List, { Item, Text } from "@smui/list";

    import { data } from "../lib/archivements";

    import arch from "../data/archivement.json";

    let sortedAchievements = Object.entries(arch).sort(
        (a, b) => a[1].order - b[1].order,
    );

    $: console.log(`in Archivemente svelte: ${JSON.stringify($data)}`);
</script>


<div
    class="scrollbar scrollbar-corner-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-300 card-display overflow-y-auto h-screen"
>
    <div class="card-container">
        <Card>
            <Content component={List}>
                {#each sortedAchievements as archivements}
                    <Item>
                        {archivements[1].name}
                    </Item>
                {/each}
            </Content>
        </Card>
    </div>
</div>

