function Research() {
  return (
    <>
      <div class="bg-white fade-in">
        <div className="text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-10">
            Research
          </h1>
        </div>
        <div class="w-full border-t mt-12 pt-6 lg:px-0 items-center"></div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Research Title
            </h2>
            <p class="mt-4 text-gray-500">Paragraph about the research.</p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Origin</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Material</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Solid walnut base with rare earth magnets and powder coated
                  steel card cover
                </dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Dimensions</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  6.25&quot; x 3.55&quot; x 1.15&quot;
                </dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Finish</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Hand sanded and finished with natural oil
                </dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Includes</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Wood card tray and 3 refill packs
                </dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Considerations</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain and color vary with each
                  item.
                </dd>
              </div>
            </dl>
          </div>
          <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              class="rounded-lg bg-gray-100"
            />
          </div>
        </div>
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
