import Header from './Header';
import PriceSlider from './PriceSlider';

function AppLayout() {
  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-rows-[35%_50%_15%] justify-center   ">
      <Header />
      <PriceSlider />
      <div className=" "></div>
    </div>
  );
}

export default AppLayout;
