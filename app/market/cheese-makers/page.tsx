import StallPage from "@/components/StallPage";
import { CHEESE } from "@/lib/images";

export default function CheeseMAkersPage() {
  return (
    <StallPage
      tag="The Market"
      name="Cheese Makers of Canterbury"
      heroSubtitle="The finest British artisanal cheeses"
      heroImg={CHEESE.hero}
      sideImg={CHEESE.counter}
      email="cheesemakersofcanterbury@gmail.com"
      highlights={[
        "Their own Ashmore cheese, made in Kent",
        "Curated selection of British artisanal cheeses",
        "Homemade pickles and accompaniments",
        "Local juices and condiments",
        "Expert guidance on cheese boards and pairings",
      ]}
      body={
        <>
          <p>
            The Cheesemakers of Canterbury bring their passion for British artisanal cheese to their counter in The Goods Shed. Their own Ashmore — a rich, nutty hard cheese made here in Kent — is the crown jewel of the stall.
          </p>
          <p>
            Alongside their own creations, they curate a beautiful selection of the finest British cheeses from small-scale producers across the country. Every cheese has a story, and the team are always delighted to share it.
          </p>
          <p>
            Pick up homemade pickles, local juices and accompaniments to complete your cheese board. Or simply eat it there and then — the restaurant will be happy to assemble a board for you.
          </p>
        </>
      }
    />
  );
}
