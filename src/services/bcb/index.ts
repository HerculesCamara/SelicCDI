import { env } from '@/env'
import { formatDate } from '@/utils/date'

type Response = {
  data: string
  valor: string
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
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['bcb', 'selic'],
    },
  })
  const data = await response.json()

  return data as Response[]
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
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['bcb', 'cdi'],
    },
  })
  const data = await response.json()

  return data as Response[]
}
