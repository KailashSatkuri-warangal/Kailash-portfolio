'use client';

// Simulate async flag fetch from Hypertune
export default async function getHypertune() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				// Add your flags here
				showNewSection: true,

				// Add your context information
				context: {
					environment: process.env.NODE_ENV,
					user: {
						id: 'e23cc9a8-0287-40aa-8500-6802df91e56a',
						name: 'satkuri kailash',
						email: 'satkurikailash@gmail.com',
					},
				},
			});
		}, 1000); // simulate network delay
	});
}
