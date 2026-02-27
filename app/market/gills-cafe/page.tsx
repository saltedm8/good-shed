import StallPage from "@/components/StallPage";
import { GILLS } from "@/lib/images";

export default function GillsCafePage() {
  return (
    <StallPage
      tag="The Market"
      name="Gill's Café & Delicatessen"
      heroSubtitle="Coffee, pastries & light lunches made at the Shed daily"
      heroImg={GILLS.hero}
      sideImg={GILLS.deli}
      highlights={[
        "Specialty coffee, single-origin and blends",
        "Pastries and cakes baked fresh every morning",
        "Light lunches using market ingredients",
        "Deli counter with prepared foods to take home",
        "Everything made at The Goods Shed daily",
      ]}
      body={
        <>
          <p>
            Gill&apos;s Café and Delicatessen is the perfect starting point for any visit to The Goods Shed — a warm cup of properly made coffee and a buttery pastry while you plan your market shop.
          </p>
          <p>
            Everything at Gill&apos;s is made fresh on site each day, using ingredients sourced from the market stalls surrounding it. Light lunches, soups and salads showcase the season, while the deli counter is laden with prepared dishes, terrines and things to take home.
          </p>
          <p>
            It&apos;s the kind of café that reminds you what a café should be: warm, delicious and entirely made with care.
          </p>
        </>
      }
    />
  );
}
