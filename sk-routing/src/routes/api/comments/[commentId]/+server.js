import { comments } from '$lib/comments.js';

export function GET({ params }) {
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	return new Response(JSON.stringify(comment), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function PATCH({ params, request }) {
	const { commentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment.text = text;
	return new Response(JSON.stringify(comment));
}

export async function DELETE({ params }) {
	const { commentId } = params;
	const deletedComment = comments.find((comment) => comment.id === parseInt(commentId));
	const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
	comments.splice(index, 1);
	return new Response(JSON.stringify(deletedComment));
}
