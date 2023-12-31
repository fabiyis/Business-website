import MainLayout from "../layouts/MainLayout";
import BigCarousel from "../components/BigCarousel"; 

function Home() {
  return ( 
    <>
      <MainLayout>
        <div className="relative">
          <BigCarousel />
          <div className="absolute inset-0 flex item-centre justify-center">
            <h1 className="text-6xl text-center z-20 font-bold text-red-600 drop-shadow-lg">
              WELCOME TO BUSINESS WEB
            </h1>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Home;