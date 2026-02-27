import StallPage from "@/components/StallPage";
import { VEG } from "@/lib/images";

export default function VegStallPage() {
  return (
    <StallPage
      tag="The Market"
      name="The Veg Stall"
      heroSubtitle="Kentish seasons on a plate"
      heroImg={VEG.hero}
      sideImg={VEG.produce}
      highlights={[
        "All produce under 12 food miles from Canterbury",
        "Harvested fresh each morning from Kentish farms",
        "Seasonal variety — what you find changes daily",
        "Heritage and unusual varieties alongside classics",
        "Supplies the restaurant kitchen directly",
      ]}
      body={
        <>
          <p>
            Every day we go to the farms at 6am to collect the veg and bring it to the people of Canterbury. The veg stall represents up to 20 different growers and producers from around East Kent.
          </p>
          <p>
            Only serving produce from Kentish farms, late winter can be a barren time of greens and roots, only to explode into colour for nine months with the arrival of spring. From Kent farms to market by 8:30am every morning.
          </p>
          <p>
            Over 20 years we have cultivated a wonderful network of local growers, from nearby farms — ranging from organic to conventional, or fully biodynamic — to individuals who come forward as the seasons present themselves, such as Roddy, our mushroom forager, or &lsquo;the apricot man&rsquo; as we know him.
          </p>
        </>
      }
    />
  );
}
