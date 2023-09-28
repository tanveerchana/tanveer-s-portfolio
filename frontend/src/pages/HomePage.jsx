import FrontImage from "../assets/Images/Logo.png";
import Footer from "../components/Footer";
import WorkPage from "./WorkPage";
export default function HomePage() {
  return (
    <div className="mt-4">
      <div className="md:px-8 lg:flex items-center lg:pb-24">
        <div className="py-8 lg:mt-auto px-14 lg:w-3/6 lg:ps-auto lg:pe-0">
          <img className="max-h-96" src={FrontImage} alt="mylogo" />
        </div>
        <div className="px-14 py-2 lg:pt-36 lg:w-3/6 ">
          <div className="text-4xl py-4 sm:py-2  font-extrabold lg:text-7xl lg:leading-normal">
            <h1>
              <span className="text-orange-500 leading-10">Hello!</span>
            </h1>
          </div>
          <div className="text-3xl mb-4 pb-4 font-semibold leading-normal lg:text-5xl lg:leading-tight">
            <h1>
              I'm Tanveer Singh, a web developer based in Punjab.
            </h1>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gray-300 mx-6 md:mx-16 lg:mx-20 "></div>
      <WorkPage/>
      <Footer />
    </div>
  );
}
