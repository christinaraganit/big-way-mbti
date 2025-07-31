import { brothByMBTI } from "../mbti";

export default function AllSoups() {
  return (
    <main
      id="all-soups"
      className={
        "flex flex-col items-center justify-center min-h-dvh min-w-dvw p-4 md:p-8 overflow-x-hidden"
      }
    >
      <img
        src="/border.svg"
        className="fixed top-4 left-4 md:top-8 md:left-8 pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] fixed top-4 right-4 md:top-8 md:right-8 pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-y-[-1] bottom-8 left-8 fixed hidden md:block pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 fixed hidden md:block pointer-events-none"
      ></img>

      <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-10 mb-8 pointer-events-none"
      />

      <div className="px-4 md:px-8 text-center w-full max-w-3xl flex flex-col items-center min-h-screen">
        <h1 className="font-source-serif-pro font-medium uppercase text-[#FFC950] text-2xl mb-2">
          Explore
        </h1>
        <h2 className="font-futura font-extrabold text-white text-5xl uppercase text-balance mb-12">
          All Soup Bases
        </h2>

        {Object.entries(brothByMBTI).map(([mbti, info], index) => (
          <div key={mbti} className="w-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <img
                src={info.img}
                alt={`${mbti} broth image`}
                className="w-full sm:w-1/2 h-auto sm:-ml-6 pointer-events-none"
              />

              <div className="-mt-8 w-full sm:w-1/2 flex flex-col sm:mt-12">
                <h2 className="text-left sm:text-center text-[#FFC950] uppercase text-base font-source-serif-pro font-medium uppercase">
                  {mbti}
                </h2>
                <h3 className="text-left sm:text-center text-3xl uppercase font-futura font-extrabold text-[#FFF1D3] mb-4 sm:mb-6">
                  {info.broth}
                </h3>
                <p className="text-left text-[#FFF1D3] font-futura">
                  {info.description}
                </p>
              </div>
            </div>

            {index !== Object.entries(brothByMBTI).length - 1 && (
              <div className="w-full mt-8 sm:mt-0">
                <div className="separator h-0.5 mb-2 w-full"></div>
                <div className="separator h-0.5 mb-2 w-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
