type supportedHttpMethods = "GET" | "PATCH" | "DELETE" | "POST";

interface RequestOptions {
  method: supportedHttpMethods;
  apiDomain: string;
  path: string;
  url?: string;
  extraHeaders?: any;
  userId?: number;
  body: any;
} 

async function httpRequest({url, apiDomain, path, userId, body, extraHeaders, method}: RequestOptions) {
  if (userId) {
    extraHeaders = extraHeaders ? {...extraHeaders, userId } : { userId };
  }
  
  const address = url || apiDomain + path; 

  // Default options are marked with *
  const response = await fetch(address, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
      'userId': userId,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
    ...extraHeaders,
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

export default httpRequest;
