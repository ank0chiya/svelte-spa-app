<script>
    import "./styles/button.css";
    import  { isLogin } from "./lib/login";

    import Card, {
        Content,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";

    let mailaddr = "";
    let password = "";

    function onClick() {
        if((mailaddr == "abc") && (password == "pass")) {
            isLogin.update((val) => val = true) 
        }
    }
</script>

<div class="card-container">
    <Card class="login-card">
        <Content>Hello !!</Content>
        <Content class="login-content">
            <Textfield
                class="text-field"
                variant="outlined"
                bind:value={mailaddr}
                label="address"
            >
                <HelperText class="login-helper" slot="helper">Input mail address</HelperText>
            </Textfield>
        </Content>
        <Content class="login-content">
            <Textfield
                class="text-field"
                variant="outlined"
                bind:value={password}
                label="password"
            >
                <HelperText class="login-helper" slot="helper">Input password</HelperText>
            </Textfield>
        </Content>
        <Content class="login-content">
            <div>"abc" "pass"</div>
            <Button
                class="login-btn"
                variant="raised"
                on:click={onClick}
            >
                <Label>ログイン</Label>
            </Button>
        </Content>
    </Card>
</div>

<style lang="postcss">
    * :global(.login-card) {
        font-style: italic;
        @apply w-96;
    }

    * :global(.login-btn) {
        background-color: var(--login-btn-color);
        @apply w-full;
    }

    * :global(.login-content) {
        @apply w-full;
    }

    * :global(.text-field) {
        @apply w-full flex;
    }

    * :global(.login-helper) {
        @apply w-full flex;
    }

    .card-container {
        @apply items-center;
        @apply flex;
        @apply justify-center;
        @apply h-screen;
        @apply w-screen;
    }
</style>
