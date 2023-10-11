import whatIsProblem from "public/images/problem.jpeg";
import bio from "public/images/biofiliczny.jpg";
import verde from "public/images/dlaczego.jpg";
import konsultacja from "public/images/konsultacja.jpg";
import Badge from "./components/Badge";
import Main from "./components/Main";
import About from "./components/About";
export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <div className='p-2.5 bg-gray-800'>
        <Badge
          title='W czym problem ?'
          image={whatIsProblem}
          href='/w_czym_problem'
        />
        <Badge
          title='Projekt i konsultacja.'
          image={konsultacja}
          href='/projekt_i_konsultacja'
        />
        <Badge
          title='Czym jest projekt biofiliczny?'
          image={bio}
          href='/biofilia'
        />
        <Badge
          title='Dlaczego Verde architektura?'
          image={verde}
          href='/dlaczego-verde'
        />
      </div>
    </div>
  );
}
