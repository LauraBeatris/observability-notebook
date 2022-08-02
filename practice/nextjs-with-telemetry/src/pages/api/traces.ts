import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  console.log('Called API route', req.body)

  return res.status(200).json({})
}
