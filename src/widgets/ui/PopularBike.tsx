import { client } from "@/shared/libs/sanity"
import { PopularBikeCarousel } from "@/features"
import { IBike } from "@/shared/types"
import Link from "next/link"

// Get Data
const getData = async (): Promise<IBike[]> => {
    const query =  `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[] -> {
            name
        }
    }`

    const data: IBike[] = await client.fetch(query)
    return data
}

const PopularBike = async () => {
    const bikes = await getData()

    return (
        <section className="py-24">
            <div className="container mx-auto">
                <h2 className="text-center">Most Popular Bikes</h2>
                <p className="text-center mb-[30px]">The World&#39;s Premium Brands In One Destination.</p>
                <PopularBikeCarousel bikes={bikes} />
                <Link href="/our-bikes">
                    <button className="btn btn-accent mx-auto">See all bikes</button>
                </Link>
            </div>
        </section>
    )
}

export default PopularBike
