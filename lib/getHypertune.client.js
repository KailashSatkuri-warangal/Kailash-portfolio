export default async function getHypertune() {
  try {
    // MOCK flags for now
    return {
      showNewSection: true,
      enableDesignV2: false
    };
  } catch (err) {
    console.error('Failed to fetch Hypertune flags:', err);
    return {};
  }
}