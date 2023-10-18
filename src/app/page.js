import whatIsProblem from "public/images/problem.jpeg";
import bio from "public/images/biofiliczny.jpg";
import verde from "public/images/dlaczego.jpg";
import konsultacja from "public/images/konsultacja.jpg";
import korzysci from "public/images/korzysci.jpeg";
import blog from "public/images/blog.jpg";
import projects from "public/images/projects.jpg";
import about from "public/images/about_me.jpg";
import Badge from "./components/Badge";
import Main from "./components/Main";
import About from "./components/About";
import OfferLink from "./components/OfferLink";
export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <div className='p-2.5 bg-gray-800'>
        <Badge
          title='W czym problem?'
          image={whatIsProblem}
          href='/w_czym_problem'
        />
        <Badge
          title='Dlaczego Verde architektura?'
          image={verde}
          href='/dlaczego-verde'
        />
        <Badge
          title='Czym jest projekt biofiliczny?'
          image={bio}
          href='/biofilia'
        />
        <Badge
          title='Projekt i konsultacja.'
          image={konsultacja}
          href='/projekt_i_konsultacja'
        />
        <Badge
          title='Korzyści dla różnych sektorów.'
          image={korzysci}
          href='/korzysci'
        />
      </div>
      <div className='bg-gray-600'>
        <div className='sm:flex justify-center items-center container w-11/12 2xl:w-3/5 mx-auto py-4'>
          <OfferLink
            title='O mnie'
            link='/'
            image={about}
            background
            width={300}
          />
          <OfferLink
            title='Projekty'
            link='/'
            image={projects}
            background
            width={300}
          />
          <OfferLink
            title='Blog'
            link='/'
            image={blog}
            background
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
