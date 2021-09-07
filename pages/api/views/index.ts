import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface viewType {
  slug?: string;
  views?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client: any = await clientPromise;
    const viewCounts: viewType = await client
      .db()
      .collection("viewCount")
      .find()
      .toArray();

    return res.status(200).json(viewCounts);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
