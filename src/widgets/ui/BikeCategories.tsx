'use client'
import { Label, RadioGroup, RadioGroupItem, Slider } from "@/shared"
import { Bike } from "@/features"
import { IBike } from "@/shared/types"
import { FC, useEffect, useState } from "react"

interface BikeCategoriesProps {
    bikes: IBike[]
}

const BikeCategories: FC<BikeCategoriesProps> = ({ bikes }) => {
    const [category, setCategory] = useState('all')
    const [filteredBikes, setFilteredBikes] = useState<IBike[]>([])
    const [price, setPrice] = useState(900)

    useEffect(() => {
        const filtered: IBike[] = bikes.filter((bike) => {
            const categoriesMatch = 
                category ===  'all'
                    ? bikes
                    : bike.categories.some((categ) => categ.name === category)

            const priceMatch = bike.price <= price
            return categoriesMatch && priceMatch
        })

        setFilteredBikes(filtered)
    }, [bikes, category, price])


    return (
        <section className="min-h-[1200px] py-10">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {/* sidebar */}
                    <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84px] xl:fixed">
                        <RadioGroup defaultValue="all" className="flex flex-col gap-6 mb-12">
                            <div className="flex items-cen ter space-x-2" onClick={() => setCategory('all')}>
                                <RadioGroupItem value="all" id="all" />
                                <Label htmlFor="all">All</Label>
                            </div>
                            <div className="flex items-cen ter space-x-2" onClick={() => setCategory('road')}>
                                <RadioGroupItem value="road" id="road" />
                                <Label htmlFor="road">Road</Label>
                            </div>
                            <div className="flex items-cen ter space-x-2" onClick={() => setCategory('professional')}>
                                <RadioGroupItem value="professional" id="professional" />
                                <Label htmlFor="professional">Professional</Label>
                            </div>
                            <div className="flex items-cen ter space-x-2" onClick={() => setCategory('extreme')}>
                                <RadioGroupItem value="extreme" id="extreme" />
                                <Label htmlFor="extreme">Extreme</Label>
                            </div>
                        </RadioGroup>

                        {/* price slider */}
                        <div className="max-w-56">
                            <div className="text-lg mb-4 font-medium">
                                Max Price: {' '}
                                <span className="text-accent font-semibold ml-2">${price}</span>
                                <span className="ml-2">
                                    {
                                        filteredBikes.length > 1 
                                            ? `${filteredBikes.length} items` 
                                            : filteredBikes.length === 0 
                                                ? `${filteredBikes.length} items`
                                                : `${filteredBikes.length} item`
                                    }
                                </span>
                            </div>
                            <Slider
                                defaultValue={[900]}
                                max={1000}
                                step={1}
                                onValueChange={(val) => setPrice(val[0])}
                            />
                        </div>

                    </aside>
                    {/* bike list */}
                    <div className="w-full xl:w-[1050px] ml-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                            {
                                filteredBikes.length 
                                    ? filteredBikes.map(bike => {
                                        return <Bike bike={bike} key={bike.price_id} />
                                    })
                                    : <div className="w-full font-semibold ">Not Found</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BikeCategories
