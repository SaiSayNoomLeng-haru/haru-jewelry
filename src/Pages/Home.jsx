import { memo } from "react"
import ProductCard from "../UtilityComponents/ProductCard/ProductCardIndex"

const Home = () => {
    return(
        <div className="flex gap-2">
            <ProductCard>
                <ProductCard.Image />
                <ProductCard.Content />
            </ProductCard>

            <ProductCard>
                <ProductCard.Image />
                <ProductCard.Content />
            </ProductCard>

            <ProductCard>
                <ProductCard.Image />
                <ProductCard.Content />
            </ProductCard>

        </div>
    )
}

export default memo(Home)