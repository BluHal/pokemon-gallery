type PokemonCard = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  attacks: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
      standard: string;
      expanded: string;
    };
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
    standard: string;
    expanded: string;
  };
  regulationMark: string;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
  cardmarket: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number;
      lowPrice: number;
      trendPrice: number;
      germanProLow: number;
      suggestedPrice: number;
      reverseHoloSell: number;
      reverseHoloLow: number;
      reverseHoloTrend: number;
      lowPriceExPlus: number;
      avg1: number;
      avg7: number;
      avg30: number;
      reverseHoloAvg1: number;
      reverseHoloAvg7: number;
      reverseHoloAvg30: number;
    };
  };
};

type Collection = {
  cardIds: CollectionRow[];
};

type CollectionRow = {
  id: number;
  cardId: string;
  imageUrl: string;
};
