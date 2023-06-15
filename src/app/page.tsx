'use client';
import { Experience, ExperienceProps } from '@/components/Experience';
import { Project } from '@/components/Project';

import { GitHub, LinkedIn, DescriptionOutlined } from '@mui/icons-material';

import dynamic from 'next/dynamic';

function Home() {
  const experiences: ExperienceProps[] = [
    {
      organization: 'Null Bug',
      organizationLink: 'https://nullbug.dev/',
      jobRole: 'Desenvolvedor front-end - Pleno',
      period: '2021 - atualmente',
      description:
        'A Null Bug é uma software house onde eu atuei em diversos projetos, tais como um aplicativo para delivery, um sistema de open banking e por fim um sistema de automação de tarefas.',
    },
    {
      organization: 'Ellon',
      organizationLink: 'https://somosellon.com/',
      jobRole: 'Desenvolvedor front-end - Júnior',
      period: '2021 - 2021',
      description:
        'Criei um sistema de monitoramento de erros dos nossos sistemas e paricipei da migração de um sistema Delphi desktop para a web, utilizando ReactJS.',
    },
    {
      organization: 'Parseint',
      organizationLink: 'https://parseint.com.br/',
      jobRole: 'Desenvolvedor full-stack - Estagiário',
      period: '2020 - 2021',
      description:
        'A Parseint é uma empresa onde atuei num cardápio digítal, em um sistema de gerenciamento de restaurante e um PDV dos restaurante',
    },
  ];

  const iconSx = { width: '24px', height: '24px' };

  return (
    <div className='inset-0 lg:absolute'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
              <h1 className='text-5xl font-bold text-gray-200'>Roger Kobs</h1>

              <h2 className='text-xl mt-2 mb-4 font-bold text-gray-200'>
                Desenvolvedor Front-End
              </h2>

              <p className='w-2/3'>
                Eu desenvolvo soluções práticas e eficazes para a web.
              </p>

              <nav className='flex-col my-16'>
                <ul>
                  <li>
                    <a href='#about'>Sobre</a>
                  </li>
                  <li>
                    <a href='#experiences'>Experiências</a>
                  </li>
                  <li>
                    <a href='#projects'>Projetos</a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className='flex space-x-4'>
              <li>
                <a
                  href='https://github.com/RogerKobs'
                  target='_blank'
                  title='GitHub'
                >
                  <GitHub sx={iconSx} />
                </a>
              </li>

              <li>
                <a
                  href='https://www.linkedin.com/in/roger-gabriel-schneider-kobs-24608218b/'
                  target='_blank'
                  title='LinkedIn'
                >
                  <LinkedIn sx={iconSx} />
                </a>
              </li>

              <li>
                <a href='' target='_blank' title='Currículo'>
                  <DescriptionOutlined sx={iconSx} />
                </a>
              </li>
            </ul>
          </header>

          <main className='pt-16 lg:w-1/2 lg:py-16'>
            <section
              id='about'
              className='mb-8 scroll-mt-8 md:mb-16 lg:mb-28 lg:scroll-mt-16'
            >
              <strong className='text-xl text-gray-400'>Sobre mim</strong>

              <div className='space-y-4 mt-4'>
                <p>
                  Em torno de 2018, enquanto tomava café, minha cabeça se encheu
                  de zeros e uns, e tive um insight para começar no mundo da
                  tecnologia.
                </p>

                <p>
                  Graças a isso, em 2020, decidi mergulhar de cabeça no mundo da
                  programação. Iniciei uma graduação em Sistemas de Informação e
                  trabalhei em algumas startups voltadas para a gestão de
                  restaurantes, bem como em soluções de PDV (Ponto de Venda) e
                  em uma software house.
                </p>

                <p>
                  Quando não estou trabalhando, gosto muito de jogar e conversar
                  com amigos e familiares.
                </p>
              </div>
            </section>

            <section
              id='experiences'
              className='mb-8 scroll-mt-16 md:mb-16 lg:mb-28 lg:scroll-mt-16'
            >
              <strong className='text-xl text-gray-400'>Experiências</strong>

              <div className='space-y-4 mt-4'>
                {experiences.map((experience) => (
                  <Experience
                    key={experience.organization}
                    organization={experience.organization}
                    organizationLink={experience.organizationLink}
                    jobRole={experience.jobRole}
                    period={experience.period}
                    description={experience.description}
                  />
                ))}
              </div>
            </section>

            <section
              id='projects'
              className='scroll-mt-16 md:mb-16 lg:mb-28 lg:scroll-mt-16'
            >
              <strong className='text-xl text-gray-400'>Projetos</strong>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                {new Array(4).fill(1).map((_, index) => (
                  <Project key={index} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
