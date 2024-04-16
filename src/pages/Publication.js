function Publication() {
  const articles = [
    {
      year: "2023",
      citation: "Cited by:",
      title:
        "Northern spotted owl nesting habitat under high potential wildfire threats along the California Coastal Redwood Forest",
      authors: "LB Hysen, SA Cushman, FA Fogarty, EC Kelly, D Nayeri, HY Wan",
      publicationInfo: "Science of The Total Environment 890, 163414",
      url: "https://www.sciencedirect.com/science/article/pii/S0048969723020338",
      citedUrl: "",
    },
    {
      year: "2023",
      citation: "Cited by:",
      title:
        "Bird associations with floristics and physiognomy differ across five biogeographic subregions of the Great Basin, USA",
      authors: "M Wohlfeil Zillig, FA Fogarty, E Fleishman",
      publicationInfo: "Ornithological Applications 125 (1), duac040",
      url: "https://academic.oup.com/condor/article/125/1/duac040/6775901",
      citedUrl: "",
    },
    {
      year: "2022",
      citation: "Cited by:",
      title:
        "Multiple‐region, N‐mixture community model to assess associations of riparian area, fragmentation, and species richness",
      authors: "FA Fogarty, JDL Yen, E Fleishman, R Sollmann, A Ke",
      publicationInfo: "Ecological Applications 32 (8), e2698",
      url: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/eap.2698",
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
      url: "https://www.jstor.org/stable/48687382",
      citedUrl: "",
    },
    {
      year: "2022",
      citation: "Cited By: 2",
      title:
        "Bird abundance and diversity in shade coffee and natural forest in Kenya",
      authors: "FJ Ong’ondo, FA Fogarty III, P Njoroge, MD Johnson",
      publicationInfo: "Global Ecology and Conservation 39, e02296",
      url: "https://www.sciencedirect.com/science/article/pii/S2351989422002980",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2552124353781719020",
    },
    {
      year: "2021",
      citation: "Cited By: 7",
      title:
        "Bias in estimated breeding-bird abundance from closure-assumption violations",
      authors: "FA Fogarty, E Fleishman",
      publicationInfo: "Ecological Indicators 131, 108170",
      url: "https://www.sciencedirect.com/science/article/pii/S1470160X21008359",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=18008187177845557212",
    },
    {
      year: "2021",
      citation: "Cited By: 5",
      title:
        "Cover-based allometric estimate of aboveground biomass of a non-native, invasive annual grass (Bromus tectorum L.) in the Great Basin, USA",
      authors:
        "AL Mahood, E Fleishman, JK Balch, FA Fogarty, N Horning, M Leu, M Wohlfeil Zillig, BA Bradley",
      publicationInfo: "Journal of Arid Environments 193, 104582",
      url: "https://www.sciencedirect.com/science/article/pii/S0140196321001488",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=18029481114234366933",
    },
    {
      year: "2021",
      citation: "Cited By: 3",
      title:
        "Evaluating the ability of occurrence models to predict nest locations and associated vegetation",
      authors: "FA Fogarty, E Fleishman, M Wohlfeil Zillig",
      publicationInfo: "Ibis 164, 519-534",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ibi.13020",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16584289835553021355",
    },
    {
      year: "2020",
      citation: "Cited By: 61",
      title:
        "Fire, livestock grazing, topography, and precipitation affect occurrence and prevalence of cheatgrass (Bromus tectorum) in the central Great Basin, USA",
      authors:
        "MA Williamson, E Fleishman, RC Mac Nally, JC Chambers, BA Bradley, DS Dobkin, DI Board, FA Fogarty, N Horning, M Leu, M Wohlfeil Zillig",
      publicationInfo: "Biological Invasions 22, 663-680",
      url: "https://link.springer.com/article/10.1007/s10530-019-02120-8",
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
      url: "https://zslpublications.onlinelibrary.wiley.com/doi/full/10.1002/rse2.144",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11394627679703045956",
    },
    {
      year: "2020",
      citation: "Cited By: 6",
      title:
        "Associations of breeding-bird abundance with climate vary among species and trait-based groups in southern California",
      authors: "FA Fogarty, DR Cayan, LL DeHaan, E Fleishman",
      publicationInfo: "Plos one 15 (3), e0230614",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0230614",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=405882113526041822",
    },
    {
      year: "2019",
      citation: "Cited By: 12",
      title:
        "Relating beta diversity of birds and butterflies in the Great Basin to spatial resolution, environmental variables and trait‐based groups",
      authors: "JDL Yen, E Fleishman, F Fogarty, DS Dobkin",
      publicationInfo: "Global Ecology and Biogeography 28 (3), 328-340",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/geb.12852",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2884246059085974581",
    },
    {
      year: "2019",
      citation: "Cited By: 24",
      title:
        "Quantifying ecological integrity of terrestrial systems to inform management of multiple-use public lands in the United States",
      authors:
        "SK Carter, E Fleishman, IIF Leinwand, CH  Flather, NB Carr, FA Fogarty, M Leu, BR Noon, ME Wohlfeil, DJA Wood",
      publicationInfo: "Environmental management 64, 1-19",
      url: "https://link.springer.com/article/10.1007/s00267-019-01163-w",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=509578679166075591",
    },
    {
      year: "2018",
      citation: "Cited By: 2",
      title:
        "Response to Horns et al. 2018:'Using opportunistic citizen science data to estimate avian population trends' Biological Conservation 221, 151-159",
      authors: "FA Fogarty, ME Wohlfeil, E Fleishman",
      publicationInfo: "Biological Conservation 226, 329-330",
      url: "https://ui.adsabs.harvard.edu/abs/2018BCons.226..329F/abstract",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16341286215214688469",
    },
    {
      year: "2016",
      citation: "Cited By: 2",
      title:
        "Recent occurrences and potential for establishment of Egyptian Goose and Agapornis lovebirds in Yolo County, California",
      authors: "FA Fogarty, C Dunford",
      publicationInfo: "Central Valley Birds 19 (4), 69-81",
      url: "https://www.cvbirds.org/wp-content/uploads/2017/11/2Fogarty_Dunford-RecentVol19no4.pdf",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=8862008226485179094",
    },
    {
      year: "2011",
      citation: "Cited By: 190",
      title:
        "Sound, stress, and seahorses: the consequences of a noisy environment to animal health",
      authors:
        "PA Anderson, IK Berzins, FA Fogarty, HJ Hamlin, LJ Guillette Jr",
      publicationInfo: "Aquaculture 311 (1-4), 129-138",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S004484861000760X",
      citedUrl:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1122933066536105848",
    },
  ];

  return (
    <>
      <div className="fade-in">
        <h2 className="lg:py-6 mt-4 text-gray-800 text-3xl lg:text-5xl font-bold mb-4 leading-tight text-center mx-4 sm:mx-auto">
          Publications
        </h2>
        <div className="w-full border-t lg:px-0 items-center"></div>
        <div className="lg:px-8">
          <div className="lg:mx-0 text-center w-full"></div>
          <div className="flex flex-col items-center">
            {articles.map((article, index) => (
              <div
                key={index}
                className="px-4 lg:px-0 items-center w-full max-w-3xl"
              >
                <article className="flex flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-s"></div>
                  <div className="group relative">
                    <a href={article.url} target="_blank">
                      <h3 className="pt-6 mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {article.title} ({article.year})
                      </h3>
                    </a>
                  </div>
                  <div className="relative mt-6 flex items-center gap-x-2">
                    <div className="leading-6">
                      <p className="font-semibold text-gray-900 text-lg">
                        {article.authors}
                      </p>
                      <br />
                      <p className="text-gray-600 text-lg">
                        {article.publicationInfo}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="w-full border-t mt-4 lg:px-0 items-center"></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cal Poly logo */}
      <div className="mt-4 pt-4 px-4 lg:px-0 items-center">
        <img
          src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
          className="mx-auto"
          alt="Cal Poly Logo"
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

export default Publication;
