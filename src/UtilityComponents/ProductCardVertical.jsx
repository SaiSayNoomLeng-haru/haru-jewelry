import classNames from "classnames"
import Button from "./Button"
import { FaHeart } from "react-icons/fa"
import CallToAction from "./CallToAction"

export default function ProductCardVertical({imgUrl}){

    const verticalProductCard = classNames(
        'grid md:grid-cols-5 place-items-center'
    )
    return(
        <div className={verticalProductCard}>
            <img src={imgUrl} alt="" width={100} />
            <div className="flex flex-col">
                <p>name</p>
                <p>description</p>
            </div>

            <div>
                <p>Avaialable Size:</p>
            </div>

            <p>$500</p>

            <div className="flex flex-col">
                <div className='flex justify-between gap-2'>
                    <CallToAction desc='Product Detail' linkTo='' className='hover:text-custom-pale-red transition-all' />
                    
                    <Button 
                        className='text-fs-400 px-2 flex-none hover:text-custom-pale-red transition-all duration-300'
                    >
                        <FaHeart />
                    </Button>
                </div>
                <Button 
                        className=' border border-custom-dark-green text-fs-200 px-2  hover:bg-custom-dark-green hover:text-white transition-all duration-300'
                    >Add to Cart
                </Button>
            </div>

        </div>
    )
}