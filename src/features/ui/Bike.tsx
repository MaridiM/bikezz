'use client'
import { FC } from "react"
import { IBike } from "../../shared/types"
import { urlFor } from '../../shared/libs/sanity'
import { CgEye, CgShoppingBag } from 'react-icons/cg'
import Image from "next/image"
import { AddToCartBtn } from "../../shared"
import Link from "next/link"

interface BikeProps {
    bike: IBike
}

const Bike: FC<BikeProps> = ({ bike }) => {
    const popularBikeCat = bike && bike.categories.find(
        (bike) => bike.name === 'popular'
    )

    return (
        <div className="group">
            <div className="border h-[328px] mb-5 p-4 overfloww-hiden relative">
                <div className="bg-gray-100 w-full h-full group-hover:bg-gray-200 transition-all duration-300 flex justify-center items-center">
                    {/* badge */}
                    { 
                        popularBikeCat && (
                            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">Popular</div>
                        )    
                    }
                    {/* image */}
                    <Image
                        src={urlFor(bike.images[0]).url()}
                        width={240}
                        height={147}
                        alt={bike.name}
                        priority
                    />
                </div>

                {/* btn group */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <AddToCartBtn
                        name={bike.name} 
                        currency='USD'
                        description={bike.description}
                        images={bike.images}
                        price={bike.price }
                        price_id={bike.price_id}
                        className="btn-icon btn-accent"
                        icon={<CgShoppingBag />}
                    />
                    <Link href={`/product/${bike.slug}`}>
                        <button className="btn-icon btn-primary">
                            <CgEye />
                        </button>
                    </Link>
                </div>
            </div>

            <h5 className="text-gray-400 font-semibold mb-2">{bike.categories[0].name} bike</h5>
            <h4>{bike.name}</h4>
            <div className="text-lg font-bold text-accent">${bike.price}</div>
        </div>
    )
}

export default Bike
