import Container from "../Container.tsx";
import {Button} from "./ui/button.tsx";
import heroImage from "../../src/assets/pngwing.com 1.png";

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-b from-[#180a01] to-[#6e3002] text-[#fff] py-10">
            <Container>
                <div className="md:flex justify-center items-center gap-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-[64px] md:text-[70px] text-[40px] md:leading-[65px] leading-10 font-bold">
                            Discover your <br/> best shoes
                        </h1>
                        <p className="text-[20px] leading-[23.7px]">
                            Step into comfort and style with our <br/> premium selection of footwear.
                        </p>
                        <Button className="bg-[#E0551B] hover:bg-[#E0551B] w-[98px]">
                            Shop Now
                        </Button>
                    </div>

                    <div className="">
                        <img src={heroImage} alt="hero" className="lg:w-[530px] lg:h-[402px]"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
