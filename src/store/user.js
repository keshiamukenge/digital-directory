// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const isAuthenticatedStorageValue = browser ? JSON.parse(localStorage.getItem('isAuthenticated')) || false : null;
export const isAuthenticated = writable(isAuthenticatedStorageValue);

function userStore() {
	const userStorageValue = browser ? JSON.parse(localStorage.getItem('user')) || {firstName: '', lastName: '', email: '', password: ''} : null;
	const { subscribe, set } = writable(userStorageValue);

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

export const userResearch = writable('');