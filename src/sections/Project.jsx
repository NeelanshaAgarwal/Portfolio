import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ project }) => {
    const { title, desc, subdesc, tags, image, source_code_link } = project;

    return (
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
            >
                <div className="max-w-2xl w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
                    <div className="h-[22rem] md:h-[25rem] rounded-xl z-40 overflow-hidden">
                        <div className="relative flex items-center justify-center h-full p-8 overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                <div
                                    onClick={() => window.open(source_code_link, "_blank")}
                                    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
                                >
                                    <img
                                        src="./assets/github.png"
                                        alt="source code"
                                        className="object-contain w-5 h-5"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="grid-headtext">{title}</h3>
                        <p className="mt-2 grid-subtext sm:text-xl">{desc}</p>
                        <p className="mt-2 grid-subtext sm:text-xl">{subdesc}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5 mt-4">
                        {tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Project = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setCurrentProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="my-20 c-space" id='projects'>
            <div className="px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-semibold text-center text-gray_gradient font-generalsans"
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    My Projects
                </motion.h2>
                <div className="flex justify-center mt-10">
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="text-center grid-subtext sm:text-xl"
                    >
                        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </motion.p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-20">
                    <button
                        className="arrow-btn"
                        onClick={() => handleNavigation('previous')}
                    >
                        <img src="./assets/left-arrow.png" alt="left arrow" />
                    </button>
                    <ProjectCard project={projects[currentProjectIndex]} />
                    <button
                        className="arrow-btn"
                        onClick={() => handleNavigation('next')}
                    >
                        <img src="./assets/right-arrow.png" alt="right arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Project;