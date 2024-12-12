import { memo } from "react"
import CallToAction from '../UtilityComponents/CallToAction'

const Career = () => {
    return(
        <section className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-fs-600 text-center">We are currenlty working on this Page.</h1>
            <CallToAction className="bg-custom-dark-orange py-2 px-4 rounded-lg" desc='Back to Home' linkTo='/'/>
        </section>
    )
}

export default memo(Career)