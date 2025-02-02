import Image from "next/image";
import { FaBookOpenReader, FaPeopleGroup, FaGlobe } from "react-icons/fa6";

export default function Home() {
  return (
   <>
    <section className="p-4 full-bleed ">
      <div className="relative flex justify-center items-center">
        <Image src="/images/buildings-1867775_1280.jpg"  alt="Report" width={1200} height={250} className="w-full max-h-[40rem]" />
      </div>
        <div className="lg:absolute  lg:top-[50%] lg:top-[30%] lg:left-[25%] opacity-90  bg-blue-950 text-white mlg:w-1/2 mx-auto p-2 md:p-4 lg:p-2 h-1/2 flex flex-col justify-center items-center">
        <span className="text-xl lg:text-3xl xl:text-5xl font-semibold">Plimsoll's Business Valuation Service</span>
        <p className="my-2">What is your business worth? Get a confidential valuation report on your business within 72 hours.</p>
        <p className="my-4"><a href="/" className="bg-red-600 my-4 text-white md:text-2xl px-4 py-2 rounded-md shadow-md shadow-red-700">Request a sample</a></p>
        </div>
    </section>
    <section className="md:w-1/2 md:mx-auto">
      <h1 className="text-2xl lg:text-6xl font-semibold my-4">Private and confidential business valuations delivered to your inbox</h1>
      <article className="grid md:grid-cols-3 p-4">
        <article className=" p-4 md:col-span-2">
          <p>Plimsoll can provide an unbiased valuation report on your business, delivered straight to your inbox - within 72 hours</p>
          <p className="my-2">Commissioning a confidential Plimsoll Valuation Report on your business will give a fully independent view of what it is currently worth and a 5 year value trend analysis. All in one convenient report, for a fixed price and without any hassle. </p>
          <p>Plimsoll has valued more than 40,000 clients in over 96 countries, across thousands of different industries. Our clients use their Plimsoll Valuation Report for: </p>
          <Image src="/images/list.jpg"  alt="list" width={600} height={150} className="my-4 w-[30rem]" />
        </article>
        <div className="p-4 md:relative">
          <Image src="/images/valuation-english.jpg"  alt="Report" width={1200} height={250} />
        </div>
      </article>
    </section>
    <section className="md:w-1/2 md:mx-auto ">
      <div className="full-bleed bg-[#f9fbfc] flex justify-center items-center">
        <Image src="/images/video.jpg"  alt="Report" width={1200} height={250} />
      </div>
    </section>
    <section className="md:w-1/2 md:mx-auto">
      <Image src="/images/faq.jpg"  alt="Report" width={1200} height={250} />
    </section>
    <section className="md:w-1/2 md:mx-auto">
    <h2 className="text-2xl lg:text-3xl font-semibold my-4 text-center">Why choose us?</h2>
      <div className="md:w-2/3 md:mx-auto grid grid-cols-3 gap-4">
        <div className="p-4  flex flex-col justify-center items-center text-center">
        <FaBookOpenReader className="text-7xl" />
          <h3 className="text-2xl font-bold">37 Years</h3>
          <span className="font-semibold">of experience</span>
        </div>
        <div className="p-4  flex flex-col justify-center items-center text-center">
        <FaPeopleGroup className="text-7xl" />
          <h3 className="text-2xl font-bold">40,000</h3>
          <span className="font-semibold">clients</span>
        </div>
        <div className="p-4  flex flex-col justify-center items-center text-center">
        <FaGlobe  className="text-7xl"/>
          <h3 className="text-2xl font-bold">Operating</h3>
          <span className="font-semibold">worldwide</span>
        </div>
      </div>
    </section>
   </>
  );
}
