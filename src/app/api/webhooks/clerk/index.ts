import { NextApiRequest, NextApiResponse } from 'next';
import { Webhook } from 'svix';
import { buffer } from 'micro';
import { clerkClient } from '@clerk/nextjs/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = (await buffer(req)).toString();
  const headers = req.headers;

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return res.status(400).send('Webhook verification failed');
  }

  const eventType = evt.type;
  const eventData = evt.data;

  if (eventType === 'user.created') {
    const userId = eventData.id;
    await clerkClient.users.updateUser(userId, {
      publicMetadata: { role: 'user' },
    });
  }

  res.status(200).send('Webhook received');
};

export default handler;