import endpoints from "../config/endpoints";

export default async (endpoint, params = "", options = {}) => {
  try {
    const currentEndpoint = endpoints[endpoint];
    const response = await fetch(`${currentEndpoint.url}${params}`, {
      method: currentEndpoint.method,
      ...options,
    });
    let data = await response.json();
    if (currentEndpoint.key) {
      data = data[currentEndpoint.key];
    }
    return currentEndpoint.serializer ? currentEndpoint.serializer(data) : data;
  } catch (err) {
    console.error(err);
    Promise.resolve({ error: err });
  }
};
