import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send(session.user);
  } else {
    res.send({ error: 'You must be logged in to view the authenticated page' });
  }
};
