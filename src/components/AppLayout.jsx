import Header from './Header';
import PriceSlider from './PriceSlider';

function AppLayout() {
  return (
    <div className=" grid w-[100dvw] grid-rows-[460px_1000px] justify-center md:h-[100dvh] md:grid-rows-[35%_50%_15%]   ">
      <Header />
      <PriceSlider />
      <div className=" "></div>
    </div>
  );
}

export default AppLayout;
