import Link from 'next/link';

export function CtaSection() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#cta-section-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="cta-section-gradient">
                <stop stopColor="#0077b6" />
                <stop offset={1} stopColor="#00b4d8" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl font-[Inter,sans-serif]">
              Ready for clean, safe water in your home or business?
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300 font-[Inter,sans-serif]">
              Get in touch with our team today for a free consultation and quote. We serve homes, schools, hospitals, and businesses across Kampala and Uganda.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-[#0077b6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ffffff] hover:text-[#0077b6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-[Inter,sans-serif]"
              >
                Get a Free Quote
              </Link>
              <Link href="/services" className="text-sm font-semibold text-white hover:text-gray-100 font-[Inter,sans-serif]">
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-12 flex justify-center lg:block lg:w-auto">
            <img
              alt="Aqua Solutions water treatment"
              src="/aqua-tap.png"
              width={600}
              height={600}
              className="w-full h-[550px] max-w-lg rounded-md bg-white/5 lg:w-150 lg:max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
