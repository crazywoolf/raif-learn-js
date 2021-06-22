class Api {
  get (url, init) {
    return fetch(url, init);
  }

  post (url, init) {
    return fetch(url, {
      ...init,
      method: 'POST'
    });
  }

  put (url, init) {
    return fetch(url, {
      ...init,
      method: 'PUT'
    });
  }

  delete (url, init) {
    return fetch(url, {
      ...init,
      method: 'DELETE'
    });
  }
}

export const api = new Api();
