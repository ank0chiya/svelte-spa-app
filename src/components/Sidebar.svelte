<script>
    import {push} from 'svelte-spa-router'
    import Drawer, { AppContent } from "@smui/drawer";
    import List, { Item, Text } from "@smui/list";

    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";

    import arch from "../data/archivement.json";
    import { data } from "../lib/archivements"

    let panel1Open = false;
    let panel2Open = false;

    let sortedAchievements = Object.entries(arch).sort((a, b) => a[1].order - b[1].order);

    function clickHandler(d) {
        console.log(`in click handler: ${JSON.stringify(d)}`)
        $data = d

        push("/archivement")
    }
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <Accordion>
                    <Panel bind:open={panel1Open}>
                        <Header>
                            アチーブメント
                            <IconButton slot="icon" toggle pressed={panel1Open}>
                                <Icon class="material-icons" on
                                    >expand_less</Icon
                                >
                                <Icon class="material-icons">expand_more</Icon>
                            </IconButton>
                        </Header>
                        <Content>
                            {#each sortedAchievements as archivements}
                                <List>
                                    <Item
                                        href="javascript:void(0)"
                                        on:click={() => clickHandler(archivements[1].achievements)}
                                    >
                                        <Text>{archivements[1].name}</Text>
                                    </Item>
                                </List>
                            {/each}
                        </Content>
                    </Panel>
                </Accordion>
                <Accordion>
                    <Panel bind:open={panel2Open}>
                        <Header>
                            HOUSE
                            <IconButton slot="icon" toggle pressed={panel2Open}>
                                <Icon class="material-icons" on
                                    >expand_less</Icon
                                >
                                <Icon class="material-icons">expand_more</Icon>
                            </IconButton>
                        </Header>
                        <Content>
                            <List>
                                <Item
                                    href="javascript:void(0)"
                                    on:click={() => (console.log("Gray Kittens"))}
                                >
                                    <Text>HOUSE1</Text>
                                </Item>
                            </List>
                            <List>
                                <Item
                                    href="javascript:void(0)"
                                    on:click={() => (console.log("Gray Kittens"))}
                                >
                                    <Text>HOUSE2</Text>
                                </Item>
                            </List>
                        </Content>
                    </Panel>
                </Accordion>
            </List>
        </Content>
    </Drawer>
</div>
