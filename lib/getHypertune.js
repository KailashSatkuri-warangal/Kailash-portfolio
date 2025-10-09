export default async function getHypertune() {
  // Fetch flags from your Hypertune project
  const response = await fetch(
    `https://api.hypertune.com/flags?token=${process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN}`
  )
  const data = await response.json()
  return data
}