function Home() {
  return (
    <>
      <div class="image-container">
        <img
          src="https://i.ibb.co/r4wJKxG/redwoods.jpg"
          class="rounded-md pt-8"
          alt="Redwoods"
        />
      </div>
      <h1 class="py-12 text-gray-800 text-6xl font-bold mb-2 leading-tight text-center mx-4 sm:mx-auto">
        Applied Avian Ecology Lab
      </h1>

      <div class="w-full border-t border-gray-200"></div>
      <main class="mt-12 fade-in flex justify-center">
        <div class="mb-4 lg:mb-0 p-4 lg:p-0 md:w-4/5 relative rounded block">
          <div className="flex">
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Left grid item for text */}
              <div class="pl-12 justify-center">
                <h2 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                  Welcome to Feathered Insights: Where Science Takes Flight!
                </h2>
                <br />
                <p className="text-gray-800 text-3xl mt-2 mb-2 leading-tight">
                  Nestled in the heart of biodiversity research, our applied
                  avian ecology lab is a haven for bird enthusiasts and
                  conservationists alike. With cutting-edge technology and a
                  passion for preserving avian habitats, we soar to new heights
                  in understanding and protecting our feathered friends. Join us
                  as we spread our wings and dive deep into the fascinating
                  world of avian ecology!
                </p>
              </div>
              {/* Right grid item for image */}
              <div className="md:pl-80 py-8 sm:py-6 px-6 items-center">
                <img src="https://i.ibb.co/Qdx6npX/logo.png" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cal Poly logo */}
      <div class="border-t mt-12 pt-12 px-4 lg:px-0 items-center">
        <img
          src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
          class="mx-auto"
        />
      </div>

      {/* <!-- footer --> */}
      <footer class="border-t mt-12 pt-6 px-4 lg:px-0 bg-greenAccent text-gray-300">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-2/5"></div>

          <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 text-center pb-6">
            @ Meaghan Sharrard 2024
          </div>

          <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}

export default Home;
