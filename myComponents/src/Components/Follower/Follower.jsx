import './follower.css';
import { useRef, useEffect } from 'react';

const Follower = () => {
    const followerRef = useRef();

    useEffect(() => {
        document.body.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            let cursor = getComputedStyle(event.target).cursor;
            
            if (followerRef.current) {
                let follower = followerRef.current;
                follower.animate({
                    left : `${clientX}px`,
                    top : `${clientY}px`,
                }, {duration: 1000, fill: "forwards"});
                
                if(cursor == "pointer"){
                    follower.classList.add("grow");
                }
                else{
                    follower.classList.remove("grow");
                }
            }
        })
    }, []);

    return (
        <>
            <div id="follower" ref={followerRef}></div>
        </>
    )
}

export default Follower;
