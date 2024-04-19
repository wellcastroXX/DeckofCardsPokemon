interface Deck {
    id: string;
    name: string;
}

interface MyDeck {
    decks: Deck[];
}

export interface Card {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    hp: string;
    types: string[];
    evolvesFrom: string;
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances: Resistance[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: SetInfo;
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    images: Images;
    tcgplayer: TcgPlayerInfo;
    cardmarket: CardMarketInfo;
  }
  
  interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }
  
  interface Weakness {
    type: string;
    value: string;
  }
  
  interface Resistance {
    type: string;
    value: string;
  }
  
  interface SetInfo {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: SetImages;
  }
  
  interface Legalities {
    unlimited: string;
    expanded: string;
  }
  
  interface SetImages {
    symbol: string;
    logo: string;
  }
  
  interface Images {
    small: string;
    large: string;
  }
  
  interface TcgPlayerInfo {
    url: string;
    updatedAt: string;
    prices: Prices;
  }
  
  interface Prices {
    normal: PriceInfo;
    reverseHolofoil: PriceInfo;
  }
  
  interface PriceInfo {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
  }
  
  interface CardMarketInfo {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
  }
  
  interface CardMarketPrices {
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
  }
  