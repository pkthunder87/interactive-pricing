import Header from './Header';
import PriceSlider from './PriceSlider';

function AppLayout() {
  return (
    <div className="grid w-[100dvw] grid-rows-[30%_70%] justify-center sm:h-[100dvh] sm:grid-rows-[35%_50%_15%]   ">
      <Header />
      <PriceSlider />
      <div className=" "></div>
    </div>
  );
}

export default AppLayout;
