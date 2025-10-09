import { createSource } from '../generated/hypertune';

const hypertuneSource = createSource({
	token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
});

export default async function getHypertune() {
	await hypertuneSource.initIfNeeded();
	return hypertuneSource.root({
		args: {
			context: {
				environment: process.env.NODE_ENV,
				user: {
					id: 'kailash-portfolio',      
					name: 'Kailash Satkuri',     
					email: 'satkurikailash@gmail.com',
				},
			},
		},
	});
}