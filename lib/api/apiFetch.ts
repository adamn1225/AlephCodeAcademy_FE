// lib/api/apiFetch.ts

import { getToken } from '@/lib/utils/token'

export async function apiFetch(url: string, options: RequestInit = {}) {
    let token = getToken() ?? undefined

    // Client-side: read from localStorage
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token') ?? undefined;
    }
  
    const headers: HeadersInit = {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'Content-Type': 'application/json',
    };
  
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';
    const fullUrl = `${baseUrl}${url}`;
  
    const res = await fetch(fullUrl, {
      ...options,
      headers,
      credentials: 'include',
    });
  
    if (res.status === 204) return null;
  
    const contentType = res.headers.get('content-type') || '';
    let data = null;
  
    if (contentType.includes('application/json')) {
      try {
        data = await res.json();
      } catch {
        console.error('[apiFetch] Failed to parse JSON');
        throw new Error('Invalid JSON in response');
      }
    }
  
    if (!res.ok) {
      console.error('[apiFetch] Error:', data);
      throw new Error(data?.error || `Request failed with status ${res.status}`);
    }
  
    return data;
  }
  