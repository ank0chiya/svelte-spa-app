import Home from './routes/Home.svelte';
import Lorem from './routes/Lorem.svelte';
import Material from './routes/Material.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/lorem/:repeat': Lorem,
    '/material' : Material,
    // The catch-all route must always be last
    '*': NotFound
};
