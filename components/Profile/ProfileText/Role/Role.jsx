import {useEffect} from 'react'
import Typed from 'typed.js'

function Role() {

    const roles = [ '<span style="color:#bebff6">AI/ML Engineer</span>',
                    '<span style="color:#d68888">PHP Full Stack Developer</span>',
                    '<span style="color:#79f0fc">Generative AI Enthusiast</span>',
                    '<span style="color:#f3d18b">Open Source Contributor</span>',
                    '<span style="color:#bebff6">Full Stack Developer</span>',
                ]

    useEffect(() => {
        const options = {
            strings: roles,
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            cursorChar: "|",
        };
        let typed = new Typed('#role', options);
    }, [])

    return (<span id="role"></span>)
}

export default Role
