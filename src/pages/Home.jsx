import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";

const Home = () => {
  const callMethod = () => {
    let data=[];
    for (let i = 0; i < 10;i++) {
      data.push(<Card key={i} />)
    }
    return data
  }
    return (
      <div>
        <Header />
        <Banner />
        <Filter />
        <div className="flex flex-wrap justify-center md:pt-10  bg-slate-100">
          {callMethod()}
        </div>
      </div>
    );
}

export default Home;