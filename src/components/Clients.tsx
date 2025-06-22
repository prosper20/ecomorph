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
    id:"1",
    name: "Olclare", 
    logo: "/client-olclare.png",
  },
  // {
  //   id:"2",
  //   name: "Stadt Wien", 
  //   logo: "/Stadt Wien Logo.svg",
  // },
  // {
  //   id:"3",
  //   name: "Swiss Post", 
  //   logo: "/Swiss Post Logo.svg",
  // },
  // {
  //   id:"4",
  //   name: "Ista", 
  //   logo: "/ista Logo.svg",
  // },
  // {
  //   id:"5",
  //   name: "Karlsberg", 
  //   logo: "/Karlsberg Logo.svg",
  // },
  // {
  //   id:"6",
  //   name: "Energie Steiermark", 
  //   logo: "/Energie Steiermark Logo.svg",
  // },
  // {
  //   id:"7",
  //   name: "Anyline", 
  //   logo: "/Anyline Logo.svg",
  // },
  // {
  //   id:"8",
  //   name: "OMV", 
  //   logo: "/OMV Logo.svg",
  // },
  // {
  //   id:"9",
  //   name: "Zubling Strabag", 
  //   logo: "/Zubling Strabag Logo.svg",
  // },
  // {
  //   id:"10",
  //   name: "Mauthause Komitte Oesterreich", 
  //   logo: "/Mauthause Komitte Oesterreich Logo.svg",
  // },
]

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
