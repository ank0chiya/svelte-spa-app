<script>
    import Drawer, { AppContent } from "@smui/drawer";
    import List, { Item, Text } from "@smui/list";

    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    
    let panel1Open = false;
    let panel2Open = false;

    let clicked = "nothing yet";
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <Accordion>
                    <Panel bind:open={panel1Open}>
                        <Header>
                            FOOD
                            <IconButton slot="icon" toggle pressed={panel1Open}>
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
                                    <Text>FOOD1</Text>
                                </Item>
                            </List>
                            <List>
                                <Item
                                    href="javascript:void(0)"
                                    on:click={() => (clicked = "Gray Kittens")}
                                >
                                    <Text>FOOD2</Text>
                                </Item>
                            </List>
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
