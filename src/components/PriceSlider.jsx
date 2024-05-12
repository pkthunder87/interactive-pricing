import { useEffect, useState } from 'react';

function PriceSlider() {
  const [thumb, setThumb] = useState(50);
  const [initRender, setInitRender] = useState(true);

  function handleSlide(data) {
    setThumb(data.target.value);
  }

  useEffect(() => {
    // From https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider User dargue3

    document.getElementById('slider').onchange = function () {
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        'linear-gradient(to right, hsl(174, 77%, 80%) 0%,hsl(174, 86%, 45%), hsl(174, 77%, 80%) ' +
        value +
        '%, hsl(224, 65%, 95%) ' +
        value +
        '%, hsl(224, 65%, 95%) 100%)';
      setInitRender(false);
    };
  }, []);

  return (
    <div className="h-full w-[50dvw] rounded-md bg-neutral-white p-10 shadow-lg">
      <p>Pricing Component</p>
      <div className="flex justify-center">
        <input
          className={`slider h-2 ${initRender ? 'track' : ''}`}
          type="range"
          min={1}
          max={100}
          value={thumb}
          onChange={handleSlide}
          id="slider"
        />
      </div>
    </div>
  );
}

export default PriceSlider;
