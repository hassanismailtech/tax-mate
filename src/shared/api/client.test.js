import { apiUrl } from "../config/env";

export function runClientTests() {
  const paths = ["/chat", "chat", "/session/start", "topics"];
  const results = paths.map((p) => apiUrl(p));
  const ok =
    results[0].endsWith("/chat") &&
    results[1].endsWith("/chat") &&
    results[2].endsWith("/session/start") &&
    results[3].endsWith("/topics");
  return { ok, results };
}
