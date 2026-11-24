export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const WORKSPACE = 'samcounter';
  const COUNTER = 'samplayszz';
  const key = process.env.COUNTERAPI_KEY;

  const isUp = req.query.action === 'up';
  const url = isUp
    ? `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}/up`
    : `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}`;

  try {
    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${key}` },
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch counter' });
  }
}
