import Link from "next/link";
import BG from "@/components/bg/gradient";

export default function CTA({ className = "" }) {
  return (
    <section className={`py-28 relative bg-primary ${className}`}>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="text-blue-100 mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="#"
            className="btn btn-sm btn-ghost bg-white text-black/70"
          >
            Get started
          </Link>
        </div>
      </div>
      <BG />
    </section>
  );
}
