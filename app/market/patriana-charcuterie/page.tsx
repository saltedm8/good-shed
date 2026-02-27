import StallPage from "@/components/StallPage";
import { PATRIANA } from "@/lib/images";

export default function PatrianaCharcuteriePage() {
  return (
    <StallPage
      tag="The Market"
      name="Patriana Charcuterie"
      heroSubtitle="French & Spanish charcuterie from the source"
      heroImg={PATRIANA.hero}
      sideImg={PATRIANA.basque}
      email="patriana@goodsshed.co.uk"
      highlights={[
        "Traditional charcuterie from France and Spain",
        "Sourced directly from small regional producers",
        "Jamón ibérico, saucisson, pâté and more",
        "Canterbury-based company with deep producer relationships",
        "Bespoke boards for events and private dining",
      ]}
      body={
        <>
          <p>
            Patriana Charcuterie is a Canterbury-based company with a genuine passion for the finest cured meats and charcuterie traditions of France and Spain. They source directly from small regional producers — people who have been making these products for generations.
          </p>
          <p>
            Expect jamón ibérico of extraordinary depth, rich French saucisson, silky pâtés and rillettes alongside a rotating selection of regional specialities. Everything is chosen for its authenticity and quality.
          </p>
          <p>
            The restaurant&apos;s charcuterie board draws directly from Patriana&apos;s selection — a dish that consistently draws sighs of contentment from guests at table.
          </p>
        </>
      }
    />
  );
}
