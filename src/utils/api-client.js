export async function fetchLights() {
  const response = await fetch('https://trafficlight-7363.restdb.io/rest/lights', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': '63810012c890f30a8fd1f57a',
    },
  })
    .then((data) => {
      console.log({ data });
      if (data.ok) {
        return data.json();
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
      return [];
    })
    .finally(() => {});
  console.log({ response });
  return response;
}

export async function postLight(newLight) {
  const response = await fetch('https://trafficlight-7363.restdb.io/rest/lights', {
    method: 'POST',
    body: JSON.stringify(newLight),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'x-apikey': '63810012c890f30a8fd1f57a',
    },
  })
    .then((data) => {
      console.log({ data });
      if (data.ok) {
        return data.json();
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
      return [];
    })
    .finally(() => {});
  console.log({ response });
  return response;
}
