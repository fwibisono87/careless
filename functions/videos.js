import fetch from 'node-fetch';

export const handler = async (req, res) => {
	const key = process.env.VITE_SECRET_KEY;
	let rawResponse = '';
	try {
		rawResponse = await fetch(
			'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=49&playlistId=UUFrIoCS-BaPjSeA7r2UWNWA&key=' +
				key
		);
		response = await rawResponse.json();
		return {
			statusCode: 200,
			body: JSON.stringify(response)
		};
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error: ' + e, rawResponse })
		};
	}
};
