// export default function MainSection() {
//     return (
//         <section id="mainSection" className="main--section">
//             <div className="main--section--content--box">
//                 <div className="main--section--content">
//                     <p className="section--title"> Hi, I am Krish</p>
//                     <h1 className="main--section--title">
//                         <span className="main--section-title--color">Full Stack </span>{" "}
//                         <br />
//                         Developer
//                     </h1>
//                     <p className="main--section-description">
//                         I’m a passionate and results-driven software developer with hands-on experience in backend and full-stack development, cloud infrastructure, and enterprise systems. During my time at TATA Consulting Services, I supported the BMO Investorline platform, resolving technical incidents, optimizing cloud performance using AWS, and enhancing data security through Java-based solutions.
//                         <br />
//                         I hold AWS Developer Associate, Cloud Practitioner, and Solutions Architect certifications, and bring a strong foundation in Java, Spring Boot, React, Node.js, and modern cloud technologies. I’m continuously seeking opportunities to apply my skills in building scalable, secure, and impactful software solutions.
//                     </p>
//                 </div>
//                 <button className="btn btn-primary">Touch Me</button>
//             </div>
//             <div className="main--section--img">
//                 <img src="./imgs/image.png" alt="main-section" />
//             </div>

//         </section>
//     );
// }
import { useState, useEffect } from 'react';

export default function MainSection() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const roles = [
        'Full Stack Developer',
        'Web Developer',
        'Cloud Architect',
        'Problem Solver'
    ];

    useEffect(() => {
        const currentRole = roles[currentIndex];
        const typingSpeed = isDeleting ? 50 : 150;
        
        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting]);

    return (
        <section id="mainSection" className="main--section">
            <div className="main--section--content--box">
                <div className="main--section--content">
                    <p className="section--title" style={{ 
                        animation: 'fadeInUp 0.8s ease-out',
                        opacity: 1 
                    }}>
                        👋 Hi, I am Krish
                    </p>
                    <h1 className="main--section--title" style={{ 
                        animation: 'fadeInUp 1s ease-out 0.2s backwards',
                        minHeight: '120px'
                    }}>
                        <span className="main--section-title--color" style={{
                            background: 'linear-gradient(135deg, #5e3bee 0%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {displayText}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '3px',
                            height: '1em',
                            backgroundColor: '#5e3bee',
                            marginLeft: '5px',
                            animation: 'blink 1s infinite',
                            verticalAlign: 'middle'
                        }}>|</span>
                    </h1>
                    <p className="main--section-description" style={{ 
                        animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
                    }}>
                        I'm a passionate and results-driven software developer with hands-on experience in backend and full-stack development, cloud infrastructure, and enterprise systems. During my time at TATA Consulting Services, I supported the BMO Investorline platform, resolving technical incidents, optimizing cloud performance using AWS, and enhancing data security through Java-based solutions.
                        <br /><br />
                        I hold AWS Developer Associate, Cloud Practitioner, and Solutions Architect certifications, and bring a strong foundation in Java, Spring Boot, React, Node.js, and modern cloud technologies. I'm continuously seeking opportunities to apply my skills in building scalable, secure, and impactful software solutions.
                    </p>
                </div>
                <button 
                    className="btn btn-primary" 
                    style={{ 
                        animation: 'fadeInUp 1.4s ease-out 0.6s backwards',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(94, 59, 238, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    Get In Touch
                </button>
            </div>
            <div className="main--section--img" style={{ 
                animation: 'fadeInRight 1s ease-out 0.3s backwards',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #5e3bee20 0%, #8b5cf620 100%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 6s ease-in-out infinite',
                    zIndex: 0
                }}></div>
                <img 
                    src="./imgs/image.png" 
                    alt="main-section" 
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }}
                />
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes blink {
                    0%, 49% {
                        opacity: 1;
                    }
                    50%, 100% {
                        opacity: 0;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    33% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    66% {
                        transform: translateY(10px) translateX(-10px);
                    }
                }
            `}</style>
        </section>
    );
}