import Link from "next/link";

export default function CTA({ className = "" }) {
  return (
    <section
      className={`relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 flex flex-col justify-center ${className}`}
    >
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl opacity-90 font-semibold md:text-4xl">
            Build your websites with{" "}
            <span className="text-primary">high performance</span>
          </h3>
          <p className="opacity-70 leading-relaxed my-3">
            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
            Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
            porta lacinia.
          </p>
          <Link className="btn rounded-full text-primary mt-3" href="#">
            Try it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img src="/img/common/dashboard.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
