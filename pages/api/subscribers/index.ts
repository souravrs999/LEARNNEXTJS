import { NextApiRequest, NextApiResponse } from 'next';

const client = require('@mailchimp/mailchimp_marketing');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us5'
  });

  const response = await client.lists.getAllLists();
  return res.status(200).json(response.lists[0].stats.member_count);
}
