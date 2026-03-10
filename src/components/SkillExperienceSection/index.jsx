import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";
import experiences from "../../data/experiences";


import {
    FaPython,
    FaGitAlt,
    FaReact,
    FaDocker,
    FaDatabase,
} from "react-icons/fa";

import {
    SiStreamlit,
    SiPytorch,
    SiTensorflow,
    SiScikitlearn,
    SiPostgresql,
    SiNumpy,
    SiPandas,
    SiFastapi,
    SiLangchain
    
} from "react-icons/si";


// Array containing skills icons ie. Docker, Tensorflow, Pytorch,SQL,PowerBI, Streamlit, Scickitlearn, numpy, Matplotlib
const skills=[
    {name:"Docker", icon:<FaDocker className="text-blue-500"/>},
    {name:"Git", icon:<FaGitAlt className="text-red-500"/>},
    {name:"Python", icon:<FaPython className="text-yellow-500"/>},
    {name:"React", icon:<FaReact className="text-blue-500"/>},
    {name:"Database", icon:<FaDatabase className="text-white-500"/>},

    {name:"Streamlit", icon:<SiStreamlit className="text-red-700"/>},
    {name:"Pytorch", icon:<SiPytorch className="text-red-500"/>},
    {name:"Tensorflow", icon:<SiTensorflow className="text-blue-500"/>}, 
    {name:"Scikitlearn", icon:<SiScikitlearn className="text-green-500"/>},
    {name:"PostgreSQL", icon:<SiPostgresql className="text-blue-700"/>},
    {name:"Numpy", icon:<SiNumpy className="text-blue-500"/>},
    {name:"Pandas", icon:<SiPandas className="text-green-500"/>},
    {name:"FastAPI", icon:<SiFastapi className="text-green-500"/>},   
    {name:"LangChain", icon:<SiLangchain className="text-green-500"/>},

    
]

const SkillExperienceSection =() => {
    return(
        <section className="scroll-mt-24 min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-semibold text-center">
                Skills & Experience
            </h2>
            <h3 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
                What I do & Where I've Been
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/*Skills*/}
                <div>
                    <h4 className="text-2xl px-9 text-center font-semibold mb-4">Skills</h4>
                    <div className="grid grid-cols-3 gap-6">
                        {/*Using map function to iterate over the skills array*/}
                        {skills.map((skills, idx) =>(
                            <SkillCard
                                key={idx}
                                icon={skills.icon}
                                name={skills.name}
                            />
                        ))}
                    </div>
                </div>

                {/*Experience Timeline*/} 
                <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
                    <h4 className="text-2xl font-semibold mb-4">Experience</h4>
                    {experiences.map((exp, idx) => (
                        <ExperienceItem
                            key={idx}
                            title={exp.title}
                            company={exp.comapny}
                            years={exp.years}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillExperienceSection