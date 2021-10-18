import { NextApiRequest, NextApiResponse } from 'next';

interface gitProps {
  stargazers_count: number;
  html_url: string;
  forks: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gitApiUrl: string =
    'https://api.github.com/repos/souravrs999/LEARNNEXTJS';

  const gitRes: gitProps = await fetch(encodeURI(gitApiUrl)).then((res) =>
    res.json()
  );

  return res.status(200).json({
    stars: gitRes.stargazers_count,
    url: gitRes.html_url,
    forks: gitRes.forks
  });
}
