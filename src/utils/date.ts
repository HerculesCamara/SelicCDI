export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const getLastUtilDay = (date: Date) => {
  const lastUtilDay = new Date(date)
  const day = lastUtilDay.getDay()

  if (day === 0) {
    lastUtilDay.setDate(lastUtilDay.getDate() - 2)
  } else if (day === 6) {
    lastUtilDay.setDate(lastUtilDay.getDate() - 1)
  }

  return lastUtilDay
}
