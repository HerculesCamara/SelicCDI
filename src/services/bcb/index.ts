import { env } from '@/env'
import { formatDate } from '@/utils/date'

type CustomResponse = {
  erro: {
    statusCode: number
    detail: string
  }

  data: {
    data: string
    valor: string
  }
}

export const getSelic = async (initialDate?: Date, finalDate?: Date) => {
  const url = new URL(env.BCB_API_URL_SELIC)

  if (initialDate) {
    url.searchParams.append('dataInicial', formatDate(initialDate))
  }

  if (finalDate) {
    url.searchParams.append('dataFinal', formatDate(finalDate))
  }

  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['bcb', 'selic'],
    },
    headers: {
      'cache-control': 'public, max-age=900',
    },
  })
    .then((res) => res)
    .catch(() => ({ ok: false }))

  if (!response.ok) {
    return []
  }

  const data = await (response as Response).json()

  if (data.erro) {
    return []
  }

  return data as CustomResponse['data'][]
}

export const getCdi = async (initialDate?: Date, finalDate?: Date) => {
  const url = new URL(env.BCB_API_URL_CDI)

  if (initialDate) {
    url.searchParams.append('dataInicial', formatDate(initialDate))
  }

  if (finalDate) {
    url.searchParams.append('dataFinal', formatDate(finalDate))
  }

  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['bcb', 'cdi'],
    },
    headers: {
      'cache-control': 'public, max-age=900',
    },
  })
    .then((res) => res)
    .catch(() => ({ ok: false }))

  if (!response.ok) {
    return []
  }

  const data = await (response as Response).json()

  if (data.erro) {
    return []
  }

  return data as CustomResponse['data'][]
}
