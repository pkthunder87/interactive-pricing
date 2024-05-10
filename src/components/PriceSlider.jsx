import { useState } from 'react';

function PriceSlider() {
  const [thumb, setThumb] = useState(50);

  function onSlide(data) {
    setThumb(() => data.target.value);
  }

  return (
    <div className="h-full w-[50dvw] rounded-md bg-neutral-white p-10 shadow-lg">
      <p>Pricing Component</p>
      <div className="flex justify-center">
        <input
          className="slider "
          type="range"
          min={1}
          max={100}
          value={thumb}
          onChange={onSlide}
          id="slider"
        />
      </div>
    </div>
  );
}

export default PriceSlider;
