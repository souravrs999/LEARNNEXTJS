import { getFiles } from "@/lib/mdx";
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
      .findOne({ slug: req.query.slug });

    const posts: string[] = await getFiles("posts").then((res) =>
      res.map((_idx) => {
        return _idx.replace(/\.mdx/, "");
      })
    );

    if (viewCounts == null && posts.includes(req.query.slug.toString())) {
      // this function will run when we add a new post and will add it to db
      const newField = client
        .db()
        .collection("viewCount")
        .insertOne({ slug: req.query.slug, views: 1 });
    }

    if (req.method === "POST") {
      //increment the view count
      const updateField = client
        .db()
        .collection("viewCount")
        .updateOne(
          { slug: req.query.slug },
          { $set: { views: viewCounts.views + 1 } }
        );
    }

    return res.status(200).json(viewCounts);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
