/**
 * Ensures the URL has a protocol. If missing, prepends 'https://'.
 * Accepts any valid protocol.
 * @param {string} url - The input URL string.
 * @returns {string} - The URL with protocol.
 */
function ensureProtocol(url: string): string {
  // General regex to check for any valid protocol
  const protocolPattern = /^[a-z][a-z0-9+.-]*:\/\//i;
  if (protocolPattern.test(url)) {
    return url;
  }
  // Prepend 'https://' if no protocol is present
  return "https://" + url;
}

/**
 * Checks if the hostname includes a valid TLD.
 * @param {string} hostname - The hostname part of the URL.
 * @returns {boolean} - True if hostname has a valid TLD, else false.
 */
function hasValidTld(hostname: string): boolean {
  // Regular expression to check for at least one dot and a TLD of 2+ characters
  const tldPattern = /\.[a-z]{2,}$/i;
  return tldPattern.test(hostname);
}

/**
 * Validates the URL and ensures it includes a valid TLD.
 * @param {string} url - The input URL string.
 * @returns {string|boolean} - The validated URL with protocol or false if invalid.
 */
export function isValidUrl(url: string): string | boolean {
  try {
    // Ensure the URL has a protocol
    const urlWithProtocol = ensureProtocol(url);
    const parsedUrl = new URL(urlWithProtocol);

    // Check if the hostname has a valid TLD
    if (!hasValidTld(parsedUrl.hostname)) {
      return false;
    }

    return urlWithProtocol;
  } catch {
    return false;
  }
}
