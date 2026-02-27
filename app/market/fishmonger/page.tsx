import StallPage from "@/components/StallPage";
import { FISH } from "@/lib/images";

export default function FishmongerPage() {
  return (
    <StallPage
      tag="The Market"
      name="The Fishmonger"
      heroSubtitle="Canterbury's only independent fresh fish monger"
      heroImg={FISH.hero}
      sideImg={FISH.hero}
      highlights={[
        "Fresh fish from local day-boats daily",
        "Sourced from British shores and coastal waters",
        "The only independent fishmonger in Canterbury",
        "Seasonal species — whatever is running",
        "Shellfish, whole fish and prepared fillets",
      ]}
      body={
        <>
          <p>
            Canterbury&apos;s sole independent fishmonger is right here at The Goods Shed — a rare treasure in the modern high street landscape. Our fish arrives direct from local day-boats and the wider British coastline, as fresh as it is possible to be.
          </p>
          <p>
            Expect to find local mackerel, sea bass, plaice and sole alongside crabs, oysters and seasonal shellfish. What&apos;s available depends entirely on what the sea has provided — a promise of true seasonality and sustainability.
          </p>
          <p>
            The restaurant team works closely with our fishmonger, so the menu&apos;s fish dishes are shaped by exactly what landed that morning. You can do the same at home.
          </p>
        </>
      }
    />
  );
}
