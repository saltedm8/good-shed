import StallPage from "@/components/StallPage";
import { WILD_GOOSE } from "@/lib/images";

export default function WildGoosePage() {
  return (
    <StallPage
      tag="The Market"
      name="Wild Goose"
      heroSubtitle="Little dishes and hedgerow-inspired cocktails"
      heroImg={WILD_GOOSE.hero}
      sideImg={WILD_GOOSE.hero}
      email="wildgoose@goodsshed.co.uk"
      highlights={[
        "Inventive hedgerow-inspired cocktail menu",
        "Small plates and snacks using market produce",
        "Botanical spirits and seasonal infusions",
        "Relaxed, convivial atmosphere",
        "The perfect end to a morning at the market",
      ]}
      body={
        <>
          <p>
            Wild Goose is where The Goods Shed market gets a little looser and a lot more fun. Folk were enjoying hedgerow-inspired cocktails and little dishes — as one regular visitor put it — and thinking: &ldquo;Next time, I thought…&rdquo;
          </p>
          <p>
            The cocktail menu draws on the hedgerow and kitchen garden: sloe gin negronis, elderflower spritzes, blackberry smashes and botanical concoctions that change with the seasons. There are small plates too — thoughtfully made with whatever the market stalls have on offer.
          </p>
          <p>
            Whether you&apos;re lingering after your market shop, meeting a friend for a long lunch, or finishing the day with something special, Wild Goose is where the Goods Shed experience reaches its most pleasurable conclusion.
          </p>
        </>
      }
    />
  );
}
