export async function GET() {
	const response = await fetch('http://localhost:4000/postcodes');
	const postcodes = await response.json();
	const appPostCodes = postcodes.map((postcode) => {
		return {
			buildingName: postcode.building_name,
			line1: postcode.line_1,
			line2: postcode.line_2,
			line3: postcode.line_3,
			town: postcode.post_town,
			country: postcode.country,
			postcode: postcode.postcode
		};
	});
	return new Response(JSON.stringify(appPostCodes), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
