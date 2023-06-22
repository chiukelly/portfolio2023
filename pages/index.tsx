import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
// import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Experience, Skill, Project, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'
import { ArrowUpCircleIcon} from "@heroicons/react/24/solid";


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const inter = Inter({ subsets: ['latin'] })

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    // background color, ALL white text, height of screen
    <div className='bg-[hsl(0,0%,0%)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-rounded-md scrollbar-thumb-[hsl(0,1%,29%)]'>
      <Head>
        <title> Portfolio </title>
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section> */}

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe socials={socials}/>
      </section>

      {/* Click contact icon to move to the top of the page */}
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon className='h-10 w-10 rounded-full text-[#B0D8A4] filter grayscale hover:grayscale-0 cursor-pointer'> </ArrowUpCircleIcon>
          </div>
        </footer>
          
      </Link>

    </div>
  )
}

export default Home;

// fetch data, build page, then cache (not rebuilding every time someone requests)
// revalidate flag: keep sharing cache page for '10' seconds
// server side rendering per request: getServerSideProps instead
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  }
}
