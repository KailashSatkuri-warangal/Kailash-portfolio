import Image from "next/image"
import styles from "../styles/Skills.module.css"
import {
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiMongodb,
    SiNodeDotJs,
    SiPython,
    SiReact,
    SiGit,
    SiGithub,
    SiTypescript,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiExpress,
    SiTailwindcss,
    SiAmazonaws,
    SiMicrosoftazure
} from "react-icons/si";

import {
    FaNodeJs
} from "react-icons/fa"

const data = [
    { name: 'JavaScript', icon: SiJavascript, options: { color: 'yellow' } },
    { name: 'CSS3', icon: SiCss3, options: { color: '#1572B6' } },
    { name: 'HTML5', icon: SiHtml5, options: { color: '#E34F26' } },
    { name: 'MongoDB', icon: SiMongodb, options: { color: '#47A248' } },
    { name: 'NodeJS', icon: FaNodeJs, options: { color: '#339933' } },
    { name: 'Python', icon: SiPython, options: { color: '#3776AB' } },
    { name: 'React', icon: SiReact, options: { color: '#61DAFB' } },
    { name: 'Git', icon: SiGit, options: { color: '#F05032' } },
    { name: 'GitHub', icon: SiGithub, options: { color: 'white' } },
    { name: 'TypeScript', icon: SiTypescript, options: { color: '#3178C6' } },
    { name: 'Vercel', icon: SiVercel, options: { color: 'white' } },
    { name: 'C++', icon: SiCplusplus, options: { color: '#00599C' } },
    { name: 'Canva', icon: SiCanva, options: { color: '#00C4CC' } },
    { name: 'MySQL', icon: SiMysql, options: { color: '#4479A1' } },
    { name: 'Express', icon: SiExpress, options: { color: 'white' } },
    { name: 'Tailwind CSS', icon: SiTailwindcss, options: { color: '#06B6D4' } },
    { name: 'AWS', icon: SiAmazonaws, options: { color: '#FF9900' } },
    { name: 'Azure', icon: SiMicrosoftazure, options: { color: '#0089D6' } }
];

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));
