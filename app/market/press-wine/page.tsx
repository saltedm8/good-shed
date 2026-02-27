import StallPage from "@/components/StallPage";
import { WINE } from "@/lib/images";

export default function PressWinePage() {
  return (
    <StallPage
      tag="The Market"
      name="Press Wine Services"
      heroSubtitle="Selected by Master of Wine Clive Barlow"
      heroImg={WINE.hero}
      sideImg={WINE.shelves}
      email="presswine@goodsshed.co.uk"
      highlights={[
        "Curated by Master of Wine Clive Barlow",
        "Independent importers and small producers only",
        "Focus on quality, typicité and expression",
        "Wines that pair beautifully with market produce",
        "Unusual and adventurous selections alongside classics",
      ]}
      body={
        <>
          <p>
            Press Wine Services brings one of the finest wine selections in the South East to The Goods Shed market. Every bottle is personally chosen by Clive Barlow — one of a select group of Masters of Wine in the UK — from independent importers and small producers around the world.
          </p>
          <p>
            Clive&apos;s philosophy is simple: wines that deliver quality, typicité and true expression of their region. You&apos;ll find bottles here that you won&apos;t discover in any supermarket — natural wines, organic producers, growers making tiny quantities of exceptional wine.
          </p>
          <p>
            The same wines appear on the restaurant&apos;s drinks list, chosen specifically to complement the seasonal, market-driven menu. Ask Clive for a recommendation — there are few better guides to a glass of something special.
          </p>
        </>
      }
    />
  );
}
