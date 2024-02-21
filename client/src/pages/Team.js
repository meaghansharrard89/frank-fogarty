function Team() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment in the market
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center"
            >
              <div>
                <img
                  className="rounded-lg object-center object-cover w-full h-auto md:w-96 md:h-64"
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
