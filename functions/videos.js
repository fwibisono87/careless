import axios from 'axios';

export const handler = async (req, res) => {
	const key = process.env.VITE_SECRET_KEY;
	try {
		const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
			params: {
				part: 'snippet',
				maxResults: 49,
				playlistId: 'UUFrIoCS-BaPjSeA7r2UWNWA',
				key: key
			}
		});
		return {
			statusCode: 200,
			body: JSON.stringify({ data: response.data })
		};
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error: ' + e })
		};
	}
};
