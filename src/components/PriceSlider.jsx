import { useEffect, useState } from 'react';

function PriceSlider() {
  const [thumb, setThumb] = useState(50);

  function handleSlide(data) {
    setThumb(data.target.value);
  }

  useEffect(() => {
    // From https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider User dargue3

    document.getElementById('slider').onchange = function () {
      this.style.background =
        'linear-gradient(to right, hsl(174, 77%, 80%) 0%,hsl(174, 86%, 45%), hsl(174, 77%, 80%) ' +
        this.value +
        '%, hsl(224, 65%, 95%) ' +
        this.value +
        '%)';
    };
  }, []);

  return (
    <div className="h-full w-[50dvw] rounded-md bg-neutral-white p-10 shadow-lg">
      <div className="grid grid-cols-2 items-center gap-8">
        <p className="text-[.6rem] font-extrabold tracking-widest">
          100K PAGEVIEWS
        </p>
        <div className="flex items-center justify-self-end">
          <h2 className="text-2xl font-extrabold text-neutral-dark-desaturated-blue">
            $16.00
          </h2>
          <p className="ml-2 mt-1 text-[.6rem] font-semibold"> / month</p>
        </div>
        <div className="col-span-2 flex justify-center">
          <input
            className={`slider track h-2 `}
            type="range"
            min={1}
            max={100}
            value={thumb}
            onChange={handleSlide}
            id="slider"
          />
        </div>
      </div>
    </div>
  );
}

export default PriceSlider;
