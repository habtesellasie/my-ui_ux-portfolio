import { skills } from '@/data';

const Skills = () => {
  return (
    <section>
      <div className='mt-2'>
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className=''>
            <h2 className='text-2xl font-bold mb-2 sticky z-50 top-0 py-2 bg-white'>
              Key Skills
            </h2>
            <div className='flex flex-wrap gap-2'>
              {skill.ui_ux_skills.map((ui_ux_skill, i) => (
                <span
                  key={i}
                  className='bg-black/60 text-sm text-white px-4 py-1 rounded'
                >
                  {ui_ux_skill}
                </span>
              ))}
            </div>
            <h2 className='text-2xl font-bold mb-2 sticky z-50 top-0 py-2 bg-white mt-4'>
              Software Skills
            </h2>
            <div className='flex flex-wrap gap-2'>
              {skill.softwareSkills.map((softwareSkill, i) => (
                <span
                  key={i}
                  className='bg-black/60 text-sm text-white px-4 py-1 rounded'
                >
                  {softwareSkill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
