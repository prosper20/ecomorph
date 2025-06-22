import Image from "next/image"

const NineReasonsWhy = [
  {
    id: 1,
    description: (
      <p className="font-bold text-black">
        Engineering with Intent{" "}
        <span className="font-normal text-black">
          We don’t just write code. We solve business problems.
        </span>
      </p>
    ),
    image: "/img1.png",
  },
  {
    id: 2,
    description: (
      <p className="font-bold text-black">
        Design that Feels Invisible{" "}
        <span className="font-normal text-black">
          Our UI/UX design philosophy is minimal yet meaningful.
        </span>
      </p>
    ),
    image: "/img2.png",
  },
  {
  id: 3,
  description: (
    <p className="font-bold text-black">
      Built on Talent, Backed by Intelligence{" "}
      <span className="font-normal text-black">
        Our engineers bring depth, clarity, and technical leadership to every line of code.
      </span>
    </p>
  ),
  image: "/img4.png",
},
  {
    id: 4,
    description: (
      <p className="font-bold text-black">
        Brand-Aligned Software{" "}
        <span className="font-normal text-black">
          Your software should speak your brand. We use Domain-Driven Design and clean architecture to ensure your product mirrors your identity.
        </span>
      </p>
    ),
    image: "/img3.png",
  },
  {
  id: 5,
  description: (
    <p className="font-bold text-black">
      Small Teams. Sharper Focus.{" "}
      <span className="font-normal text-black">
        We blend agile methods with sharp discipline to keep projects lean, transparent, and constantly moving forward.
      </span>
    </p>
  ),
  image: "/img8.png",
},

  {
    id: 6,
    description: (
      <p className="font-bold text-black">
        Tech That Scales, Not Just Works{" "}
        <span className="font-normal text-black">
          We think beyond MVPs. Our solutions scale in codebase, infrastructure, and business logic, so you&apos;re always ready for what&apos;s next.
        </span>
      </p>
    ),
    image: "/img5.png",
  },
  {
    id: 7,
    description: (
      <p className="font-bold text-black">
        Built for Security & Trust{" "}
        <span className="font-normal text-black">
          From data encryption to secure APIs, we treat your users’ data like our own.
        </span>
      </p>
    ),
    image: "/img6.png",
  },
  {
  id: 8,
  description: (
    <p className="font-bold text-black">
      Local Roots, Global Reach{" "}
      <span className="font-normal text-black">
        While we serve clients remotely across the globe, our team is proudly based in Abuja, Nigeria.
      </span>
    </p>
  ),
  image: "/img7.png",
},
  {
    id: 9,
    description: (
      <p className="font-bold text-black">
        We Grow With You{" "}
        <span className="font-normal text-black">
          We’re here for the long game. Whether it’s one feature or a full platform, our team and culture grow with your ambition.
        </span>
      </p>
    ),
    image: "/img9.png",
  },
];


export const ReasonsSection = () => {
  // prepare list of reasons

  return (
    <section className="mx-auto bg-white !pb-4 lg:!pb-14 !pt-14 !px-[5%] flex justify-center">
      <ul className="xl:max-w-[75%] grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-24">
        {NineReasonsWhy.map(data => {
        
          return <li className="flex items-center md:items-start md:flex-col gap-6" key={data.id}>
            <Image src={data.image} alt={"image" + data.id} width={120} height={120} priority className="!w-14 !h-14 md:!w-30 md:!h-30"/>
            <div>
            {data.description}
            </div>
          </li>
        })}
      </ul>
    </section>
  )
}
