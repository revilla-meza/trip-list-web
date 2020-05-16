type supportedHttpMethods = 'GET' | 'PATCH' | 'DELETE' | 'POST';

interface RequestOptions {
  method: supportedHttpMethods;
  apiDomain: string;
  path: string;
  url?: string;
  extraHeaders?: any;
  userId?: number;
  body?: any;
}

function handleErrors(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

async function httpRequest({ url, apiDomain, path, userId, body, extraHeaders, method }: RequestOptions) {
  if (userId) {
    extraHeaders = extraHeaders ? { ...extraHeaders, userId } : { userId };
  }

  const address = url || apiDomain + path;

  const response = await fetch(address, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      userId: userId,
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  });
  const success = handleErrors(response);

  return await success.json();
}

export default httpRequest;
