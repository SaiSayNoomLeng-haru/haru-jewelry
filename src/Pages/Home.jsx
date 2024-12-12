import classNames from "classnames";
import { memo, useCallback, useEffect, useRef } from "react"
import CallToAction from "../UtilityComponents/CallToAction";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";


export async function loader(){
    
    return null;
}

const Home = () => {
    const textRef = useRef([])

    useEffect(() => {
        const element = textRef.current;
        const timeOuts = [];
        element.forEach((el, i) => {
           if(el){
            el.style.transform = 'translateY(-100px) rotate(100deg)';
            el.style.opacity = 0;
           
            const timeOut = setTimeout(() => {
                el.style.transform = 'translateY(0) rotate(0)';
                el.style.opacity = 1;
                el.style.transition = `all 500ms ease-in-out ${i * 0.1}s`
            }, i * 100)
            timeOuts.push(timeOut)
           }
        });

        return () => timeOuts.forEach((timeOut) => clearTimeout(timeOut))
    }, [])

    const assignRef = useCallback((index) => (
        el => textRef.current[index] = el
    ), [textRef.current])

    // Classes and Styles
    const homeClass = classNames(
        'grid p-3',
        
    )

    const heroSection = classNames(
        'grid gap-2',
        'md:grid-cols-2'
    )
    return(
       <section className={homeClass}>
            <div className={heroSection}>
                <div className="flex flex-col justify-center leading-relaxed">
                    <p 
                        ref={assignRef(0)}
                        className="uppercase">
                            Special collection
                    </p>

                    <h1 
                        ref={assignRef(1)}
                        className="text-fs-700 capitalize"
                        >
                            new diamond
                    </h1>


                    <h1 
                        ref={assignRef(2)}
                        className="text-fs-700 capitalize custom-line self-center">
                        edition of rings
                    </h1>
                    <Link 
                        ref={assignRef(3)}
                        to='catalogue'
                        className="font-normal py-3 px-5 border border-black text-end md:self-end flex gap-2 items-center justify-end">
                            Shop Now
                            <FaArrowRight />
                    </Link>
                </div>

                <div className="relative">
                    <div className="flex flex-col">
                    <img ref={assignRef(4)} src="/assets/images/hero1.png" alt="" className="relative z-50 w-[150px] mt-5" />
                    <img ref={assignRef(5)} src="/assets/images/hero2.png" alt="" className="relative z-50 w-[150px]" />
                    <img ref={assignRef(6)} src="/assets/images/hero3.png" alt="" className="relative z-50 w-[150px]" />
                    <img ref={assignRef(7)} src="/assets/images/hero4.png" alt="" className="relative z-50 w-[150px]" />
                  </div>
                    <div className="absolute inset-0 z-0">
                        <div 
                             ref={assignRef(8)} 
                        className="bg-custom-accent absolute top-0 right-0 left-[10%] bottom-0 "></div>
                        <p 
                        className="tracking-[.5em] -rotate-0 origin-bottom-right font-accent font-bold">
                            <span ref={assignRef(9)} >H</span>
                            <span ref={assignRef(10)} >a</span>
                            <span ref={assignRef(11)} >r</span>
                            <span ref={assignRef(12)} >u</span>
                            <span ref={assignRef(13)} >'</span>
                            <span ref={assignRef(14)} >s</span>
                            <span ref={assignRef(15)} >C</span>
                            <span ref={assignRef(16)} >o</span>
                            <span ref={assignRef(17)} >l</span>
                            <span ref={assignRef(18)} >l</span>
                            <span ref={assignRef(19)} >e</span>
                            <span ref={assignRef(20)} >c</span>
                            <span ref={assignRef(21)} >t</span>
                            <span ref={assignRef(22)} >i</span>
                            <span ref={assignRef(23)} >o</span>
                            <span ref={assignRef(24)} >n</span>
                        </p>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default memo(Home)