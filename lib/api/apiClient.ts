import { apiFetch } from './apiFetch'


export async function apiGet<T>(url: string): Promise<T> {
  return await apiFetch(url, { method: 'GET' })
}

export async function apiPost<T>(url: string, data: any): Promise<T> {
  return await apiFetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function apiPatch<T>(url: string, data: any): Promise<T> {
  return await apiFetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}
  