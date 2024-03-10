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
        "Matthew A Williamson, Erica Fleishman, Ralph C Mac Nally, Jeanne C Chambers, Bethany A Bradley, David S Dobkin, David I Board, Frank A Fogarty, Ned Horning, Matthias Leu, Martha Wohlfeil Zillig",
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
        "Sarah K Carter, Erica Fleishman, Ian IF Leinwand, Curtis H Flather, Natasha B Carr, Frank A Fogarty, Matthias Leu, Barry R Noon, Martha E Wohlfeil, David JA Wood",
      publicationInfo: "Environmental management 64, 1-19",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:9yKSN-GCB0IC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=509578679166075591",
    },
    {
      year: "2019",
      citation: "Cited By: 12",
      title:
        "Relating beta diversity of birds and butterflies in the Great Basin to spatial resolution, environmental variables and trait‐based groups",
      authors: "JDL Yen, E Fleishman, F Fogarty, DS Dobkin",
      publicationInfo: "Global Ecology and Biogeography 28 (3), 328-340",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:qjMakFHDy7sC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2884246059085974581",
    },
    {
      year: "2013",
      citation: "Cited By: 8",
      title: "The capacity to endure: Following nature’s lead",
      authors: "F Fogarty, A Villamagna, A Whitley, K Pippins",
      publicationInfo: "Sustainability 5 (6), 2480-2494",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:u-x6o8ySG0sC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=15872515228145888654",
    },
    {
      year: "2021",
      citation: "Cited By: 7",
      title:
        "Bias in estimated breeding-bird abundance from closure-assumption violations",
      authors: "FA Fogarty, E Fleishman",
      publicationInfo: "Ecological Indicators 131, 108170",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:_FxGoFyzp5QC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=18008187177845557212",
    },
    {
      year: "2020",
      citation: "Cited By: 6",
      title:
        "Associations of breeding-bird abundance with climate vary among species and trait-based groups in southern California",
      authors: "FA Fogarty, DR Cayan, LL DeHaan, E Fleishman",
      publicationInfo: "Plos one 15 (3), e0230614",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:2osOgNQ5qMEC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=405882113526041822",
    },
    {
      year: "2021",
      citation: "Cited By: 5",
      title:
        "Cover-based allometric estimate of aboveground biomass of a non-native, invasive annual grass (Bromus tectorum L.) in the Great Basin, USA",
      authors:
        "Adam L Mahood, Erica Fleishman, Jennifer K Balch, Frank Fogarty, Ned Horning, Matthias Leu, Martha Zillig, Bethany A Bradley",
      publicationInfo: "Journal of Arid Environments 193, 104582",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:WF5omc3nYNoC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=18029481114234366933",
    },
    {
      year: "2021",
      citation: "Cited By: 3",
      title:
        "Evaluating the ability of occurrence models to predict nest locations and associated vegetation",
      authors: "FA Fogarty, E Fleishman, MW Zillig",
      publicationInfo: "Ibis",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:LkGwnXOMwfcC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16584289835553021355",
    },
    {
      year: "2022",
      citation: "Cited By: 2",
      title:
        "Bird abundance and diversity in shade coffee and natural forest in Kenya",
      authors: "FJ Ong’ondo, FA Fogarty III, P Njoroge, MD Johnson",
      publicationInfo: "Global Ecology and Conservation 39, e02296",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:5nxA0vEk-isC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2552124353781719020",
    },
    {
      year: "2018",
      citation: "Cited By: 2",
      title:
        "Response to Horns et al. 2018:'Using opportunistic citizen science data to estimate avian population trends' Biological Conservation 221, 151-159",
      authors: "FA Fogarty, ME Wohlfeil, E Fleishman",
      publicationInfo: "Biological Conservation 226, 329-330",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:YsMSGLbcyi4C",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16341286215214688469",
    },
    {
      year: "2016",
      citation: "Cited By: 2",
      title:
        "Recent occurrences and potential for establishment of Egyptian Goose and Agapornis lovebirds in Yolo County, California",
      authors: "F Fogarty, C Dunford",
      publicationInfo: "Central Valley Birds 19 (4), 69-81",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:d1gkVwhDpl0C",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=8862008226485179094",
    },
    {
      year: "2021",
      citation: "Cited By: 1",
      title:
        "Nest site locations of breeding birds in the Wassuk Range, Sweetwater Mountains, and east slope of the Sierra Nevada, Nevada and California",
      authors: "FA Fogarty, E Fleishman",
      publicationInfo: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:ufrVoPGSRksC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3067434017965989516",
    },
    {
      year: "2017",
      citation: "Cited By: 1",
      title:
        "Methods for Assessment of Species Richness and Occupancy across Space, Time, Taxonomic Groups, and Ecoregions",
      authors: "E Fleishman, F Fogarty",
      publicationInfo:
        "Field Guide and Natural History of Butterflies on the Western Edge of the Great Basin",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:3fE2CSJIrl8C",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13796751977111255630",
    },
    {
      year: "2015",
      citation: "Cited By: 1",
      title:
        "Field Guide and Natural History of Breeding Birds on the Western Edge of the Great Basin",
      authors: "F Fogarty, E Fleishman",
      publicationInfo:
        "Davis, California. Available at: https://www. serdpestcp. org/Tools-and-Training/Resource-Conservation-and-Climate-Change/Species-Management. Accessed August",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:W7OEmFMy1HYC",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=4324168302300532773",
    },
    {
      year: "2023",
      citation: "Cited by:",
      title:
        "Northern spotted owl nesting habitat under high potential wildfire threats along the California Coastal Redwood Forest",
      authors: "LB Hysen, SA Cushman, FA Fogarty, EC Kelly, D Nayeri, HY Wan",
      publicationInfo: "Science of The Total Environment 890, 163414",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:8k81kl-MbHgC",
      citedUrl: "",
    },
    {
      year: "2023",
      citation: "Cited by:",
      title:
        "Solid Air. Invisible Killer: Saving Billions of Birds from Windows",
      authors: "MB Shumar",
      publicationInfo: "Ornithological Applications 125 (1), duac043",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:0EnyYjriUFMC",
      citedUrl: "",
    },
    {
      year: "2023",
      citation: "Cited by:",
      title:
        "Bird associations with floristics and physiognomy differ across five biogeographic subregions of the Great Basin, USA",
      authors: "MW Zillig, FA Fogarty, E Fleishman",
      publicationInfo: "Ornithological Applications 125 (1), duac040",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:UebtZRa9Y70C",
      citedUrl: "",
    },
    {
      year: "2022",
      citation: "Cited by:",
      title:
        "TRACKING ELEVATIONAL MOVEMENTS OF SONGBIRDS WITHIN THE BREEDING SEASON WITH UNMANNED AERIAL VEHICLES",
      authors:
        "Erica Fleishman, Frank Fogarty, Luke George, Ned Horning, Chris Robertson, James Saracco, Martha Zillig",
      publicationInfo: "Fall Meeting 2022",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&citation_for_view=ftLrzNgAAAAJ:hqOjcs7Dif8C",
      citedUrl: "",
    },
    {
      year: "2022",
      citation: "Cited by:",
      title:
        "Multiple‐region, N‐mixture community model to assess associations of riparian area, fragmentation, and species richness",
      authors: "FA Fogarty, JDL Yen, E Fleishman, R Sollmann, A Ke",
      publicationInfo: "Ecological Applications 32 (8), e2698",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&cstart=20&pagesize=80&citation_for_view=ftLrzNgAAAAJ:roLk4NBRz8UC",
      citedUrl: "",
    },
    {
      year: "2022",
      citation: "Cited by:",
      title:
        "Habitat Area, Not Fragmentation, Associated with Breeding Bird Species Richness",
      authors: "FA Fogarty, JDL Yen, E Fleishman, R Sollmann, A Ke",
      publicationInfo:
        "Bulletin of the Ecological Society of America 103 (4), 1-3",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&cstart=20&pagesize=80&citation_for_view=ftLrzNgAAAAJ:Se3iqnhoufwC",
      citedUrl: "",
    },
    {
      year: "2019",
      citation: "Cited by:",
      title:
        "Recent expansion of the breeding range of Say's Phoebe (Sayornis saya) in California's Central Valley",
      authors:
        "Chris Dunford, Frank Fogarty, Jeff Davis, Joan M. Humphrey, Tim Mangum, Viola Saima-Barklow, Andrew Engilis",
      publicationInfo: "Central Valley Birds 22 (3), 45-59",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&cstart=20&pagesize=80&citation_for_view=ftLrzNgAAAAJ:Tyk-4Ss8FVUC",
      citedUrl: "",
    },
    {
      year: "2018",
      citation: "Cited by:",
      title: "FIELD GUIDE",
      authors: "E Fleishman, F Fogarty",
      publicationInfo: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ftLrzNgAAAAJ&cstart=20&pagesize=80&citation_for_view=ftLrzNgAAAAJ:MXK_kJrjxJIC",
      citedUrl: "",
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
