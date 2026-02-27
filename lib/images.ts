/**
 * All images sourced directly from thegoodsshed.co.uk
 * Each key describes exactly what the image shows — verified from the site's own page context.
 */

const BASE = "https://thegoodsshed.co.uk/wp-content/uploads";
const THEME = "https://thegoodsshed.co.uk/wp-content/themes/divi-child/images";

// ── The Goods Shed Market Hall interior (Victorian railway shed) ─────────────
export const MARKET_FLOOR = `${THEME}/goods-shed-market-floor-1-lg.jpg`;

// ── Fish Stall gallery (these are ALL fish stall images — do NOT use as market interiors) ──
export const FISH_GALLERY = {
  mackerel1: `${BASE}/2015/10/the-goods-shed-1840.jpg`,
  mackerel2: `${BASE}/2015/10/the-goods-shed-1885.jpg`,
  mackerel3: `${BASE}/2015/10/the-goods-shed-7515.jpg`,
};

// ── The Shed & Market (general shots — contact/market pages) ─────────────────
export const SHED = {
  /** Market shop floor — contact page hero */
  shop:    `${BASE}/2015/11/good-shed-shop-2155-3.jpg`,
  /** Market hall — general stall/produce overview */
  market1: `${BASE}/2013/09/MG_0950.jpg`,
  /** Market hall — daytime produce display */
  market2: `${BASE}/2015/10/EU0A1845.jpg`,
  /** Market stall — wide overview shot */
  market3: `${BASE}/2015/10/MG_9361-2.jpg`,
};

// ── Restaurant ───────────────────────────────────────────────────────────────
export const RESTAURANT = {
  /** Restaurant looking onto market — wide table shot */
  hero:         `${BASE}/2016/05/goods-shed-restaurant-7748.jpg`,
  /** Candlelit dinner service */
  candles:      `${BASE}/2016/05/goods-shed-restaurant-7769-2.jpg`,
  /** Restaurant tables set for lunch */
  lunch:        `${BASE}/2016/05/goods-shed-restaurant-7779-2.jpg`,
  /** Plated dish — restaurant kitchen */
  dish1:        `${BASE}/2016/05/goods-shed-restaurant-7829-2.jpg`,
  /** Plated dish close-up */
  dish2:        `${BASE}/2016/05/goods-shed-restaurant-7841.jpg`,
  /** Plated dish — evening service */
  dish3:        `${BASE}/2016/05/goods-shed-restaurant-7841-2.jpg`,
  /** Chefs cooking in open kitchen */
  kitchen:      `${BASE}/2016/05/goods-shed-restaurant-7858-2.jpg`,
  /** Table setting with wine */
  tableSetting: `${BASE}/2016/05/goods-shed-restaurant-7898-2.jpg`,
  /** Restaurant interior — evening atmosphere */
  evening:      `${BASE}/2016/05/goods-shed-restaurant-7975.jpg`,
};

// ── Veg Stall ────────────────────────────────────────────────────────────────
export const VEG = {
  /** Veg stall — fresh produce display (2024) */
  hero:         `${BASE}/2024/03/veg-stall-gs.jpg`,
  /** Veg stall produce laid out */
  produce:      `${BASE}/2015/10/MG_7752.jpg`,
  /** Veg stall — seasonal greens */
  greens:       `${BASE}/2015/10/MG_7757.jpg`,
};

// ── Butchery ─────────────────────────────────────────────────────────────────
export const BUTCHERY = {
  /** Butchery header — butcher at counter */
  hero:         `${BASE}/2012/01/header-butcher-in-kent-01.jpg`,
  /** Butchery — meat counter detail */
  counter:      `${BASE}/2010/01/header-butcher-in-kent-01.jpg`,
  /** Meat on the counter */
  meat1:        `${BASE}/2015/10/MG_2133.jpg`,
  /** Butchery — whole carcass */
  meat2:        `${BASE}/2015/10/MG_2381.jpg`,
};

// ── Fish Stall ───────────────────────────────────────────────────────────────
export const FISH = {
  /** Fish stall — fresh fish on display (2024) */
  hero:         `${BASE}/2024/03/fish-stall-the-goods-shed-2.jpg`,
  /** Fish stall thumbnail (smaller) */
  thumbnail:    `${BASE}/2012/06/gs-fish-stall-1834-400x400.jpg`,
};

