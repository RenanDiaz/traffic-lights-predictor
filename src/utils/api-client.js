const apiKey = '63810012c890f30a8fd1f57a';

export async function fetchLights() {
  const response = await fetch('https://trafficlight-7363.restdb.io/rest/lights', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': apiKey,
    },
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error(data.statusText);
    })
    .catch(() => [
      { _id: '63812795cbd79f6600010953', name: 'Santa Cruz', steps: '4' },
      {
        _id: '63812795cbd79f6600010954',
        name: 'Parque de las Madres',
        steps: 2,
      },
    ]);
  return response;
}

export async function fetchLight(id) {
  const response = await fetch(`https://trafficlight-7363.restdb.io/rest/lights/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': apiKey,
    },
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error(data.statusText);
    })
    .catch(() => ({ _id: '63812795cbd79f6600010953', name: 'Santa Cruz', steps: '4' }));
  return response;
}

export async function fetchStepsFor(id) {
  const date = new Date();
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const query = JSON.stringify({ lightId: id, datetime: { $gt: midnight.getTime() } });
  const hint = JSON.stringify({ $orderby: { datetime: -1 } });
  const response = await fetch(
    `https://trafficlight-7363.restdb.io/rest/steps?q=${query}&h=${hint}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'x-apikey': apiKey,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error(data.statusText);
  });
  return response;
}

export async function postLight(newLight) {
  const response = await fetch('https://trafficlight-7363.restdb.io/rest/lights', {
    method: 'POST',
    body: JSON.stringify(newLight),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': apiKey,
    },
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error(data.statusText);
    })
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function postStepChange(stepChange) {
  const response = await fetch('https://trafficlight-7363.restdb.io/rest/steps', {
    method: 'POST',
    body: JSON.stringify(stepChange),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': apiKey,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error(data.statusText);
  });
  return response;
}
