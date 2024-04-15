function Research() {
  const research = [
    {
      title: "Lewis’s Woodpecker habitat ecology",
      paragraph: (
        <>
          Lewis’s Woodpecker (Melanerpes lewis) have declined sharply in
          abundance since the 1960s throughout their range, including in Oregon
          where they are listed as a sensitive species. Additionally, many
          populations have altered their migratory behavior over the last
          century for reasons not entirely understood. Lewis’s Woodpeckers are
          also strongly associated with burned areas during the breeding system,
          suggesting that changing fire regimes and management will have impacts
          on this species. Improving our understanding of the habitat
          requirements of Lewis’s Woodpecker, including how changes in
          environmental variables have affected differing migratory strategies
          across Oregon, is an important step for effectively conserving the
          species. <br /> <br />
          The Applied Avian Ecology lab, partnered with Dr. Ho Yi Wan and the
          Oregon Department Fish and Wildlife, is investigating multiple
          questions about home range, migratory decision making, and habitat use
          for both resident and migratory Lewis’s Woodpeckers. This project
          incorporates multiple data types, including point counts, telemetry
          data using the Motus system, nest monitoring, and community science.
        </>
      ),
      imageUrl: "https://i.ibb.co/ch5GJWK/lewo.jpg",
      imageAlt: "woodpecker",
      descriptionOne: "Photo credit: Dan Barton",
    },
    {
      title: "Common Raven movement and Snowy Plover predation",
      paragraph: (
        <>
          Common Raven (Corvus corax) have been identified as the primary nest
          predator of federally threatened Western Snowy Plover (Charadrius
          nivosus nivosus) along the coast of California and Oregon. Raven
          populations have also substantially increased in much of the Snowy
          Plover’s range, and improving our knowledge of how these two
          populations interact is of timely interest to biologists working to
          manage both species. <br /> <br />
          Several students co-advised by Dr. Barbara Clucas and Micah Ashford
          (USFWS) have been involved on projects examining questions about
          predation of Snowy Plover nests in northern California. Research
          questions include human population and habitat effects on Common Raven
          abundance and distribution, and well as mesopredator predation rates
          on Snowy Plover nests.
        </>
      ),
      imageUrl: "https://i.ibb.co/x8n22Z2/raven-branch.jpg",
      imageAlt: "raven",
      // descriptionOne: "",
    },
    {
      title: "Bird communities in timber harvest retention",
      paragraph: (
        <>
          Retention of some mature trees within timber harvest units has been
          required by Forest Practices Rules since the late 1990s, with the goal
          of increasing structural complexity across the managed forest
          landscape. The Forest Practices Rules allow flexibility in where this
          retention is located and its spatial arrangement within the harvest
          unit, which presents harvest operators with decisions that could be
          informed by information about the effects of various retention
          arrangements on biodiversity. <br /> <br />
          The Applied Avian Ecology Lab has partnered with the National Council
          for Air and Stream Improvement and multiple public and private timber
          land owners to examine the effects of five variations of retention
          strategies on bird communities in Oregon and Washington.
        </>
      ),
      imageUrl: "https://i.ibb.co/P6tyQLt/20230517-142211.jpg",
      imageAlt: "trees",
      descriptionOne: "Photo credit: Aidan Healey",
    },
  ];
  return (
    <>
      <div class="fade-in">
        <div className="text-center">
          <h1 class="lg:py-6 mt-4 mb-4 text-gray-800 text-3xl lg:text-5xl font-bold leading-tight text-center mx-4 sm:mx-auto">
            Research
          </h1>
        </div>
        <div class="w-full border-t lg:px-0 items-center mb-8"></div>

        {research.map((item, index) => (
          <div
            key={index}
            class="mb-6 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-2 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div>
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                {item.title}
              </h2>
              <p class="mt-4 text-l text-gray-500">{item.paragraph}</p>

              <dl class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                class="rounded-lg bg-gray-100"
              />
              <dd class="mt-2 text-m text-gray-500 text-center">
                {item.descriptionOne}
              </dd>
            </div>
          </div>
        ))}
      </div>

      {/* Cal Poly logo */}
      <div class="border-t mt-4 pt-8 px-4 lg:px-0 items-center">
        <img
          src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
          class="mx-auto"
        />
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

export default Research;
