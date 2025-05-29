import {useState,useEffect} from 'react'
import styles from '../../styles/Navbar.module.css';
import smoothScroll from '../../utils/smoothScroll.js'

function Navbar() {    
    //function for smooth scroll
    function linkClicked(e) {
        e.preventDefault();

        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;

        window.scrollTo(scrollX, scrollY);
        return smoothScroll(e.target.title)
    }

    //State and function to handle the transparency of navbar
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
        let paddingVar = 30 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar * 0.1;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);


    //state and Function to handle the toggling of navbar
    const [open,setOpen] = useState(false)
    const [right,setRight] = useState('-350px')
    let toggleNavbar = ()=>{
        console.log(open)
        if(open){
            setRight('-350px')
        }else{
            setRight('0px')
        }
        setOpen(!open);
    }

    return (
        <nav className={styles.nav} id="navbar" style={{background: `rgba(0, 0, 0, ${backgroundTransparacy})`,boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`}} >
            <span>
                <p>
                    Satkuri Kailash
                </p>
            </span>
            <button className={styles.hamburger} type="button" onClick={toggleNavbar} ><i className="fas fa-bars fa-xxl"></i></button>
            <ul id="nav-list" style={{right: right}} >
                <li><a onClick={linkClicked} title="/#profile" className="sections"><i className="fas fa-user-circle hidden_in_desktop"></i> Profile</a></li>
                <li><a onClick={linkClicked} title="/#about" className="sections"><i className="fas fa-layer-group hidden_in_desktop"></i> About Me</a></li>
                <li><a onClick={linkClicked} title="/#skills" className="sections"><i className="fas fa-code hidden_in_desktop"></i> Skills</a></li>
                <li><a onClick={linkClicked} title="/#experience" className="sections"><i className="fas fa-building hidden_in_desktop"></i> Experience</a></li>
                <li><a onClick={linkClicked} title="/#projects" className="sections"><i className="fas fa-cubes hidden_in_desktop"></i> Projects</a></li>
                <li><a onClick={linkClicked} title="/#blogs" className="sections"><i className="fas fa-feather-alt hidden_in_desktop"></i> Blogs</a></li>
                <li><a onClick={linkClicked} title="/#contact" className="sections"><i className="fas fa-id-card hidden_in_desktop"></i> Contact Me</a></li>
            </ul>
        </nav>
        
    )
}

export default Navbar
