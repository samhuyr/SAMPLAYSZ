export async function onRequest(context) {
  const WORKSPACE = 'samcounter';
  const COUNTER = 'samplayszz';
  const key = context.env.COUNTERAPI_KEY;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Content-Type': 'application/json',
  };

  const reqUrl = new URL(context.request.url);
  const isUp = reqUrl.searchParams.get('action') === 'up';
  const target = isUp
    ? `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}/up`
    : `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}`;

  try {
    const r = await fetch(target, {
      headers: { Authorization: `Bearer ${key}` },
    });
    const data = await r.json();
    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch counter' }), {
      status: 500,
      headers,
    });
  }
}
