import { apiUrl } from "../config/env";

const jsonHeaders = { "Content-Type": "application/json" };

const withTimeout = (promise, ms = 30000) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("Request timeout")), ms);
    promise
      .then((v) => {
        clearTimeout(t);
        resolve(v);
      })
      .catch((e) => {
        clearTimeout(t);
        reject(e);
      });
  });

async function request(path, options) {
  const res = await withTimeout(fetch(apiUrl(path), options));
  if (!res.ok) {
    let details = "";
    try {
      details = await res.text();
    } catch { /* empty */ }
    const err = new Error(`HTTP ${res.status}`);
    err.details = details;
    throw err;
  }
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return res.json();
  return res.text();
}

export async function startSession(payload) {
  return request("/session/start", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(payload),
  });
}

export async function updateSession(sessionId, payload) {
  return request("/session/update", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ sessionId, ...payload }),
  });
}

export async function getTopics() {
  return request("/topics", {
    method: "GET",
  });
}

export async function postChat(sessionId, payload) {
  return request("/chat", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ sessionId, ...payload }),
  });
}
