export function canonical(
  input?: string | URL,
  options?: { trailingSlash?: boolean },
) {
  const base = "https://www.unionphotoco.com";
  const trailing = options?.trailingSlash ?? true;

  let url: URL;
  if (input instanceof URL) {
    url = input;
  } else if (typeof input === "string" && input.trim().length > 0) {
    url = input.startsWith("http")
      ? new URL(input)
      : new URL(input.startsWith("/") ? input : "/" + input, base);
  } else if (typeof window !== "undefined" && window.location) {
    url = new URL(window.location.href);
  } else {
    url = new URL(base);
  }

  url.protocol = "https:";
  url.hostname = "www.unionphotoco.com";

  const looksLikeFile = /\.[a-z0-9]+$/i.test(url.pathname);
  if (trailing && !looksLikeFile && !url.pathname.endsWith("/")) {
    url.pathname += "/";
  }

  return url.toString();
}
