import Image from "next/image"

interface Clients{
  id: string;
  name: string;
  logo: string;
}

interface Props{
  clients?: Clients[];
}

const clientsHardcoded: Clients[] = [
  {
    id: "1",
    name: "Nestoil Plc",
    logo: "/images/nestoil.png",
  },
  {
    id: "2",
    name: "Chevron Nigeria Ltd",
    logo: "/images/chevron.png",
  },
  {
    id: "3",
    name: "Pioneer Natural Resources",
    logo: "/images/pioneer1.png",
  },
];


export const Clients: React.FC<Props> = ({clients = clientsHardcoded}) => {
  // list of logos or names

  return (
    <section className="bg-[#111111] mx-auto text-white !px-[5%] !py-24 lg:border-b lg:border-gray-600">
      <h2 className="text-2xl text-center font-semibold !mb-20 !mt-4">Our Clients</h2>
      {/* Logo grid */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-7 !pb-[40px]">
        {clients.map(client => {
          return <li className="flex items-center justify-center" key={client.id}>
            <Image src={client.logo} alt={""} width={60} height={60} className="!w-auto !h-auto" />
          </li>
        })}
      </ul>

    </section>
  )
}
