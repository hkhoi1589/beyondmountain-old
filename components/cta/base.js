import Link from "next/link";
import BG from "@/components/bg/radial";

export default function CTA({ className = "" }) {
  return (
    <section className={`py-28 relative ${className}`}>
      <BG />
      <div className="relative max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className="text-primary font-semibold">Professional services</h3>
          <p className="opacity-90 text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="opacity-70">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
          <Link href="#" className="btn btn-sm btn-outline">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
