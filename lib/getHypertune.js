// lib/getHypertune.client.js
export default async function getHypertune() {
  try {
    // For now, return mock flags (replace with real API later)
    return {
      showNewSection: true,
      enableDesignV2: false
    }
  } catch (err) {
    console.error('Failed to fetch Hypertune flags:', err)
    return {}
  }
}