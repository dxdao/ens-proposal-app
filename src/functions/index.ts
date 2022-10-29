import { PinataConfig, PinataPinResponse } from '@pinata/sdk'
import axios from 'axios'

export const baseUrl = 'https://api.pinata.cloud'

export function createConfigForAxiosHeaders(config: PinataConfig) {
  if (
    config.pinataApiKey &&
    config.pinataApiKey.length > 0 &&
    config.pinataSecretApiKey &&
    config.pinataSecretApiKey.length > 0
  ) {
    return {
      withCredentials: true,
      headers: {
        pinata_api_key: config.pinataApiKey,
        pinata_secret_api_key: config.pinataSecretApiKey,
      },
    }
  }

  if (config.pinataJWTKey && config.pinataJWTKey.length > 0) {
    return {
      headers: {
        Authorization: `Bearer ${config.pinataJWTKey}`,
      },
    }
  }

  throw new Error('Missing credentials')
}

export default function pinJSONToIPFS(
  config: PinataConfig,
  body: any,
): Promise<PinataPinResponse> {
  if (typeof body !== 'object') {
    throw new Error('body must be a valid JSON object. Provided body: ', body)
  }

  const requestBody = {
    pinataContent: body,
    pinataOptions: {
      cidVersion: 1,
    },
  }

  const endpoint = `${baseUrl}/pinning/pinJSONToIPFS`

  return axios
    .post<PinataPinResponse>(endpoint, requestBody, {
      ...(createConfigForAxiosHeaders(config) as any),
    })
    .then((response) => {
      return response.data
    })
}
