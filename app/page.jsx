import ExploreNow from "@Components/ExploreNow";
import Hero from "@Components/Hero";
import HomeCategory from "@Components/HomeCategory";
import Nav from "@Components/Nav";

const Home = () => {
  return (
   <>
      <Nav />
      <Hero />
      <ExploreNow/>
      <HomeCategory/>
      </>
  );
};

export default Home;
