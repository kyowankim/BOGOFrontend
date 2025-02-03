// Type for the BogoStore response
export interface BogoStores {
    bogoFoods: BogoFood[];
    title: string;
    heroImageUrls: ImageUrl[];
    location: Location;
    etaRange: EtaRange;
    rating: Rating;
    categories: string[];
}

// Type for the BogoFood (food items)
export interface BogoFood {
    title: string;
    price: number;
    priceTagline: PriceTagline;
    buyXGetYItemPromotion: BuyXGetYItemPromotion;
}

// Type for the price tagline
export interface PriceTagline {
    text: string;
    textFormat: string;
    accessibilityText: string;
}

// Type for the Buy One Get One promotion
export interface BuyXGetYItemPromotion {
    buyQuantity: number;
    getQuantity: number;
    maxRedemptionCount: number;
}

// Type for the Hero Image URLs
export interface ImageUrl {
    url: string;
    width: number;
}

// Type for the Location data
export interface Location {
    address: string;
    streetAddress: string;
    city: string;
    country: string;
    postalCode: string;
    region: string;
    latitude: number;
    longitude: number;
    geo: Geo;
    locationType: string;
}

// Type for Geo coordinates and location details
export interface Geo {
    city: string;
    country: string;
    neighborhood: string;
    region: string;
}

// Type for the ETA Range (estimated time of arrival)
export interface EtaRange {
    text: string;
    iconUrl: string;
    accessibilityText: string;
}

// Type for the Rating data
export interface Rating {
    ratingValue: number;
    reviewCount: string;
}

// Example response type
export interface BogoStoreResponse {
    bogoStores: BogoStores[];
}