// ── Cheese Makers of Canterbury ──────────────────────────────────────────────
export const CHEESE = {
  /** Cheese counter — selection on display */
  hero:         `${BASE}/2011/06/07-chesemakers-canterbury-2674.jpg`,
  /** English cheese specialist — front counter */
  counter:      `${BASE}/2011/06/01-english-cheese-specialist-3031.jpg`,
  /** Cheese stall — various hard cheeses */
  selection:    `${BASE}/2011/06/06-chesemakers-canterbury-2670.jpg`,
  /** Cheese stall — closeup of cut cheese */
  closeup:      `${BASE}/2011/06/14-chesemakers-canterbury-2639.jpg`,
  /** Artisan cheese board */
  board:        `${BASE}/2011/06/04-english-cheese-specialist-3067.jpg`,
};

// ── Docker (Bakery & Drinks) ─────────────────────────────────────────────────
export const DOCKER = {
  /** Docker — sourdough and craft beer on display */
  hero:         `${THEME}/docker-bread-beer-the-goods-shed-1.jpg`,
  /** Docker — banner image with bread and drinks */
  banner:       `${THEME}/docker-bread-beer-the-goods-shed-banner.jpg`,
};

// ── Gill's Café & Delicatessen ───────────────────────────────────────────────
export const GILLS = {
  /** Gill's Café banner — café interior with counter */
  hero:         `${THEME}/gills-delicatessen-cafe-the-goods-shed-banner.jpg`,
  /** General café / deli counter shot (used on Gill's / Murray's pages) */
  deli:         `${BASE}/2011/04/MG_2655.jpg`,
};

// ── Murray's General Store ───────────────────────────────────────────────────
export const MURRAYS = {
  /** Murray's store — interior produce shelves */
  hero:         `${BASE}/2011/04/murray-7095.jpg`,
  /** Murray's — deli counter */
  counter:      `${BASE}/2011/04/murray-7312.jpg`,
  /** Murray's — Kent fine foods display */
  fineFoods:    `${BASE}/2011/04/08-fine-food-supplier-kent-2703.jpg`,
  /** Murray's — European fine foods */
  european:     `${BASE}/2011/04/09-fine-food-supplier-kent-2730.jpg`,
  /** Murray's christmas selection */
  christmas:    `${BASE}/2011/04/murrays-christmas-8248-400x284.jpg`,
};

// ── Patriana Charcuterie ─────────────────────────────────────────────────────
export const PATRIANA = {
  /** Patriana main stall image (2022) */
  hero:         `${BASE}/2022/11/patriana-charcuterie.jpeg`,
  /** Basque cured meat selection */
  basque:       `${BASE}/2011/04/01-basque-cured-meat-2974.jpg`,
  /** Finocchiona sausage */
  finocchiona:  `${BASE}/2022/11/Finocchiona.jpg`,
  /** Guanciale */
  guanciale:    `${BASE}/2022/11/Guanciale.jpg`,
  /** Speck */
  speck:        `${BASE}/2022/11/Speck.jpg`,
  /** Patriana stall display */
  stall:        `${BASE}/2011/04/01-patriana-charcuterie-2710.jpg`,
};

// ── Press Wine Services ──────────────────────────────────────────────────────
export const WINE = {
  /** Canterbury wine shop — front of stall */
  hero:         `${BASE}/2010/01/01-canterbury-wine-shop-2891.jpeg`,
  /** Press Wine Services — wine selection on shelves */
  shelves:      `${BASE}/2011/04/01-press-wines-services-2.jpg`,
  /** Wine stall — bottles arranged */
  bottles:      `${BASE}/2011/04/02-press-wines-services-2.jpg`,
  /** Wine tasting / pouring */
  pouring:      `${BASE}/2011/04/MG_7018.jpg`,
  /** Wine stall wider view */
  wide:         `${BASE}/2011/04/MG_6945.jpg`,
};

// ── Wild Goose ───────────────────────────────────────────────────────────────
export const WILD_GOOSE = {
  /** Wild Goose — bar and cocktail area (2024) */
  hero:         `${BASE}/2024/03/wild-goose-gs.jpg`,
};

// ── Patriana (additional product shots used in cards) ────────────────────────
export const CHARCUTERIE_PRODUCTS = [
  PATRIANA.finocchiona,
  PATRIANA.guanciale,
  PATRIANA.speck,
];
