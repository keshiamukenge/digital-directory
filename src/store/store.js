import { writable } from 'svelte/store';

export const isAuthenticated = writable(localStorage.getItem('isAuthenticated') || false);

export function userStore() {
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