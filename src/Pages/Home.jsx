import { memo } from "react"

import BlogCard from "../UtilityComponents/BlogCard/BlogCardIndex"

const Home = () => {
    return(
        <div className="flex gap-2">
            <BlogCard>
                <BlogCard.Image />
                <BlogCard.Content />
            </BlogCard>

        </div>
    )
}

export default memo(Home)