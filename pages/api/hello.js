// Next.js API rotes support file-based routing.
// They are located in the pages/api directory.
// Each file in this directory is mapped to /api/* and will be treated as an API endpoint instead of a page.

export default function handler(req, res) {
  res.status(200).json({ name: 'S. Kailash' })
}
