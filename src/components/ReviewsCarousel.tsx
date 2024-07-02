import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel.tsx";
import lady from "../assets/Ellipse 2310 (1).png";
import man from "../assets/Ellipse 2310.png";
import {IoStar} from "react-icons/io5";


const ReviewsCarousel = () => {
    return (
        <div className="">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-3 bg-white rounded-xl p-5">
                            <div className="flex gap-5 items-center">
                                <img src={lady} className="object-cover rounded-full w-[100px] h-[102px]" alt=""/>
                                <div>
                                    <p className="font-bold">Elsbeth Blu</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-sm">
                                    I love my Nike Air Max! The comfort and support are unmatched, and the stylish
                                    design always gets compliments. Perfect for both my workouts and daily wear!
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-3 bg-white rounded-xl p-5">
                            <div className="flex gap-5 items-center">
                                <img src={man} className="object-cover rounded-full w-[100px] h-[102px]" alt=""/>
                                <div>
                                    <p className="font-bold">Phill K</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#d3d6d9]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-sm">
                                    The Nike Air Max exceeded my expectations with its incredible cushioning and sleek
                                    look. These shoes are perfect for long runs and casual outings alike
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-3 bg-white rounded-xl p-5">
                            <div className="flex gap-5 items-center">
                                <img src={lady} className="object-cover rounded-full w-[100px] h-[102px]" alt=""/>
                                <div>
                                    <p className="font-bold">Elsbeth Blu</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-sm">
                                    I love my Nike Air Max! The comfort and support are unmatched, and the stylish
                                    design always gets compliments. Perfect for both my workouts and daily wear!
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-3 bg-white rounded-xl p-5">
                            <div className="flex gap-5 items-center">
                                <img src={man} className="object-cover rounded-full w-[100px] h-[102px]" alt=""/>
                                <div>
                                    <p className="font-bold">Phill K</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#d3d6d9]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-sm">
                                    The Nike Air Max exceeded my expectations with its incredible cushioning and sleek
                                    look. These shoes are perfect for long runs and casual outings alike
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ReviewsCarousel;