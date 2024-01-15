import ExploreNow from "@Components/ExploreNow";
import Hero from "@Components/Hero";
import HomeCategory from "@Components/HomeCategory";
import HomeItems from "@Components/HomeItems";
import Nav from "@Components/Nav";

const Home = () => {
  return (
   <>
      <Nav />
      <Hero />
      <ExploreNow/>
      <HomeCategory/>
      <HomeItems/>
      </>
  );
};

export default Home;
