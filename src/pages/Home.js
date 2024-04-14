function Home() {
  return (
    <>
      <div class="fade-in">
        <div class="mt-10 px-4 lg:px-0 items-center">
          <img
            src="https://i.ibb.co/Qdx6npX/logo.png"
            alt="Logo"
            class="mx-auto rounded-md"
          />
        </div>
        <h1 class="py-12 text-gray-800 text-6xl font-bold mb-2 leading-tight text-center mx-4 sm:mx-auto">
          Fogarty Applied Avian Ecology Lab
        </h1>

        <div class="w-full border-t border-gray-200"></div>
        <main class="mt-12 flex justify-center">
          <div class="mb-4 lg:mb-0 p-4 lg:p-0 md:w-4/5 relative rounded block">
            <div className="flex">
              <div class="pl-12 justify-center">
                <p className="text-gray-800 text-2xl mt-2 mb-2 leading-tight">
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
                  populations of interest. We collaborate with a diverse group
                  of colleagues from academia, state and federal agencies (e.g.,
                  USFWS, Oregon Department of Fish and Wildlife), and
                  non-governmental organizations (e.g., Klamath Bird
                  Observatory, Institute for Bird Populations), and actively
                  engage undergraduate and graduate students in our work.
                  <br />
                  <br />
                  Important first steps in understanding complex natural systems
                  are characterizing the types of data that can be generated
                  about them and the inferences that can and cannot be made on
                  the basis of those data. We combine expertise in the field
                  ecology of birds with robust quantitative methods that allow
                  us to work with types of messy, imperfect data generated from
                  field studies to produce results that are rigorous, realistic,
                  and applicable to management.
                </p>
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
