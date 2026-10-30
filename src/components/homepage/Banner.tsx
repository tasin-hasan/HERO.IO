import Image from "next/image";
import HeroImage from "@/assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-5 mt-10 text-center">
        <h2 className="text-4xl font-bold">We Build <br /> <span className="text-violet-700">Productive</span> Apps</h2>
        <p className="w-[1000px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-6 items-center">
          <button className="btn btn-soft">Google Play</button>
          <button className="btn btn-soft">App Store</button>
        </div>

        <Image src={HeroImage} alt="Hero Image" width={550} />
      </div>
    </div>
  );
};

export default Banner;
