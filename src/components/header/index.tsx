import { Logo } from '../logo'

export const Header = () => {
  return (
    <header className="bg-sky-700">
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-0">
        <Logo />
      </div>
    </header>
  )
}
