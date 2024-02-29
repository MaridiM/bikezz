import { client, urlFor } from '@/shared/libs/sanity'
import Image from 'next/image'
import { AddToCartBtn } from '@/shared'
import Link from 'next/link'

import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from 'lucide-react'
import { FC } from 'react'


interface ProductDetailProps {
    params: {
        slug: string
    }
}

const getData = async (slug: string ) => {
    
    const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "category": categories[] -> {
            name
        }
    }`

    const data = await client.fetch(query)

    return data
}



const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {

    const bike = await getData(params.slug)

    return (
        <section className='pt-24 pb-32'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-14">
                    {/* img */}
                    <div className='xl:flex-1 h-[460px] bg-gray-100 xl:w-[700px] xl:h-[540px] flex justify-center items-center'>
                        <Image
                            src={urlFor(bike.images[0]).url()}
                            width={473}
                            height={290}
                            alt={bike.name}
                            priority
                            />
                    </div>
                    {/* text */}
                    <div className='flex-1 flex flex-col justify-center items-start gap-10'>
                        <Link href='/' className='flex items-center gap-2 font-semibold'>
                            <ChevronLeft />
                            Back to home
                        </Link>
                        <div className='flex flex-col gap-6 items-start'>
                            <div>
                                <h3>{bike.name}</h3>
                                <p className='text-lg font-semibold'>${bike.price}</p>
                            </div>
                            <p>{bike.description}</p>
                            <AddToCartBtn
                                name={bike.name} 
                                currency='USD'
                                description={bike.description}
                                images={bike.images}
                                price={bike.price }
                                price_id={bike.price_id}
                                className='btn btn-accent'
                                text='Add to cart'
                            />
                        </div>
                        {/* info */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <PackageCheck size={20} className='text-accent' />
                                <p>Free shipping on orders over $130</p>
                            </div>
                            <div className='flex gap-2'>
                                <RefreshCw size={20} className='text-accent' />
                                <p>Free return 30 days</p>
                            </div>
                            <div className='flex gap-2'>
                                <Bike size={20} className='text-accent' />
                                <p>The bicycles are partionally assembled and benefit from transport insurance</p>
                            </div>
                            <div className='flex gap-2'>
                                <Clock size={20} className='text-accent' />
                                <p>Fast delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default ProductDetail
