import { getCdi, getSelic } from '@/services/bcb'
import { getLastUtilDay } from '@/utils/date'

export const Selic = async () => {
  const today = new Date()
  // set timezone to BRT
  today.setHours(today.getHours() - 3)

  const selic = await getSelic(today, today)

  const lastUtilDay = getLastUtilDay(today)

  lastUtilDay.setDate(lastUtilDay.getDate() - 1)

  const cdi = await getCdi(lastUtilDay)

  const formattedSelic = selic.at(0)?.valor.replace('.', ',')
  const formattedCdi = cdi.at(0)?.valor.replace('.', ',')

  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl">Selic</h1>
        <div>
          <p className="text-5xl font-bold md:text-8xl">{formattedSelic}%</p>
          <span className="md:text-xl">a.a.</span>
        </div>
      </div>

      <span className="md:self-end">&</span>

      <div>
        <h1 className="text-3xl md:text-4xl">CDI</h1>
        <div>
          <p className="text-5xl font-bold md:text-8xl">{formattedCdi}%</p>
          <span className="md:text-xl">a.a.</span>
        </div>
      </div>
    </>
  )
}
