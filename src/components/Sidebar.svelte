<script>
    import Drawer, { AppContent } from "@smui/drawer";
    import List, { Item, Text } from "@smui/list";

    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";

    import arch from "../data/archivement.json";

    let panel1Open = false;
    let panel2Open = false;

    let clicked = "nothing yet";

    let categories = [];

    categories = Object.entries(arch)
        .map(([id, data]) => ({
            id,
            name: data.name,
            order: data.order
        }))
        .sort((a, b) => a.order - b.order);
    console.log(categories)
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
                            {#each categories as cate}
                                <List>
                                    <Item
                                        href="javascript:void(0)"
                                        on:click={() => (clicked = "Gray Kittens")}
                                    >
                                        <Text>{cate.name}</Text>
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
                                    on:click={() => (clicked = "Gray Kittens")}
                                >
                                    <Text>HOUSE1</Text>
                                </Item>
                            </List>
                            <List>
                                <Item
                                    href="javascript:void(0)"
                                    on:click={() => (clicked = "Gray Kittens")}
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
