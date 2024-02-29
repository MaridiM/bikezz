import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-gray-100">
            <div className="container mx-auto">
                <div className="flex items-center justify-berween">
                    {/* text */}
                    <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
                        <h1 className="text-center xl:text-left mb-6">
                            Where <span>Joyful</span> Cycling Begins
                        </h1>
                        <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
                            By choosing an engaging and informative description for your first screen, you can effectively grab the attention of visitors and encourage them to explore your bike shop further.
                        </p>
                        {/* btn group */}
                        <div className="flex items-center gap-4 mx-auto xl:mx-0">
                            <Link href='/our-bikes' className="mx-auto md:mx-0">
                                <button className="btn btn-primary">Shop now</button>
                            </Link>
                            <Link href='/our-bikes' className="mx-auto md:mx-0">
                                <button className="btn btn-accent">Our bikes</button>
                            </Link>
                        </div>
                    </div>
                    {/* img */}
                    <div className="hidden xl:flex">
                        <Image src='/assets/hero/hero_bike.png' alt="Hero Bike" width={765} height={480} quality={100}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
