import { writable } from 'svelte/store';
import type { AnimalsResponse } from '../../pocketbase-types';
import type { SuperValidated } from 'sveltekit-superforms';
import type { addAnimalSchema, removeAnimalSchema, updateAnimalSchema } from '$lib/schemas';

export const animals = writable<AnimalsResponse[]>([]);
export const addAnimalFormStore = writable<SuperValidated<typeof addAnimalSchema>>();
export const updateAnimalFormStore = writable<SuperValidated<typeof updateAnimalSchema>>();
export const deleteAnimalFormStore = writable<SuperValidated<typeof removeAnimalSchema>>();
