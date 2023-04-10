import { readable, writable, derived } from 'svelte/store';
export const apiData = writable([]);
export const about = derived(apiData, ($apiData) => {
  if ($apiData.about.info){
    return $apiData.about.info.map(about => about.info);
  }
  return [];
});

export const BASE_URL = readable('http://localhost:8081/');