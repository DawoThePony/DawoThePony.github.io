import { Nav } from "./Component/Nav"
import { Hero } from "./Component/Hero"
import { Piekarnia } from "./Component/Piekarnia"
import { Cukiernia } from "./Component/Cukiernia"
import { Sklepy } from "./Component/Sklepy"
import { ONas } from "./Component/ONas"
import { Kontakt } from "./Component/Kontakt"

function App() {
  return (
    <div className=" bg-[#fff3ea] min-h-[300vh]">
      <Nav />
      <Hero />
      <Piekarnia />
      <Cukiernia />
      <Sklepy />
      <ONas />
      <Kontakt />
    </div>
  )
}

export default App
