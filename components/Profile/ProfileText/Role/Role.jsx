import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Role() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const roles = [
            '<span style="color:#bebff6">AI/ML Engineer</span>',
            '<span style="color:#d68888">PHP Full Stack Developer</span>',
            '<span style="color:#79f0fc">Generative AI Enthusiast</span>',
            '<span style="color:#f3d18b">Open Source Contributor</span>',
            '<span style="color:#bebff6">Full Stack Developer</span>',
        ];

        typed.current = new Typed(el.current, {
            strings: roles,
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            cursorChar: "|",
        });

        // Cleanup: destroy instance on unmount to prevent duplicate cursors
        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };
    }, []);

    return <span ref={el}></span>
}

export default Role
