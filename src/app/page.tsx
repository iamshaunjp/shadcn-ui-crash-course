import Image from "next/image"
import bourbon from '../../public/bourbon.jpg'
import barrels from '../../public/barrels.jpg'
import logob from '../../public/logo-black.png'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-16 p-10">    
        {/* Hero section */}
            <div className="flex-shrink-0 mb-10">
                <Image
                    src={logob}
                    alt='logo'
                    width={300}
                    height={300}
                />
            </div>
            <section className="flex flex-col py-2 md:flex-row justify-start items-center md:py-16 h-1/2">
                <p className="text-sm text-justify md:text-lg text-gray-600 pr-8">
                    <span className="font-bold">Join us</span>  in the pursuit of exceptional bourbons, where each bottle tells a story of heritage, craftsmanship, and the timeless allure of this distinguished whiskey. Bourbon Finder invites you to elevate your bourbon experience, guiding you through a world of flavors, aromas, and the thrill of discovering your next favorite pour. Cheers to the journey of bourbon exploration with Bourbon Finder!
                </p>
                <div className="flex-shrink-0 mt-10 md:mt-0">
                    <Image
                        src={bourbon}
                        alt='Pouring bourbon'
                        placeholder="blur"
                        width={300}
                        height={200}
                    />
                </div>
            </section>
        {/* Description or additional content */}
            <section className="flex flex-col py-2 md:flex-row justify-start items-center md:py-16 h-1/2">
                <div className="flex-shrink-0 mt-10 md:mt-0">
                    <Image
                        src={barrels}
                        alt='Bourbon barrels'
                        placeholder="blur"
                        width={300}
                    />
                </div>
                <p className="text-sm text-justify pl-0 mt-10 md:text-lg text-gray-600 md:pl-8 md:mt-0">
                <span className="font-bold">Embark</span> on a journey through our meticulously curated collection, a symphony of exceptional whiskeys and bourbons that beckons both connoisseurs and enthusiasts into a realm of unparalleled taste and craftsmanship. Our selection is a testament to the artistry and unwavering dedication of master distillers, individuals who have honed their skills and refined the alchemy of distillation over countless generations. From the rolling hills of Kentucky to the rugged landscapes of Scotland, our collection spans the globe, capturing the essence of diverse terroirs and distillation traditions. Each bottle is a unique expression, a distillation of the land, the water, and the spirit that infuses it.
                </p>
            </section>
            <section className="flex flex-col py-2 md:flex-row justify-start items-center md:py-16 h-1/2">
                <p className="text-sm text-justify md:text-lg text-gray-600">
                <span className="font-bold">From</span> the smoky notes of peaty single malts to the sweet and caramel undertones of aged bourbons, our diverse range offers a delightful journey through the world of premium spirits. Immerse yourself in the nuanced flavors, aromas, and textures that define each unique expression in our carefully curated lineup.<br/>
                <span className="font-bold">Whether</span> you're a seasoned aficionado or just beginning your exploration of fine whiskeys, our collection invites you to savor the complexity and character found in every bottle. Cheers to elevating your tasting experience and discovering the extraordinary stories behind each pour.
                </p>
            </section>
        </div>
        )
    }