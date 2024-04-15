function Team() {
  return (
    <>
      <div className="fade-in">
        <h1 className="lg:py-6 mb-4 mt-4 text-gray-800 text-3xl lg:text-5xl font-bold leading-tight text-center mx-4 sm:mx-auto">
          Current Lab Members
        </h1>
        <div className="w-full border-t lg:px-0 items-center mb-6"></div>

        <div class="mt-6 mb-14 px-4 lg:px-0 items-center">
          <img
            src="https://i.ibb.co/CWXKW9q/editedlabimage.jpg"
            alt="Team"
            class="mx-auto rounded-md"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-4">
          <div className="flex justify-center flex-wrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="pb-8 flex flex-col items-center pt-4 w-full mx-auto md:flex-row md:items-start"
              >
                <div className="w-full md:w-1/4">
                  <img
                    className="rounded-lg w-full h-auto shadow-md"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="w-full md:w-3/4 px-4 pt-2">
                  <p className="text-xl md:text-3xl text-black font-bold mb-2">
                    {member.name}
                  </p>
                  <p className="text-lg md:text-2xl text-black italic mb-2">
                    {member.job}
                  </p>
                  <p className="text-base md:text-lg text-black font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="lg:py-6 mb-4 mt-4 text-gray-800 text-3xl lg:text-5xl font-bold leading-tight text-center mx-4 sm:mx-auto">
          Lab Alumni
        </h1>
        <div className="w-full border-t lg:px-0 items-center pb-6"></div>
        <div className="container mx-auto px-4 lg:px-4">
          <div className="flex justify-center flex-wrap">
            {alumniTeamMembers.map((member, index) => (
              <div
                key={index}
                className="pb-8 flex flex-col items-center w-full md:flex-row md:items-start"
              >
                <div className="w-full md:w-1/4">
                  <img
                    className="rounded-lg w-full h-auto shadow-md"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="w-full md:w-3/4 px-4 pt-4 pb-4">
                  <p className="text-xl md:text-3xl text-black font-bold mb-2">
                    {member.name}
                  </p>
                  <p className="text-lg md:text-2xl text-black italic mb-2">
                    {member.job}
                  </p>
                  <p className="text-base md:text-lg text-black font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cal Poly logo */}
        <div class="border-t mt-2 pt-8 px-4 lg:px-0 items-center">
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
      </div>
    </>
  );
}

const teamMembers = [
  {
    name: "Frank Fogarty",
    job: "Assistant Professor",
    bio: "In my lab we study how potential disturbances, including wildfire, climate change, habitat fragmentation, timber harvest, and cattle grazing, interact with birds and their communities. I am also interested in methodologies for evaluating occupancy and abundance, especially as it relates to the kinds of messy, realistic data that are used by wildlife professionals. I am deeply committed to my work as a teacher, and leveraging my position to help the field of wildlife biology become more inclusive and equitable.",
    image: "https://i.ibb.co/2SPHqsT/frankedit.jpg",
  },
  {
    name: "Brittany Welch",
    job: "M.S. student",
    bio: "I'm studying Lewis's woodpeckers in the Eastern Cascades of Oregon to understand how their abundance is influenced by habitat associations and landscape connectivity in burned and unburned forests.",
    image: "https://i.ibb.co/K7cs4XS/brittanyedit.jpg",
  },
  {
    name: "Alon Averbuj",
    job: "M.S. student",
    bio: "Hi, I'm Alon. I grew up amongst the chaparral and beaches near Solana Beach, San Diego where I fell in love with ecology and GIS! I am studying the habitat suitability of the Humboldt Coast for common ravens, and their interactions with the threatened western snowy plovers.",
    image: "https://i.ibb.co/QnyQKng/alonedit.jpg",
  },
  {
    name: "Cameron Piper",
    job: "M.S. student",
    bio: "Hiya! My name is Cameron! I grew up in Denver, Colorado, and completed my bachelor's in Conservation Biology from SUNY College of Environmental Science & Forestry. Since graduating, I have been lucky to work as a field scientist and environmental educator in some of the most beautiful places around the world like Mongolia, Yellowstone, the Northern Mariana Islands, the Sierra Nevada, and the White Mountains. I have worked with many different taxa, but birds stole my heart after my first field job studying red-headed woodpeckers. I am very excited to return to the wild world of woodpeckers with Drs. Frank Fogarty and Ho Yi Wan studying Lewis’s Woodpecker migration and behavioral ecology in central Oregon.",
    image: "https://i.ibb.co/BnLs2WK/cameronedit.jpg",
  },
  {
    name: "Rachel Higuera",
    job: "Honors undergraduate student",
    bio: "I am a passionate birder investigating the influence of macroinvertebrate communities on waterfowl richness in the Arcata Marsh and Wildlife Sanctuary. I am very interested in avian behavior, migration, and trophic cascades.",
    image: "https://i.ibb.co/0y3cG9T/racheledit.jpg",
  },
  {
    name: "Kiana Elliott",
    job: "Honors undergraduate student",
    bio: "I'm an undergrad student majoring in wildlife management and conservation and minoring in environmental ethics. Currently, I'm preparing to work on my senior project, then I'll continue my education in grad school. I fell in love with birds when I took an Ornithology course and went birding for the first time. Working my first field technician job in Oregon solidified that I want to further study our feathered friends.",
    image: "https://i.ibb.co/ftPLDPD/kianaedit.jpg",
  },
];

const alumniTeamMembers = [
  {
    name: "Marina Osechinskaya",
    job: "Honors undergraduate student",
    bio: "I graduated in December of 2023 with a B.S. degree in Wildlife Management and Conservation. For my honors thesis project I analyzed the predation rates of western snowy plover nests in Recovery Unit 2 (Del Norte, Humboldt, and Mendocino counties) by mesopredators such as skunks and coyotes. I also spent a considerable amount of time working on a Butterfly Conservation Program through Sequoia Park Zoo with endangered local butterfly species. I enjoy many outdoor activities such as birding, biking, hiking, and camping.",
    image: "https://i.ibb.co/58XhcsK/marinaedit.png",
  },
  {
    name: "Jessica Angulo",
    job: "Honors undergraduate student",
    bio: "I was able to work on my REU/Senior Thesis project with the Avian Ecology lab. My project looked at understanding microclimate factors influencing changes in bird biomass and species richness during the breeding season in the HJ Andrews Experimental forest. The degree to which microclimate influences bird biomass and species richness remains largely unexplored which piqued my interest in this project. I was able to gain, feedback, advice, and valuable insights via Frank and grad students on my project. I was also able to learn more about what it takes to do a scientific project by listening to lab discussions about models, presentations, and articles.",
    image: "https://i.ibb.co/PjX1n6q/jessicaedit.png",
  },
];

export default Team;
