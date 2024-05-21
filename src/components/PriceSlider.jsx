import { useEffect, useState } from 'react';

function PriceSlider() {
  const [thumb, setThumb] = useState(51);

  function handleSlide(data) {
    setThumb(data.target.value);
  }

  useEffect(() => {
    // From https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider User dargue3

    document.getElementById('slider').onchange = function () {
      this.style.background =
        'linear-gradient(to right, hsl(174, 77%, 80%) 0%,hsl(174, 86%, 45%), ' +
        this.value +
        '%, hsl(224, 65%, 95%) ' +
        this.value +
        '%)';
    };
  }, []);

  return (
    <div className="h-full w-[50dvw] rounded-md bg-neutral-white p-10 shadow-lg xl3:-mt-5 xl3:w-[37.58dvw] xl3:rounded-[.6rem] xl3:py-11 xl3:pl-11 xl3:pr-[3.16rem]">
      <div className="grid grid-cols-2 items-center gap-8  xl3:mt-[.4rem]">
        <p className=" text-[.6rem] font-extrabold tracking-[.12em] xl3:text-[.9rem]">
          100K PAGEVIEWS
        </p>
        <div className="flex items-center justify-self-end">
          <h2 className="text-3xl font-extrabold text-neutral-dark-desaturated-blue  xl3:text-[2.5rem] xl3:tracking-[-.02em]">
            $16.00
          </h2>
          <p className="ml-2 mt-1 text-[.6rem] font-semibold xl3:mt-0 xl3:text-base">
            {' '}
            / month
          </p>
        </div>
        <div className="col-span-2 mt-1 flex justify-center xl3:mt-[1.1rem]">
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
      <div className="mr-3 mt-12 flex items-center justify-end text-[.58rem] font-semibold xl3:mt-[3.4rem] xl3:text-xs">
        {/* From https://flowbite.com/docs/forms/toggle/ 
        Adjust after:start, after:top after:h to change toggle circle size
        */}
        <label className="inline-flex items-center">
          <p className="mr-[1.1rem]">Monthly Billing</p>
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="after:border-neutral-light-grayish peer relative h-[1.15rem] w-9 cursor-pointer rounded-full bg-neutral-light-grayish-blue-toggle after:absolute 
          after:start-[2px] after:top-[2px] after:h-[.9rem] after:w-[.9rem]
          after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-strong-cyan peer-checked:after:translate-x-full xl3:mr-[.1rem] xl3:h-[1.35rem] xl3:w-[2.6rem] after:xl3:start-[4px] after:xl3:top-[3px] after:xl3:h-[.95rem] after:xl3:w-[.95rem]"
          ></div>
        </label>
        <p className="ml-4">Yearly Billing</p>
        <div className="ml-2 rounded-full bg-primary-light-grayish-red px-[.3rem] py-[.2rem] font-extrabold text-primary-light-red xl3:mr-[.3rem] xl3:px-[.4rem] xl3:py-[.1rem] xl3:text-[.62rem]">
          25% discount
        </div>
      </div>
      <hr className="-mx-10 mt-8 xl3:-ml-11 xl3:-mr-[3.16rem] xl3:mt-[2.6rem] " />
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
