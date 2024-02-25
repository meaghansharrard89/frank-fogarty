function Research() {
  const research = [
    {
      title: "Title",
      paragraph: "This is the paragraph.",
      imageUrl:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=2000&hei=1100&scl=2.0",
      imageAlt: "bird",
      titleOne: "Title one",
      descriptionOne: "Description one.",
      titleTwo: "Title two",
      descriptionTwo: "Description two.",
    },
    {
      title: "Title",
      paragraph: "This is the paragraph.",
      imageUrl:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=2000&hei=1100&scl=2.0",
      imageAlt: "bird",
      titleOne: "Title one",
      descriptionOne: "Description one.",
      titleTwo: "Title two",
      descriptionTwo: "Description two.",
    },
  ];
  return (
    <>
      <div class="bg-white fade-in">
        <div className="text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-10">
            Research
          </h1>
        </div>
        <div class="w-full border-t mt-12 pt-6 lg:px-0 items-center mb-8"></div>

        {research.map((item, index) => (
          <div
            key={index}
            class="mb-16 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {item.title}
              </h2>
              <p class="mt-4 text-xl text-gray-500">{item.paragraph}</p>

              <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                  <dt class="text-xl font-bold text-gray-900">
                    {item.titleOne}
                  </dt>
                  <dd class="mt-2 text-m text-gray-500">
                    {item.descriptionOne}
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="text-xl font-bold text-gray-900">
                    {item.titleTwo}
                  </dt>
                  <dd class="mt-2 text-m text-gray-500">
                    {item.descriptionTwo}
                  </dd>
                </div>
              </dl>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                class="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        ))}
      </div>

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
    </>
  );
}

export default Research;
