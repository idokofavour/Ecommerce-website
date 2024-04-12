import Hero from "../Hero/Hero";
import Newsletter from "../NameNewsletter/Newsletter";
import NewCollections from "../NewCollections/NewCollections";
import Offers from "../Offers/Offers";
import Popular from "../Popular/Popular";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}
