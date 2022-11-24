// @ts-nocheck
import { writable } from 'svelte/store';

import getUsersApi from '../services/users.services';

function usersStore() {
	const { subscribe, set } = writable([])

	return {
		subscribe,
		set,
		getUsers: async ({ usersLength }) => {
			try {
				const result = await getUsersApi({ usersLength });
				set(result.data.results);
			} catch(error) {
				return error;
			}
		}
	}
}

export const users = usersStore();
export const displayUsers = writable([]);