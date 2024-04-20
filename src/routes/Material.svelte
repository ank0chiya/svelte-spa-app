<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Header from "../components/Header.svelte";
</script>

<main>
    <Header />
    <Sidebar />
</main>

<style lang="postcss">
    * :global(.sample-btn) {
        background-color: #3730a3;
    }
</style>
