<script lang="ts">
    import Card, { Content } from "@smui/card";
    import List, { Item, Text } from "@smui/list";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";

    import { data } from "../lib/archivements";
    import { writable, get } from "svelte/store";
    import { onDestroy } from 'svelte';

    import arch from "../data/archivement.json";

    let sortedAchievements = Object.entries(arch).sort(
        (a, b) => a[1].order - b[1].order,
    );

    function load() {
        console.log(`data: ${data}`)
        sortedAchievements.map((d) => {

            let archivements = d[1].achievements.map((a) => {
                if (Array.isArray(a)) {
                    a.forEach((ad) => {
                        ad.checked = writable(false);
                    });
                }   
                a.checked = writable(false);
                return a
            })
            return d
        })

        $data = sortedAchievements
    }

    load()

    const list = writable([])

    function clickHandler(d) {
        $list = d[1].achievements
    }
    function handleCheck(d) {
        let checked = d.checked;
        if (get(checked) == true) {
            checked.set(false);
        } else {
            checked.set(true);
        }
    }
</script>

<div
    class="scrollbar scrollbar-corner-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-300 card-display overflow-y-auto h-screen"
>
    <div class="card-container">
        <Card>
            <Content component={List}>
                {#each $data as archivements}
                    <Item
                        on:click={() =>
                            clickHandler(archivements)}
                    >
                        {archivements[1].name}
                    </Item>
                {/each}
            </Content>
        </Card>
    </div>
</div>
<div class="flex gap-4">
    <div class="flex-col scrollbar scrollbar-corner-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-300 card-display overflow-y-auto h-screen">
        {#each $list as d}
            {#if d instanceof Array}
                <Card>
                    {#each d as _d}
                        <Content class="divide-y">
                            <div class="flex">
                                <div class="flex-initial w-64 text-left">
                                    <div>
                                        {_d.name}
                                        <code class="bg-slate-200 rounded"
                                            >{_d.ver}</code
                                        >
                                    </div>
                                    <div>
                                        {_d.desc}
                                    </div>
                                </div>
                                <div class="">
                                    <FormField>
                                        <Checkbox
                                            checked={get(_d.checked)}
                                            on:change={() => handleCheck(_d)}
                                        />
                                    </FormField>
                                </div>
                            </div>
                        </Content>
                    {/each}
                </Card>
            {:else}
                <Card>
                    <Content class="divide-y">
                        <div class="flex">
                            <div class="text-left">
                                <div>
                                    {d.name}
                                    <code class="bg-slate-200 rounded"
                                        >{d.ver}</code
                                    >
                                </div>
                                <div>
                                    {d.desc}
                                </div>
                            </div>
                            <div>
                                <FormField>
                                    <Checkbox
                                        checked={get(d.checked)}
                                        on:change={() => handleCheck(d)}
                                    />
                                </FormField>
                            </div>
                        </div>
                    </Content>
                </Card>
            {/if}
        {/each}
    </div>
</div>

