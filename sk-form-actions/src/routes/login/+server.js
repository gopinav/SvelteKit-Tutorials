import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const data = await request.json();
	const { username, password } = data;
	if (!username || !password) {
		return json(
			{ message: 'Missing username or password' },
			{
				status: 400
			}
		);
	}
	cookies.set('username', username, { path: '/' });
	return json({ message: 'Logged in' });
}
