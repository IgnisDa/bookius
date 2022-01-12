import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const userAgent = req.headers['user-agent'];
  if (userAgent !== 'gh-actions-automated-script') {
    res.status(403).json({
      message: `UA '${userAgent}' is not allowed to access this endpoint`,
    });
    return;
  }
  res.status(200).json({ GIT_REV: process.env.GIT_REV });
};
