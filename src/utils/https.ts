import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BASE_URL } from 'defines'

// Tạo instance Axios
export const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Hàm GET
export const get = async <T = unknown>(path: string, options?: AxiosRequestConfig): Promise<T> => {
  const response = await httpClient.get<T>(path, options)
  return response.data
}

// Hàm POST
export const post = async <T = unknown, D = unknown>(
  path: string,
  data: D,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await httpClient.post<T>(path, data, options)
  return response.data
}

// Hàm PUT
export const put = async <T = unknown, D = unknown>(
  path: string,
  data: D,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await httpClient.put<T>(path, data, options)
  return response.data
}

// Hàm PATCH
export const patch = async <T = unknown, D = unknown>(
  path: string,
  data: D,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await httpClient.patch<T>(path, data, options)
  return response.data
}

// Hàm DELETE
export const del = async <T = unknown>(path: string, options?: AxiosRequestConfig): Promise<T> => {
  const response = await httpClient.delete<T>(path, options)
  return response.data
}
