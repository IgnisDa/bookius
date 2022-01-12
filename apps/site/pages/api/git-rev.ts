import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) =>
  res.status(200).send(process.env.GIT_REV);
