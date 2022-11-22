import { update_await_block_branch, validate_each_argument } from 'svelte/internal';
import { writable } from 'svelte/store';

import getUsersApi from '../services/users.services';

export const isAuthenticated = writable(localStorage.getItem('isAuthenticated') || false);

function userStore() {
	const { subscribe, set } = writable(JSON.parse(localStorage.getItem('user')) || {firstName: '', lastName: '', email: '', password: ''});

	return {
		subscribe,
		setUser: ({ data }) => set(data),
		login: () => subscribe(value => {
			if(value.firstName && value.lastName && value.email && value.password) {
				localStorage.setItem('user', JSON.stringify(value));
				isAuthenticated.set(true);
				localStorage.setItem('isAuthenticated', true);
			}
		}),
		logout: () => {
			localStorage.clear()
			isAuthenticated.set(false)
		}
	}
}
export const user = userStore();

export const isLoading = writable(false);

export const userResearch = writable('');

function usersStore() {
	const { subscribe, set, update } = writable([])

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

function selectedFiltersStore() {
	const { subscribe, set } = writable([]);

	return {
		set,
		subscribe,
	}
}

export const selectedFilters = selectedFiltersStore();

export const friends = writable([]);
