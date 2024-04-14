<script>
    import Card, {
        Content,
        PrimaryAction,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";

    let clicked = 0;
</script>

<div class="card-container">
    <Card>
        <Content>A card with action buttons.</Content>
        <Actions>
            <Button variant="raised"on:click={() => clicked++}>
                <Label>ログイン</Label>
            </Button>
        </Actions>
    </Card>
</div>
