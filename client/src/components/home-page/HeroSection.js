export default function HeroSection() {
    return (
        <div className="relative isolate overflow-hidden pt-16  md:pt-24 lg:flex lg:gap-x-20 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-myrtlegreen sm:text-4xl">
                    Tent Maven - Discover and Book Beautiful Campsites
                </h2>
                <p className="mt-6 text-lg leading-8 text-myrtlegreen">
                    Explore our curated selection of stunning campsites and plan
                    your next adventure with ease.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                        href="#"
                        className="rounded-md bg-myrtlegreen px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Book Now
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-myrtlegreen"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
                <img
                    className="absolute left-0 top-0 w-[57rem] max-w-none"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"
                    alt="App screenshot"
                    width={1824}
                    height={1080}
                />
            </div>
        </div>
    );
}
