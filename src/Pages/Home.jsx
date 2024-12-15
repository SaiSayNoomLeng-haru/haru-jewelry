import classNames from "classnames";
import { memo, useCallback, useEffect, useRef } from "react"
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from '../UtilityComponents/ProductCard/ProductCardIndex';
import ProductCardVertical from "../UtilityComponents/ProductCardVertical";
import Button from "../UtilityComponents/Button";

export async function loader(){
    
    return null;
}

const Home = () => {
    const textRef = useRef([]);

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
        'grid p-3 gap-5',
        
    )

    const heroSection = classNames(
        'grid gap-2',
        'md:grid-cols-2'
    )

    const homeSlideshow = classNames(
        'grid p-5 overflow-hidden',
        'md:grid-cols-2'
    )

    const hero2 = classNames(
        'flex flex-col justify-between my-2 px-2',
        'md:flex-row'
    )

    const catalogueSession = classNames(
        'flex flex-col gap-5 justify-center items-center overflow-x-hidden'
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
                    <img 
                        ref={assignRef(4)} 
                        src="/assets/images/hero1.png" 
                        alt="" 
                        className="relative z-50 w-[150px] mt-5"
                        loading="lazy" />
                    <img 
                        ref={assignRef(5)} 
                        src="/assets/images/hero2.png" 
                        alt="" 
                        className="relative z-50 w-[150px]"
                        loading="lazy" />
                    <img 
                        ref={assignRef(6)} 
                        src="/assets/images/hero3.png" 
                        alt="" 
                        className="relative z-50 w-[150px]"
                        loading="lazy" />
                    <img 
                        ref={assignRef(7)} 
                        src="/assets/images/hero4.png" 
                        alt="" 
                        className="relative z-50 w-[150px]"
                        loading="lazy" />
                  </div>
                    <div className="absolute inset-0 z-0">
                        <div 
                             ref={assignRef(8)} 
                        className="bg-custom-accent absolute top-0 right-0 left-[10%] bottom-0 flex  items-center overflow-hidden">
                            <img 
                                src="/assets/images/ring-sketch.png" 
                                alt="" 
                                className="mix-blend-multiply -rotate-45 z-10 object-cover"
                                ref={assignRef(25)}/>
                        </div>
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

            <div className={homeSlideshow}>
                <div className="relative p-3">
                    <img 
                        src="/assets/images/hero1.png" 
                        alt=""
                        className="relative z-20"/>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-[80%] bg-custom-accent z-10"></div>
                </div>
                <div className="bg-slate-200 p-2 flex flex-col justify-center items-center gap-4">
                    <h2 className="text-fs-500 font-semibold">Engagement Ring</h2>
                    <p>We've Several options for your Engagement RIngs: diamond, ruby, jade, sapphire   </p>
                    <p> / 04</p>
                    <div className="flex gap-2">
                        <button
                            className="border py-2 px-3 border-black rounded-sm active:text-custom-dark-orange active:border-custom-dark-orange"
                            >
                                <FaArrowLeft />
                        </button>
                        <button
                            className="border py-2 px-3 border-black rounded-sm active:text-custom-dark-orange active:border-custom-dark-orange"
                            >
                                <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className={catalogueSession}>
                <p className="font-semibold text-center">Our Newest Products</p>
                <div className="flex gap-3">
                    <ProductCard>
                        <ProductCard.Image imgUrl='/assets/images/hero1.png' />
                        <ProductCard.Content />
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image imgUrl='/assets/images/hero1.png' />
                        <ProductCard.Content />
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image imgUrl='/assets/images/hero1.png' />
                        <ProductCard.Content />
                    </ProductCard>
                </div>
            </div>

            <div className={hero2}>
                <div className="flex-none">
                    <img 
                        src="/assets/images/homePage/photo-2.jpg" 
                        alt="haru jewelry home page image"
                        className="max-w-[300px] "
                        loading="lazy" />
                </div>

                <div className="flex flex-col justify-center p-5 items-start gap-5 bg-custom-accent flex-1">
                    <p 
                        className="text-fs-300">
                            Summer Collection
                    </p>
                    <p 
                        className="text-fs-500 font-semibold">
                            Up to 10% on Engagement Rings
                    </p>
                    <Link 
                        to='catalogue'
                        className="font-normal py-3 px-5 border border-black text-end flex gap-2 items-center justify-end">
                            Shop Now
                            <FaArrowRight />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <h1>Buy a Ring at the best price</h1>
                <ProductCardVertical imgUrl='/assets/images/hero2.png' />
            </div>

            <div className="bg-custom-accent flex justify-center items-center flex-col md:flex-row">
                <form 
                    action=""
                    className="flex flex-col gap-3">
                    <h1>Subscribe to stay up with the best propsitions!</h1>

                    <div className="flex justify-center gap-1">
                        <input 
                            type="text"
                            placeholder="Email Address"
                            className="bg-transparent border border-black indent-2 rounded-sm placeholder:text-fs-300 outline-none w-full py-2 focus:border-custom-dark-orange" />
                        <Button className="border border-black !rounded-none px-2">
                            <FaArrowRight />
                        </Button>
                    </div>
                    
                    <div className="flex gap-2 items-center text-fs-300">
                        <input 
                            type="checkbox"
                            className="accent-custom-pale-red" />
                        <label>Accept <span className="underline"> User's Terms & Condition</span></label>
                    </div>

                </form>
                <img src="./assets/images/hero.png" alt=""  className="max-w-[80%]"/>
            </div>
       </section>
    )
}

export default memo(Home)