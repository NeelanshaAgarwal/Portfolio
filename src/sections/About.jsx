import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { achievements,technologies } from '../constants';
import BallCanvas from '../components/Ball.jsx';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};


const AchievementsCard = ({ achievement }) => {
  
  return (
    <VerticalTimelineElement
      contentStyle={{
         background: 'linear-gradient(#fff2, transparent)',
         color: '#fff',
      }}
      contentArrowStyle={{ borderRight: 'rgba(255, 255, 255, 0.05)' }}
      date={achievement.duration}
      iconStyle={{ background: achievement.iconBg }}
      icon={
        <div className='flex items-center justify-center w-full h-full'>
          <img
            src={achievement.icon}
            alt={achievement.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{achievement.name}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}> 
          {achievement.cname}
        </p>
      </div>

      <ul className='mt-5 ml-5 space-y-2 list-disc'>
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {achievement.title}
        </li>
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {achievement.pos}
        </li>
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          <span>
            Click here to 
            <a href={achievement.certificate} target="_blank" rel="noopener noreferrer" className='mx-1 font-semibold underline'>
              View Certificate
            </a>
          </span>
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};


const About = () => {
  return (
    <section className='my-20 c-space' id='about'>
      <div className="px-4 mx-auto">
        <motion.h2
          className='text-4xl font-semibold text-center text-gray_gradient font-generalsans'
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          About Me
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 gap-5 px-4 mx-auto mt-10 lg:grid-cols-2">
        <motion.div
          className="grid-container"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='text-center grid-subtext sm:text-xl'>
            <p>
            I am a passionate and highly motivated software engineer specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. Currently pursuing B.Tech in AI and ML at SRM Institute of Science and Technology, I am focused on building innovative solutions through technology. My expertise spans a wide range of languages and frameworks, including Python, C++, ReactJS, NodeJS, Express, and more. 
            </p>
            <p className='p-7'>
              On this website, you'll find a collection of my projects, including web applications, machine learning models, and personal contributions to the tech community. Whether you’re looking for a collaborator or a developer to bring your ideas to life, I’d love to connect and explore new opportunities.
            </p>
            <p>
              Explore my work, and let’s build something amazing together!
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid-container"
          variants={fadeIn("left", "spring", 1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <img src="./assets/Illustration.png" alt="grid-2" className="w-full sm:h-[350px] h-fit object-contain lg:h-[400px]" />
          <div>
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext sm:text-xl">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid-container"
          variants={fadeIn("right", "spring", 1.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <img src="./assets/Illustration3.png" alt="grid-2" className="w-full sm:h-[350px] h-fit object-contain lg:h-[400px]" />
          <p className="grid-headtext">Education</p>
          <p className="grid-subtext sm:text-xl">
            B.Tech in AI & ML <br />
            SRM Institute of Science and Technology <br />
            Year: 2021 - 2025 <br/>
            CGPA: 8.98 <br/>
            (current)
          </p>
        </motion.div>
        <motion.div
        className="grid-container"
        variants={fadeIn("left", "spring", 2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        >
          <img src="./assets/Illustration2.png" alt="grid-2" className="w-full sm:h-[350px] h-fit object-contain lg:h-[400px]" />
          <div>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open('https://github.com/NeelanshaAgarwal', '_blank')}
              >
                <img
                src="./assets/github.png"
                alt="GitHub"
                className="w-16 h-16"
                />
                <p className="mt-2 grid-subtext">GitHub</p>
              </div>
              <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/neelansha', '_blank')}
              >
                <img
                src="./assets/linkedin.png"
                alt="LinkedIn"
                className="w-16 h-16"
                />
                <p className="mt-2 grid-subtext">LinkedIn</p>
              </div>
              <div 
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <img
                src="./assets/resume.png"
                alt="Resume"
                className="w-16 h-16"
                />
                <p className="mt-2 grid-subtext">Resume</p>
              </div>
              <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
              navigator.clipboard.writeText('neelanshaagarwal.mzn@gmail.com');
              alert('Email copied to clipboard!');
              }}
              >
                <img
                src="./assets/gmail.png"
                alt="Copy Email"
                className="w-16 h-16"
                />
                <p className="mt-2 grid-subtext">Copy Email</p>
              </div>
            </div>
            <p className="gap-8 mt-10 grid-headtext">Connect With Me</p>
            <p className="grid-subtext sm:text-xl">
              From here you can download my resume or connect with me on LinkedIn and GitHub or send me an email.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="px-4 mx-auto">
        <motion.h2
          className='my-20 text-4xl font-semibold text-center text-gray_gradient font-generalsans'
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          Achievements
        </motion.h2>
        <div className="flex flex-col mt-20">
          <VerticalTimeline>
            {achievements.map((achievement) => (
              <AchievementsCard key={achievement.id} achievement={achievement} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="px-4 mx-auto mt-20">
        <motion.h2
        className='my-20 text-4xl font-semibold text-center text-gray_gradient font-generalsans'
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
      >
        Tech Skills
        </motion.h2>
        <Tech />
      </div>
    </section>
  );
};

export default About;

