import { FetchOptions } from "ohmyfetch"
import { ex } from "./examplesPvp";

export const useCustomFetch = async <T>(url: string, options?: FetchOptions, retryCount: number = 0) => {
  const config = useRuntimeConfig()
  const { $cookies, $localePath } = useNuxtApp()
  const router = useRouter()

  if (ex[url]) {
    return Promise.resolve(ex[url][options.method].res);
  }
}