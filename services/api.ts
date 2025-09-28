const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const resp = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include',
    ...options,
  });

  const contentType = resp.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const body = isJson ? await resp.json() : await resp.text();

  if (!resp.ok) {
    const message = isJson ? body?.detail || JSON.stringify(body) : body;
    throw new Error(message || `Request failed: ${resp.status}`);
  }

  return body as T;
}
