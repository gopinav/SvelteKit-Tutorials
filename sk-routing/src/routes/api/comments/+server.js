import { comments } from '$lib/comments.js';

export function GET() {
	return new Response(JSON.stringify(comments));
}
