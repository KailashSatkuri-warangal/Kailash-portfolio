// Simple client-side Hypertune mock / fetch
export default async function getHypertune() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				showNewSection: true, // sample flag
			});
		}, 500);
	});
}
