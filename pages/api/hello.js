import initDB from "../../helper/initDB"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
initDB()
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
