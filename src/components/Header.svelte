<script lang="ts">
    import Button, { Label } from "@smui/button";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import Menu from "@smui/menu";
    import List, { Item, Separator, Text } from "@smui/list";

    import { isLogin } from "../lib/login"

    let menu: Menu;
    function handleClick() {
        console.log("aaaa");
    }

    function logout(){
        isLogin.set(false)
    }
</script>

<div class="flexy">
    <div class="top-app-bar-container flexor">
        <TopAppBar variant="static" dense={true} color={"secondary"}>
            <Row>
                <Section>
                    <Button on:click={handleClick}>
                        <Title>コントロールパネル</Title>
                    </Button>
                </Section>
                <Section align="end" toolbar>
                    <div>
                        <Button on:click={() => menu.setOpen(true)}>
                            <Label>abc@~~~.com</Label>
                        </Button>
                        <Menu bind:this={menu} anchorCorner="BOTTOM_LEFT">
                            <List>
                                <Item>
                                    <Text>Cut</Text>
                                </Item>
                                <Separator />
                                <Item>
                                    <Text on:click={logout}>LOGOUT</Text>
                                </Item>
                            </List>
                        </Menu>
                    </div>
                </Section>
            </Row>
        </TopAppBar>
    </div>
</div>
