/** Only HTTPS Google Forms responder links are permitted. No data is submitted here. */
export function validateFormUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password || url.port)
      return null;
    const short =
      url.hostname === "forms.gle" &&
      /^\/[A-Za-z0-9_-]+\/?$/.test(url.pathname);
    const full =
      url.hostname === "docs.google.com" &&
      /^\/forms\/d\/(?:e\/)?[A-Za-z0-9_-]+\/viewform\/?$/.test(url.pathname);
    return short || full ? url.href : null;
  } catch {
    return null;
  }
}
export function resolveOrderUrl(
  base?: string,
  prefilled?: string,
): string | null {
  return validateFormUrl(prefilled) ?? validateFormUrl(base);
}
