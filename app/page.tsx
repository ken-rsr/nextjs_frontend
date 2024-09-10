import Image from "next/image";
import { TfiMapAlt } from "react-icons/tfi";
import TableComponent from "./components/TableComponent";

export default function Home() {
  return (
    <div>
      <div
        className="h-[321px] bg-cover bg-center px-4 xs:px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44 flex items-center"
        style={{ backgroundImage: "url('/amaia.png')" }}
      >
        <div className="space-y-3">
          <h1 className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 font-montserrat text-3xl sm:text-4xl md:text-3l lg:text-3xl xl:text-4xl 2xl:text-5xl  font-extrabold text-customBlue">
            Amaia Scapes Laguna
          </h1>
          <h2
            className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 font-montserrat  text-3xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-customTeal uppercase"
            style={{ letterSpacing: "6px" }}
          >
            Property List
          </h2>
        </div>
      </div>

      <div className="px-4 xs:px-12 sm:px-26 md:px-22 lg:px-38 xl:px-50 2xl:px-62 flex justify-center bg-customBlue">
        <div className="mb-20 mt-10 space-y-6 w-full max-w-4xl overflow-x-auto">
          <TableComponent />
          <TableComponent />
          <TableComponent />
          <TableComponent />
          <TableComponent />
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
