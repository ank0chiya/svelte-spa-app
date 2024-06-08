import { writable } from 'svelte/store';

import arch from "../data/archivement.json";

export const data = writable([]);


export const archData = writable({});


console.log(`archdata in arch.js ${archData}`)