'use client';
import { skills } from '@/data';
import { motion } from 'framer-motion';

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillsChildVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <section>
      <div>
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <h2 className='text-2xl font-bold mb-2 sticky z-50 top-0 py-2 bg-white'>
              Key Skills
            </h2>
            <motion.div
              className='flex flex-wrap gap-2'
              variants={skillsContainerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {skill.ui_ux_skills.map((ui_ux_skill, i) => (
                <motion.span
                  variants={skillsChildVariants}
                  key={i}
                  className='bg-zinc-200 hover:bg-zinc-300 transition text-sm text-black cursor-pointer px-4 py-1 rounded'
                >
                  {ui_ux_skill}
                </motion.span>
              ))}
            </motion.div>
            <h2 className='text-2xl font-bold mb-2 sticky z-50 top-0 py-2 bg-white mt-4'>
              Software Skills
            </h2>
            <motion.div
              className='flex flex-wrap gap-2'
              variants={skillsContainerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {skill.softwareSkills.map((softwareSkill, i) => (
                <motion.span
                  variants={skillsChildVariants}
                  key={i}
                  className='bg-zinc-200 hover:bg-zinc-300 transition text-sm text-black cursor-pointer px-4 py-1 rounded'
                >
                  {softwareSkill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
