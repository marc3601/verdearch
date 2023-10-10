import whatIsProblem from "public/images/problem.jpeg";
import bio from "public/images/biofiliczny.jpg";
import verde from "public/images/dlaczego.jpg";
import Badge from "./components/Badge";
import Main from "./components/Main";
import About from "./components/About";
export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <div className='p-2.5 bg-gray-800'>
        <Badge title='W czym problem ?' image={whatIsProblem} href='/about' />
        <Badge title='Czym jest projekt biofiliczny?' image={bio} href='/' />
        <Badge title='Dlaczego Verde architektura?' image={verde} href='/' />
      </div>
    </div>
  );
}
