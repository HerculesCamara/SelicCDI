import { Header } from '@/components/header'
import { Selic } from '@/components/rates/selic-cdi'

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="flex h-[calc(100dvh-80px)] bg-gradient-to-b from-sky-700 to-sky-950">
          <div className="container my-auto flex h-full max-h-96 max-w-screen-xl flex-col justify-between md:h-max md:flex-row md:items-center">
            <Selic />
          </div>
        </section>
      </main>
    </div>
  )
}
