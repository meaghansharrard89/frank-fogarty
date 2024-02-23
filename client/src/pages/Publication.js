function Publication() {
  const articles = [
    {
      year: "2011",
      citation: "Cited By: 190",
      title:
        "Sound, stress, and seahorses: the consequences of a noisy environment to animal health",
      authors: "PA Anderson, IK Berzins, F Fogarty, HJ Hamlin, LJ Guillette Jr",
      publicationInfo: "Aquaculture 311 (1-4), 129-138",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:u5HHmVD_uO8C",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1122933066536105848",
    },
    {
      year: "2020",
      citation: "Cited By: 61",
      title:
        "Fire, livestock grazing, topography, and precipitation affect occurrence and prevalence of cheatgrass (Bromus tectorum) in the central Great Basin, USA",
      authors:
        "MA Williamson, E Fleishman, RC Mac Nally, JC Chambers, BA Bradley, ...",
      publicationInfo: "Biological Invasions 22, 663-680",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:zYLM7Y9cAGgC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13094178485188183164",
    },
    {
      year: "2020",
      citation: "Cited By: 31",
      title:
        "Mapping of land cover with open‐source software and ultra‐high‐resolution imagery acquired with unmanned aerial vehicles",
      authors:
        "N Horning, E Fleishman, PJ Ersts, FA Fogarty, M Wohlfeil Zillig",
      publicationInfo:
        "Remote Sensing in Ecology and Conservation 6 (4), 487-497",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:IjCSPb-OGe4C",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11394627679703045956",
    },
    {
      year: "2019",
      citation: "Cited By: 24",
      title:
        "Quantifying ecological integrity of terrestrial systems to inform management of multiple-use public lands in the United States",
      authors:
        "SK Carter, E Fleishman, IIF Leinwand, CH Flather, NB Carr, FA Fogarty, ...",
      publicationInfo: "Environmental management 64, 1-19",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:9yKSN-GCB0IC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=509578679166075591",
    },
  ];

  return (
    <>
      <div className="bg-white py-12 fade-in">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
          Publications
        </h2>
        <div className="w-full border-t mt-8 lg:px-0 items-center"></div>
        <div className="lg:px-8">
          <div className="lg:mx-0 text-center w-full"></div>
          <div className="flex flex-col items-center">
            {articles.map((article, index) => (
              <div
                key={index}
                className="mt-12 pt-12 px-4 lg:px-0 items-center w-full max-w-3xl"
              >
                <article className="flex flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-s">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      {article.year}
                    </time>
                    <a
                      href={article.citedUrl}
                      target="_blank"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {article.citation}
                    </a>
                  </div>
                  <div className="group relative">
                    <a href={article.url} target="_blank">
                      <h3 className="pt-6 mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {article.title}
                      </h3>
                    </a>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-m leading-6">
                      <p className="font-semibold text-gray-900">
                        {article.authors}
                      </p>
                      <p className="text-gray-600">{article.publicationInfo}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cal Poly logo */}
      <div className="border-t mt-12 pt-12 px-4 lg:px-0 items-center">
        <img
          src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
          className="mx-auto"
          alt="Cal Poly Logo"
        />
      </div>

      {/* <!-- footer --> */}
      <footer className="border-t mt-12 pt-6 px-4 lg:px-0 bg-greenAccent text-gray-300">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/5"></div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 text-center pb-6">
            Meaghan Sharrard 2024
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}

export default Publication;
