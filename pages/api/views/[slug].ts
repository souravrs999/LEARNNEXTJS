import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

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
      .collection('viewCount')
      .findOne({ slug: req.query.slug });

    if (viewCounts == null) {
      // if viewCounts is null then the field dosen't
      // exist in the database so add it to the db with
      // view 1
      const newBlog = client
        .db()
        .collection('viewCount')
        .insertOne({ slug: req.query.slug, views: 1 });
    }

    if (req.method === 'POST') {
      //increment the view count
      const updateField = client
        .db()
        .collection('viewCount')
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
