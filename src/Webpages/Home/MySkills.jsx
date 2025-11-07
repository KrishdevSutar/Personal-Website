import { useEffect, useRef } from 'react';
import data from "../../data/index.json";

// export default function MySkills (){
//     return(
//         <section className="skills--section" id="mySkills">
//             <div className="portfolio--container">
//                 <p className="section--title"> My Skills</p>
//                 <h2 className="skills--section--heading">My Expertise</h2>
//             </div>
//             <div className="skills--section--container">
//                 {data?.skills?.map((item, index) => (
//                 <div key={index} className="skills--section--card">
//                     <div className="skills--section--img">
//                         <img src={item.src} alt="Product Chain"/>
//                     </div>
//                     <div className="skills--section--card--content">
//                         <h3 className="skills--section--title">{item.title}</h3>
//                         {/*<p className="skills--section--description">{item.description}</p>*/}
//                     </div>
//                 </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

export default function MySkills() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        let scrollPosition = 0;
        const scrollSpeed = 1; // Adjust speed (pixels per frame)
        
        const scroll = () => {
            scrollPosition += scrollSpeed;
            
            // Reset scroll when reaching the end of first set
            const maxScroll = scrollContainer.scrollWidth / 2;
            if (scrollPosition >= maxScroll) {
                scrollPosition = 0;
            }
            
            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        // Start scrolling
        animationFrameId = requestAnimationFrame(scroll);

        // Pause on hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrameId);
        };
        
        const handleMouseLeave = () => {
            animationFrameId = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
                scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // Duplicate items for seamless infinite loop
    const duplicatedSkills = [...(data?.skills || []), ...(data?.skills || []), ...(data?.skills || [])];

    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            
            <div 
                ref={scrollRef}
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                    gap: '42.6px',
                    padding: '50px 0',
                    width: '100%',
                    scrollBehavior: 'auto'
                }}
            >
                {duplicatedSkills.map((item, index) => (
                    <div 
                        key={index} 
                        className="skills--section--card"
                        style={{
                            minWidth: '300px',
                            flexShrink: 0
                        }}
                    >
                        <div className="skills--section--img">
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}