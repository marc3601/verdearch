import whatIsProblem from "public/images/problem.jpeg";
import bio from "public/images/biofiliczny.jpg";
import verde from "public/images/dlaczego.jpg";
import Badge from "./components/Badge";
import Main from "./components/Main";
export default function Home() {
  return (
    <div>
      <Main />
      <div className='pt-2.5	'>
        <Badge title='W czym problem ?' image={whatIsProblem} />
        <Badge title='Dlaczego VERDE Arch ?' image={verde} side='left' />
        <Badge title='Czym jest projekt biofiliczny ?' image={bio} />
      </div>
    </div>
  );
}
