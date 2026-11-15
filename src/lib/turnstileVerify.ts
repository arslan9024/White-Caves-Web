/**
 * Turnstile / reCAPTCHA bot-protection token presence guard (Point 83).
 */
export function hasValidBotToken(token: string | undefined | null): boolean {
  return Boolean(token && token.trim().length >= 10);
}
