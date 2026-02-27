import StallPage from "@/components/StallPage";
import { DOCKER } from "@/lib/images";

export default function DockerPage() {
  return (
    <StallPage
      tag="The Market"
      name="Docker"
      heroSubtitle="Sourdough loaves & craft drinks from Folkestone Harbour"
      heroImg={DOCKER.banner}
      sideImg={DOCKER.hero}
      highlights={[
        "Sourdough baked fresh in a Folkestone shipping container",
        "Craft ales and artisan cider",
        "Speciality drinks delivered direct to The Shed",
        "Naturally leavened breads with a distinctive crust",
        "Supporting independent British producers",
      ]}
      body={
        <>
          <p>
            Docker is one of The Goods Shed&apos;s most distinctive stallholders — their sourdough loaves and craft drinks are made in a repurposed shipping container at Folkestone Harbour, and delivered fresh to the market each day.
          </p>
          <p>
            The sourdough has the kind of crust and crumb that only comes from long, slow fermentation and expert baking. Alongside the bread, Docker brings an ever-changing selection of craft ales, cider and speciality drinks from independent British producers.
          </p>
          <p>
            Bread this good barely needs butter — though our own cultured variety in the restaurant rather proves that point wrong.
          </p>
        </>
      }
    />
  );
}
