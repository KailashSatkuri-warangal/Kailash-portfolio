import Image from "next/image"
import styles from "../styles/Skills.module.css"
import {
    SiJavascript,
    SiCss3,
    SiDocker,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiNodeDotJs,
    SiPython,
    SiReact,
    SiSass,
    SiWebpack,
    SiBabel,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGooglecloud,
    SiLinux,
    SiMocha,
    SiJest,
    SiPostgresql,
    SiRedux,
    SiNetlify,
    SiTypescript,
    SiUbuntu,
    SiFirebase,
    SiMarkdown,
    SiWordpress,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiFlask,
    SiDjango,
    SiSolidity,
    SiWeb3Dotjs,
    SiIpfs,
    SiExpress,
    SiEthereum,
    SiGitlab,
    SiTailwindcss,
    SiPostman,
    SiLit,
    SiHasura,
    SiGraphql,
    SiStrapi,
    SiMaterialui,
    SiBitbucket,
    SiShopify,
    SiPolymerproject,
    SiRedis,
    SiGo,
    SiChainlink,
    SiCypress,
    SiChakraui,
    SiOpenZeppelin,
    SiAuth0,
    SiPlaywright
} from "react-icons/si";

import {
    FaCouch,
    FaNodeJs,
    FaHardHat
} from "react-icons/fa"

const data = [{
        name: 'JavaScript',
        icon: SiJavascript,
        options: {
            color: 'yellow'
        }
    },
    {
        name: 'CSS3',
        icon: SiCss3,
        options: {
            color: '#1572B6',
        }
    },
    {
        name: 'Docker',
        icon: SiDocker,
        options: {
            color: '#2496ED'
        }
    },
    {
        name: 'HTML5',
        icon: SiHtml5,
        options: {
            color: '#E34F26'
        }
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        options: {
            color: '#47A248'
        }
    },
    {
        name: 'NodeJS',
        icon: FaNodeJs,
        options: {
            color: '#339933'
        }
    },
    {
        name: 'Python',
        icon: SiPython,
        options: {
            color: '#3776AB'
        }
    },
    {
        name: 'React',
        icon: SiReact,
        options: {
            color: '#61DAFB'
        }
    },
    {
        name: 'Git',
        icon: SiGit,
        options: {
            color: '#F05032'
        }
    },
    {
        name: 'GitHub',
        icon: SiGithub,
        options: {
            color: 'white'
        }
    },
    {
        name: 'GitHub Actions',
        icon: SiGithubactions,
        options: {
            color: '#2088FF'
        }
    },
    {
        name: 'Google Cloud Platform',
        icon: SiGooglecloud,
        options: {
            color: '#4285F4'
        }
    },
    {
        name: 'Linux',
        icon: SiLinux,
        options: {
            color: '#FCC624'
        }
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        options: {
            color: '#3178C6'
        }
    },
    {
        name: 'Ubuntu',
        icon: SiUbuntu,
        options: {
            color: '#E95420'
        }
    },
    {
        name: 'Firebase',
        icon: SiFirebase,
        options: {
            color: '#FFCA28'
        }
    },
    {
        name: 'WordPress',
        icon: SiWordpress,
        options: {
            color: '#21759B'
        }
    },
    {
        name: 'Vercel',
        icon: SiVercel,
        options: {
            color: 'white'
        }
    },
    {
        name: 'C++',
        icon: SiCplusplus,
        options: {
            color: '#00599C'
        }
    },
    {
        name: 'Canva',
        icon: SiCanva,
        options: {
            color: '#00C4CC'
        }
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        options: {
            color: '#4479A1'
        }
    },
    {
        name: 'Flask',
        icon: SiFlask,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Django',
        icon: SiDjango,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Web3',
        icon: SiWeb3Dotjs,
        options: {
            color: '#F16822'
        }
    },
    {
        name: 'Express',
        icon: SiExpress,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Ethereum',
        icon: SiEthereum,
        options: {
            color: '#3C3C3D'
        }
    },
    {
        name: 'CouchDB',
        icon: FaCouch,
        options: {
            color: '#E42528'
        }
    },
    {
        name: 'GitLab',
        icon: SiGitlab,
        options: {
            color: '#FCA121'
        }
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        options: {
            color: '#06B6D4'
        }
    },
    {
        name: 'Material UI',
        icon: SiMaterialui,
        options: {
            color: '#007FFF'
        }
    },
    {
        name: 'Auth0',
        icon: SiAuth0,
        options: {
            color: '#EB5424',
        }
    },
]

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));
