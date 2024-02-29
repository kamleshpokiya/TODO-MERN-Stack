// apiUtils.js
export const apiGet = (url) => fetch(url).then((response) => response.json());

export const apiPut = (url, data) =>
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export const apiDelete = (url) => fetch(url, { method: "DELETE" });

export const apiPost = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return console.error("Error:", error);
  }
};
