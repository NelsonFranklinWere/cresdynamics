/** Minimal HTML escaping for email bodies (user-supplied text). */
export function escapeHtml(value?: string | null): string {
  const s = (value ?? '—').toString();
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function nlToBr(value: string): string {
  return escapeHtml(value).replace(/\r\n/g, '\n').replace(/\n/g, '<br>');
}
