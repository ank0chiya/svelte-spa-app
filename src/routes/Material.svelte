<script lang="ts">
    import Button from "@smui/button";
    import Card from "@smui/card";
</script>

<main>
    <h1>test</h1>
    <div>
    
        <Button class="sample-btn" variant="raised">TEST</Button>
    
    </div>
    
    <Button variant="raised">hoge</Button>
    <Card padded>hoge</Card>
</main>


<style lang="postcss">

    * :global(.sample-btn) {
        background-color: #3730a3;
    } 
   

</style>