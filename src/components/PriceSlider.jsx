function PriceSlider() {
  return (
    <div className="h-full w-[50dvw] rounded-md bg-neutral-white p-10 shadow-lg">
      <p>Pricing Component</p>
      <div className="flex justify-center">
        <input
          className="slider "
          type="range"
          min={1}
          max={100}
          value={50}
          id="slider"
        />
      </div>
    </div>
  );
}

export default PriceSlider;
