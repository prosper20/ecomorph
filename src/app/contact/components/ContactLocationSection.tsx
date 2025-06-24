"use client";

export default function ContactLocationSection() {
  return (
    <section className="py-18 lg:px-16 md:py-20 bg-white">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Contact Us to Get Started
      </h2> */}

      <div className="w-full flex flex-col md:flex-row  items-start justify-between">
        <h2 className="px-4 lg:px-0 text-3xl md:text-4xl font-bold text-[#344249] mb-8">
            Contact Us to Get Started
        </h2>

        {/* Map */}
        <div className="flex-1 w-full flex flex-col md:flex-row gap-8 justify-end">
            <div className="px-4 lg:px-0 text-gray-800 space-y-2">
                <h3 className="text-lg font-semibold">Main Office</h3>
                <p>6 Peter Odili Road, Trans Amadi,</p>
                <p>Port Harcourt, Rivers State.</p>
                <p>+234 806 097 4090</p>
            </div>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=6%20Peter%20Odili%20Rd%2C%20Trans%20Amadi%2C%20Port%20Harcourt%2C%20Rivers%2C%20Nigeria&t=m&z=16&output=embed&iwloc=near"
            width="100%"
            height="250"
            loading="lazy"
            className="border-0 w-full md:w-[50%] h-[250px] md:h-[300px]"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
