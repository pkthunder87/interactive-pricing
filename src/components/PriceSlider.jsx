import { useEffect, useState } from 'react';

function PriceSlider() {
  const [thumb, setThumb] = useState(51);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    if (window.innerWidth < 751) {
      setIsMobile(true);
      console.log('True');
      console.log(window.screen.width);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="h-full w-[87dvw] rounded-2xl bg-neutral-white p-12 shadow-lg md:w-[50dvw] md:rounded-md md:p-10 xl3:-mt-5 xl3:w-[37.58dvw] xl3:rounded-[.6rem] xl3:py-11 xl3:pl-11 xl3:pr-[3.16rem] ">
      <div className="grid  items-center gap-16 md:gap-8  xl3:mt-[.4rem]">
        <p className=" col-span-2 text-center text-2xl font-extrabold tracking-[.12em] md:col-span-1 md:text-left md:text-[.6rem] xl3:text-[.9rem]">
          100K PAGEVIEWS
        </p>
        <div className="order-last col-span-2 flex items-center justify-center md:order-none md:col-span-1 md:justify-self-end">
          <h2 className="text-6xl font-extrabold text-neutral-dark-desaturated-blue md:text-3xl xl3:text-[2.5rem] xl3:tracking-[-.02em]">
            $16.00
          </h2>
          <p className="ml-2 mt-1 text-[1.7rem] font-semibold md:text-[.6rem] xl3:mt-0 xl3:text-base">
            {' '}
            / month
          </p>
        </div>
        <div className="col-span-2 mt-1 flex justify-center xl3:mt-[1.1rem]">
          <input
            className={`slider track h-4 md:h-2 `}
            type="range"
            min={1}
            max={100}
            value={thumb}
            onChange={handleSlide}
            id="slider"
          />
        </div>
      </div>
      <div className="-mr-5 mt-12 flex items-center justify-end text-[1.5rem] font-semibold md:mr-3 md:text-[.58rem] xl3:mt-[3.4rem] xl3:text-xs">
        {/* From https://flowbite.com/docs/forms/toggle/ 
        Adjust after:start, after:top after:h to change toggle circle size
        */}
        <label className="inline-flex items-center gap-2 md:gap-0">
          <p className="mr-[1.1rem]">Monthly Billing</p>
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="after:border-neutral-light-grayish peer relative h-10 w-20 cursor-pointer rounded-full bg-neutral-light-grayish-blue-toggle after:absolute 
            after:start-[7px] 
            after:top-[6px] 
            after:h-[1.7rem] after:w-[1.7rem] after:rounded-full after:border
          after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-strong-cyan
          peer-checked:after:translate-x-full md:h-[1.15rem] md:w-9 md:after:start-[2px] md:after:top-[2px] md:after:h-[.9rem] md:after:w-[.9rem] xl3:mr-[.1rem] xl3:h-[1.35rem] xl3:w-[2.6rem] after:xl3:start-[4px] after:xl3:top-[3px] after:xl3:h-[.95rem] after:xl3:w-[.95rem]"
          ></div>
        </label>
        <p className="ml-6 mr-1 md:mr-0">Yearly Billing</p>

        <div
          className="ml-2 rounded-full bg-primary-light-grayish-red px-[.8rem] 
        py-[.22rem] text-[1.15rem]
        font-extrabold text-primary-light-red md:px-[.3rem] md:py-[.2rem] md:text-[.58rem] xl3:mr-[.3rem] xl3:px-[.4rem] xl3:py-[.1rem] xl3:text-[.62rem]"
        >
          {isMobile ? '-25%' : '25% discount'}
        </div>
      </div>
      <hr className="-mx-10 mt-8 xl3:-ml-11 xl3:-mr-[3.16rem] xl3:mt-[2.6rem] " />
      <div className="grid h-[44%] items-center md:grid-cols-[55%_45%] md:justify-normal">
        <div
          className="flex flex-col items-center gap-[.62rem] text-xl
        font-semibold md:items-start md:gap-[.1rem] md:text-[.6rem] xl3:-mt-0 xl3:ml-[.15rem] xl3:text-[.75rem]"
        >
          <div className="flex items-center gap-[.91rem] ">
            <img
              src="icon-check.svg"
              alt="checkmark"
              className="h-2 w-2 xl3:h-[.5rem] xl3:w-[.55rem]"
            />
            <p>Unlimited websites</p>
          </div>
          <div className="flex items-center gap-[.91rem] ">
            <img
              src="icon-check.svg"
              alt="checkmark"
              className="h-2 w-2 xl3:h-[.5rem] xl3:w-[.55rem]"
            />
            <p>100% data ownership</p>
          </div>
          <div className="flex items-center gap-[.91rem] ">
            <img
              src="icon-check.svg"
              alt="checkmark"
              className="h-2 w-2 xl3:h-[.5rem] xl3:w-[.55rem]"
            />
            <p>Email reports</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <button className="h-14 w-[55%] rounded-full bg-neutral-dark-desaturated-blue text-xl font-extrabold text-primary-pale-blue md:h-8 md:w-[80%]  md:text-[.58rem]  xl3:-mr-[.3rem] xl3:h-[2.6rem] xl3:w-[84.5%] xl3:text-[.75rem]">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceSlider;
