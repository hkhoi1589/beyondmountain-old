import Carousel from "@/components/carousel/base";

export default function CTA({ className = "" }) {
  return (
    <div className="-mt-40 mb-24 space-y-10 mx-auto container lg:max-w-[1440px] overflow-hidden">
      <div className="font-semibold text-2xl lg:text-3xl text-center font-merienda">
        COURSES & COMMUNITY
      </div>
      <Carousel />
      <div className="text-center">
        <button className="btn btn-secondary text-white px-12">
          <i className="ri-corner-down-right-fill"></i>
          Explore BuddyBoss Web
        </button>
      </div>
    </div>
  );
}
