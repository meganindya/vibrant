// -- private variables --------------------------------------------------------

let _urlAPI = '';

// -- public variables ---------------------------------------------------------

let apiGET;
let apiPOST;
let apiPUT;
let apiDELETE;

// -- public functions ---------------------------------------------------------

export function init(url: string) {
  _urlAPI = url;

  ['GET', 'POST', 'PUT', 'DELETE'].forEach((method) => {
    const func = function (path: string, body = {}) {
      const pathFull = new URL(path, _urlAPI).href;
      const options: {
        method: string;
        headers: Headers;
        credentials: RequestCredentials;
        body?: string;
      } = {
        method,
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        }),
        credentials: 'include' as RequestCredentials,
      };

      if (method !== 'GET') options.body = JSON.stringify(body);

      return new Promise((resolve) => {
        fetch(pathFull, options)
          .then((res) => setTimeout(() => resolve(res), import.meta.env.VITE_APP_API_DELAY))
          .catch((e) => {
            throw e;
          });
      });
    };

    if (method === 'GET') apiGET = func;
    if (method === 'POST') apiPOST = func;
    if (method === 'PUT') apiPUT = func;
    if (method === 'DELETE') apiDELETE = func;
  });
}

// -- public variables ---------------------------------------------------------

export { apiGET, apiPOST, apiPUT, apiDELETE };
