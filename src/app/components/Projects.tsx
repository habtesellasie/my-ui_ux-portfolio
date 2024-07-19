import { projects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { CgLink } from 'react-icons/cg';

const Projects = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold mt-4 sticky z-50 top-0 py-2 bg-white'>
        Projects
      </h2>
      {projects.map((project, projectIndex) => {
        return (
          <div key={projectIndex} className='mb-4'>
            <h3 className='text-xl font-bold inline-block w-full bg-white sticky top-[2.9375rem] pt-2 pb-4'>
              {project.name}
            </h3>
            <Image
              priority
              src={project.project_thumbnail}
              alt={project.name}
              width={400}
              height={300}
              className='w-full border-[1px] border-black rounded'
            />
            <p className='my-4 text-pretty text-gray-500'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2 mt-2'>
              {project.used_things.map((thing, index) => {
                return (
                  <div
                    key={index}
                    className='bg-black/60 text-sm text-white px-4 py-1 rounded'
                  >
                    {thing}
                  </div>
                );
              })}
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <Link
                href={project.prototype_link}
                target='_blank'
                className='transition text-blue-400 underline underline-offset-2 hover:text-blue-500 flex items-center gap-1'
              >
                Prototype <CgLink size={20} />
              </Link>
              <Link
                href={project.design_file_link}
                target='_blank'
                className='transition text-blue-400 underline underline-offset-2 hover:text-blue-500 flex items-center gap-1'
              >
                Figma file <CgLink size={20} />
              </Link>
              {project.case_study && (
                <Link
                  href={project.case_study}
                  target='_blank'
                  className='transition text-blue-400 underline underline-offset-2 hover:text-blue-500 flex items-center gap-1'
                >
                  Case Study <CgLink size={20} />
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
