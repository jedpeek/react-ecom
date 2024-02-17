import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')] ">
      <div className="relative h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] ">
        <div className="flex h-full items-center justify-center p-5 m-5">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl uppercase">
              Check out the latest styles
              <br />
              <span>for everyone</span>
            </h1>
            <Link to="/shop">
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
