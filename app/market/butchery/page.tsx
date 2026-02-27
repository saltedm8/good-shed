import StallPage from "@/components/StallPage";
import { BUTCHERY } from "@/lib/images";

export default function ButcheryPage() {
  return (
    <StallPage
      tag="The Market"
      name="The Butchery"
      heroSubtitle="Traditional service, exceptional meat"
      heroImg={BUTCHERY.hero}
      sideImg={BUTCHERY.meat1}
      highlights={[
        "Whole carcasses from local Kentish farmers only",
        "Oxford Sandy & Black pigs from Snoad Farm",
        "Grass-fed cattle and lamb from near Faversham",
        "Free-range chickens from Bank Farm, Aldington",
        "Expert butchery advice from Head Butcher Rick",
        "Daily inspiration from restaurant chef Jackson Berg",
      ]}
      body={
        <>
          <p>
            By strictly sourcing only whole carcasses from local Kentish farmers, we are on a mission to connect meat-eaters with the meats they eat — paying homage to the lives of animals raised and slaughtered humanely by selling the entire beast.
          </p>
          <p>
            Most butchers don&apos;t buy whole animals — only the easy-to-sell prime cuts, meaning much goes to waste. Buying the whole beast is a better deal for the farmer and more respectful to the animal. This nose-to-tail approach involves the shopper in developing taste and skill with uncommon ingredients.
          </p>
          <p>
            Head Butcher Rick and his team are on hand to give advice, with daily inspiration on the restaurant menu from chef Jackson Berg. Traditional service, exceptional meat — better priced.
          </p>
        </>
      }
    />
  );
}
