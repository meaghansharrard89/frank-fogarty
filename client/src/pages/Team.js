function Team() {
  return (
    <>
      <div class="fade-in">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center pt-10">
          Our Team
        </h1>
        <div class="w-full border-t mt-12 pt-6 lg:px-0 items-center"></div>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="top-shadow w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center"
              >
                <div>
                  <img
                    className="rounded-lg object-center object-cover w-full h-auto md:w-100 md:h-80"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="text-center py-8 sm:py-6 px-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    {member.name}
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    {member.job}
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
              Meaghan Sharrard 2024
            </div>

            <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
          </div>
        </footer>
      </div>
    </>
  );
}

const teamMembers = [
  {
    name: "Dany Bailey",
    job: "Software Engineer",
    bio: "Jessica Smith is a passionate software engineer with over a decade of experience in the tech industry. With a Bachelor's degree in Computer Science from Stanford University, she embarked on her journey to revolutionize the digital world. Jessica specializes in full-stack web development, leveraging her expertise in languages such as JavaScript, Python, and Java.",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lucy Carter",
    job: "Graphic Designer",
    bio: "Lucy Carter is a creative graphic designer with a passion for crafting visually stunning designs. With a Bachelor's degree in Graphic Design from Parsons School of Design, she brings a unique perspective to every project she tackles. Lucy's expertise lies in branding, typography, and user interface design.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Jade Bradley",
    job: "Dev Ops",
    bio: "Jade Bradley is a seasoned DevOps engineer with a knack for streamlining development processes and ensuring smooth deployments. With extensive experience in cloud computing platforms such as AWS and Azure, Jade excels at optimizing infrastructure and automating workflows to enhance efficiency and reliability.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
  },
];

export default Team;
