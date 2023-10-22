import whatIsProblem from "public/images/problem.jpeg";
import bio from "public/images/biofiliczny.jpg";
import verde from "public/images/dlaczego.jpg";
import konsultacja from "public/images/konsultacja.jpg";
import korzysci from "public/images/korzysci.jpeg";
import blog from "public/images/blog.jpg";
import projects from "public/images/projects.jpg";
import about from "public/images/about_me.jpg";
import Badge from "../components/Badge";
import MainEN from "../components/MainEN";
import AboutEN from "../components/AboutEN";
import OfferLink from "../components/OfferLink";
export default function Home() {
  return (
    <div>
      <MainEN />
      <AboutEN />
      <div className='p-2.5 bg-gray-800'>
        <Badge
          title='WHAT IS THE PROBLEM?'
          image={whatIsProblem}
          href='/en/what_problem'
        />
        <Badge
          title='Why VERDE Architektura?'
          image={verde}
          href='/en/why_verde'
        />
        <Badge
          title='What is biophilic design?'
          image={bio}
          href='/en/biophilic'
        />
        <Badge
          title='Design &amp; Consultation'
          image={konsultacja}
          href='/en/design_consultation'
        />
        <Badge
          title='What does it mean for different sectors?'
          image={korzysci}
          href='/en/benefits'
        />
      </div>
      <div className='bg-gray-600'>
        <div className='sm:flex justify-center items-center container w-11/12 2xl:w-3/5 mx-auto py-4'>
          <OfferLink
            title='About me'
            link='/en/about'
            image={about}
            background
            width={300}
          />
          <OfferLink
            title='Gallery'
            link='/galeria'
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
