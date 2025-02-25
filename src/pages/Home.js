function Home() {
  return (
    <>
      <div className="fade-in">
        <div className="mt-4 px-4 lg:px-0 items-center">
          <img
            src="https://i.ibb.co/Qdx6npX/logo.png"
            alt="Logo"
            className="mx-auto rounded-md w-1/2 lg:w-1/4"
          />
        </div>
        <h1 className="mb-4 mt-4 text-gray-800 text-3xl lg:py-6 lg:text-5xl font-bold leading-tight text-center mx-4 sm:mx-auto">
          Fogarty Applied Avian Ecology Lab
        </h1>

        <div className="w-full border-t border-gray-200"></div>

        <main className="mt-8 flex justify-center">
          <div className="sm:text-center lg:mb-0 lg:p-0 md:w-4/5 lg:w-5/6 xl:w-3/4 relative rounded block">
            <div className="flex lg:justify-start">
              <p className="text-gray-800 leading-tight px-4 lg:px-0 xl:px-0 text-center lg:text-left lg:mb-2 lg:mt-2 xl:mb-2 xl:mt-2">
                Managing wildlife populations in a rapidly changing world is
                among the most pressing issues for wildlife biologists. Bird
                communities are an excellent system for addressing these types
                of questions, given their high species richness and ease of
                detection.
                <br />
                <br />
                In the Fogarty Applied Avian Ecology Lab, we address pressing
                management questions for both individual bird species and
                communities. We consider the effects of potential disturbances
                (e.g., climate change, wildfire, habitat fragmentation),
                restoration activities, and direct management on these
                populations of interest. We collaborate with a diverse group of
                colleagues from academia, state and federal agencies (e.g.,
                USFWS, Oregon Department of Fish and Wildlife), and
                non-governmental organizations (e.g., Klamath Bird Observatory,
                Institute for Bird Populations), and actively engage
                undergraduate and graduate students in our work.
                <br />
                <br />
                Important first steps in understanding complex natural systems
                are characterizing the types of data that can be generated about
                them and the inferences that can and cannot be made on the basis
                of those data. We combine expertise in the field ecology of
                birds with robust quantitative methods that allow us to work
                with types of messy, imperfect data generated from field studies
                to produce results that are rigorous, realistic, and applicable
                to management.
              </p>
            </div>
          </div>
        </main>

        {/* Cal Poly logo */}
        <div className="border-t mt-6 pt-8 px-4 lg:px-0 items-center">
          <img
            src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
            alt="Cal Poly Logo"
            className="mx-auto"
          />
        </div>
      </div>

      {/* <!-- footer --> */}
      <footer className="border-t mt-12 pt-6 px-4 lg:px-0 lg:py-2 bg-greenAccent text-gray-300">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/5"></div>

          <div className="w-full mt-2 md:w-1/2 lg:w-1/5 text-center pb-2 text-sm">
            @ Meaghan Sharrard 2024
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}

export default Home;
