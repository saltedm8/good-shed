import StallPage from "@/components/StallPage";
import { MURRAYS } from "@/lib/images";

export default function MurraysStoresPage() {
  return (
    <StallPage
      tag="The Market"
      name="Murrays General Store"
      heroSubtitle="Kent & European fine foods of exceptional quality"
      heroImg={MURRAYS.hero}
      sideImg={MURRAYS.counter}
      email="murrays@goodsshed.co.uk"
      highlights={[
        "The finest Kentish pantry staples",
        "European speciality ingredients and delicacies",
        "Black pudding — as recommended by the restaurant",
        "Pickles, condiments and artisan larder products",
        "Rare and unusual finds from around the continent",
      ]}
      body={
        <>
          <p>
            Murrays General Store is the kind of shop that rewards slow browsing — a treasure trove of the finest foods Kent has to offer, alongside carefully chosen European specialities that belong in every good kitchen.
          </p>
          <p>
            You&apos;ll find their legendary black pudding here — the same one that appears on the restaurant menu alongside Stour Valley venison. There are pickles, condiments, vinegars, oils, pastas and ingredients that make home cooking genuinely exciting.
          </p>
          <p>
            Whether you&apos;re restocking the larder or hunting for something specific, Murrays will either have it or help you find it.
          </p>
        </>
      }
    />
  );
}
