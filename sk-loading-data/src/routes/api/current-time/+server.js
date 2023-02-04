export async function GET() {
	console.log('current-time GET handler invoked');
	return new Response(new Date().toLocaleTimeString());
}

// export const prerender = true;
