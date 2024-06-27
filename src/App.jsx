import { Nav } from "./Component/Nav"
import { Hero } from "./Component/Hero"
import { About } from "./Component/About"

function App() {
  return (
    <>
    <div className=" bg-[#fff3ea] md:block lg:block sm:hidden ssm:hidden">
      <Nav />
      <Hero />
      <About />
    </div>
    <div className=" sm:flex ssm:flex md:hidden lg:hidden h-screen w-screen items-center justify-center text-5xl">
      <p>
        Mobile coming soon!
      </p>
    </div>
    </>
  )
}

export default App
