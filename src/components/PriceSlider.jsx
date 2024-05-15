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
          <h2 className="text-3xl font-extrabold text-neutral-dark-desaturated-blue">
            $16.00
          </h2>
          <p className="ml-2 mt-1 text-[.6rem] font-semibold"> / month</p>
        </div>
        <div className="col-span-2 mt-1 flex justify-center">
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
      <div className="mr-4 mt-12 flex items-center justify-end text-[.58rem] font-semibold">
        {/* From https://flowbite.com/docs/forms/toggle/ */}
        <label className="inline-flex cursor-pointer items-center">
          <p className="mr-4">Monthly Billing</p>
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="after:border-neutral-light-grayish peer relative h-4 w-8 rounded-full bg-neutral-light-grayish-blue-toggle after:absolute after:start-[2px] after:top-[2px] after:h-[.8rem] after:w-[.8rem] after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-strong-cyan peer-checked:after:translate-x-full "></div>
        </label>
        <p className="ml-4">Yearly Billing</p>
        <div className="ml-2 rounded-full bg-primary-light-grayish-red px-[.3rem] py-[.2rem] font-extrabold text-primary-light-red">
          25% discount
        </div>
      </div>
      <hr className="-mx-10 mt-8" />
      <div className="grid h-[44%] grid-cols-[55%_45%] items-center">
        <div className="flex flex-col gap-2 text-[.6rem] font-semibold">
          <div className="flex items-center gap-3 ">
            <img src="icon-check.svg" alt="checkmark" className="h-2 w-2" />
            <p>Unlimited websites</p>
          </div>
          <div className="flex items-center gap-3 ">
            <img src="icon-check.svg" alt="checkmark" className="h-2 w-2" />
            <p>100% data ownership</p>
          </div>
          <div className="flex items-center gap-3 ">
            <img src="icon-check.svg" alt="checkmark" className="h-2 w-2" />
            <p>Email reports</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="h-8 w-[80%] rounded-full bg-neutral-dark-desaturated-blue text-[.58rem]  font-extrabold  text-primary-pale-blue">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceSlider;
