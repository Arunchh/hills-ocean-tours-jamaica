/**
 * Verified images for Jamaica cities, landmarks, and resort zones.
 * Sources: Wikimedia Commons (CC-licensed) and geotagged Unsplash where noted.
 * Client-uploaded tour carousels (/images/tours/clear-kayak, bamboo-rafting) are NOT listed here.
 */
export const locationImages = {
  /** Cities & service areas */
  cities: {
    montegoBay: "/images/locations/montego-bay.jpg",
    falmouthCruisePort: "/images/locations/falmouth-cruise-port.jpg",
    ochoRios: "/images/locations/ocho-rios.jpg",
    negril: "/images/locations/negril.jpg",
  },

  /** Named tourist landmarks & public spaces */
  landmarks: {
    dunnsRiverFalls: "/images/landmarks/dunns-river-falls.jpg",
    dunnsRiverBeach: "/images/landmarks/dunns-river-beach.jpg",
    blueHoleOchoRios: "/images/landmarks/blue-hole-ocho-rios.jpg",
    konokoFalls: "/images/landmarks/konoko-falls.jpg",
    ysFalls: "/images/landmarks/ys-falls.jpg",
    roseHallGreatHouse: "/images/landmarks/rose-hall-great-house.jpg",
    roseHallCorridor: "/images/landmarks/rose-hall-corridor.jpg",
    nineMileBobMarley: "/images/landmarks/nine-mile-bob-marley.jpg",
    nineMileVillage: "/images/landmarks/nine-mile-village.jpg",
    ricksCafeNegril: "/images/landmarks/ricks-cafe-negril.jpg",
    sevenMileBeachNegril: "/images/landmarks/seven-mile-beach-negril.jpg",
    floydsPelicanBar: "/images/landmarks/floyds-pelican-bar.jpg",
    luminousLagoon: "/images/landmarks/luminous-lagoon.jpg",
    falmouthPort: "/images/landmarks/falmouth-port.jpg",
    montegoBayBeach: "/images/landmarks/montego-bay-beach.jpg",
    grandPalladiumArea: "/images/landmarks/grand-palladium-area.jpg",
    ochoRiosHarbour: "/images/landmarks/ocho-rios-harbour.jpg",
    /** Jamaica's national bird (doctor bird) — hand-feeding at Rockland Bird Sanctuary */
    rocklandBirdSanctuary:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
  },

  /** Homepage hero — Doctor's Cave Beach, Montego Bay Hip Strip */
  heroMontegoBay: "/images/landmarks/montego-bay-beach.jpg",
} as const;

/** Map excursion slugs to their landmark image (excludes client-uploaded carousels). */
export const excursionLandmarkImages: Record<string, string> = {
  "blue-hole": locationImages.landmarks.blueHoleOchoRios,
  "dunns-river-falls": locationImages.landmarks.dunnsRiverFalls,
  "luminous-lagoon": locationImages.landmarks.luminousLagoon,
  "konoko-falls": locationImages.landmarks.konokoFalls,
  "ys-falls": locationImages.landmarks.ysFalls,
  "ricks-cafe": locationImages.landmarks.ricksCafeNegril,
  "seven-mile-beach": locationImages.landmarks.sevenMileBeachNegril,
  "floyds-pelican-bar": locationImages.landmarks.floydsPelicanBar,
  "nine-mile-bob-marley": locationImages.landmarks.nineMileBobMarley,
  "rose-hall-great-house": locationImages.landmarks.roseHallGreatHouse,
  "rockland-bird-sanctuary": locationImages.landmarks.rocklandBirdSanctuary,
  "atv-zipline-dunns-river-combo": locationImages.landmarks.dunnsRiverFalls,
  "atv-horseback-zipline-dunns-combo": locationImages.landmarks.dunnsRiverFalls,
  "dolphin-dunns-river-combo": locationImages.landmarks.dunnsRiverFalls,
  "swimming-with-dolphins": locationImages.cities.ochoRios,
  "booby-cay-lobster-lunch": locationImages.cities.negril,
  "romantic-beach-dinner": locationImages.landmarks.montegoBayBeach,
  "jet-car-rental": locationImages.landmarks.montegoBayBeach,
  "party-catamaran": locationImages.landmarks.montegoBayBeach,
  "private-yacht-charter": locationImages.cities.montegoBay,
  "private-catamaran-charter": locationImages.cities.montegoBay,
  "sea-tubing": locationImages.landmarks.montegoBayBeach,
  "jet-ski": locationImages.landmarks.montegoBayBeach,
  "parasailing": locationImages.landmarks.montegoBayBeach,
  atv: locationImages.cities.montegoBay,
  "weed-farm": locationImages.cities.montegoBay,
  "horseback-beach": locationImages.landmarks.montegoBayBeach,
  "horseback-riding": locationImages.cities.montegoBay,
  ziplining: locationImages.landmarks.blueHoleOchoRios,
};
