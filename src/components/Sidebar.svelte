<script>
    import Card, { Content } from "@smui/card";
    import List, { Item, Text } from "@smui/list";

    import { sidebar_items } from "../lib/sidebar";
    import { viewportComponent } from "../lib/conponentswitcher";

    function switchcomponent(component) {
        viewportComponent.set(component)
    }
</script>

<div class="card-display">
    <div class="card-container">
        <Card>
            <Content component={List}>
                {#each sidebar_items as item}
                    <Item on:click = {() => switchcomponent(item.views)}>
                        {item.name}
                    </Item>
                {/each}
            </Content>
        </Card>
    </div>
</div>

