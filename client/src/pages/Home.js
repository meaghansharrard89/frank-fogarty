function Home() {
  return (
    <>
      <main class="mt-12">
        {/* <!-- featured section --> */}
        <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
          {/* <!-- main post --> */}
          <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img
              src="https://i.ibb.co/0rZ5vHD/Arcata-Mc-Kinley-Statue-Wide.jpg"
              class="rounded-md object-cover w-full h-64"
            />
            <h1 class="text-gray-800 text-6xl font-bold mt-2 mb-2 leading-tight text-center">
              Frank Fogarty's Lab
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Left grid item for text */}
              <div class="pl-12">
                <h2 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                  This is a tag line about the lab.
                </h2>
                <p className="text-gray-800 text-3xl mt-2 mb-2 leading-tight">
                  Info about the lab.
                </p>
              </div>
              {/* Right grid item for image */}
              <div className="text-center py-8 sm:py-6 px-6">
                <img src="https://i.ibb.co/N3b7f4q/trails-are-very-easy.jpg" />
              </div>
            </div>

            <div class="border-t mt-12 pt-12 px-4 lg:px-0">
              <img src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png" />
            </div>
          </div>
        </div>
      </main>

      {/* <!-- footer --> */}
      <footer class="border-t mt-12 pt-12 px-4 lg:px-0 bg-gray-800 text-gray-300">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-2/5"></div>

          <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 text-center">
            Meaghan Sharrard 2024
          </div>

          <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}

export default Home;
