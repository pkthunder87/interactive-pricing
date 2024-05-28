function Header() {
  return (
    // can't adjust svg background circle thickness/stroke
    <div
      className=" mt-4 flex flex-col
    justify-center bg-svg-header bg-[length:270px_270px] bg-center
    bg-no-repeat text-center md:mt-0 md:bg-[length:140px_140px] xl3:bg-[length:145px_145px] xl3:bg-[top_3.8rem_right_12.5rem]"
    >
      <h1 className="text-[2.5rem] font-extrabold text-neutral-dark-desaturated-blue md:mt-0 md:text-2xl xl3:-mt-[.7rem] xl3:text-[1.76rem] xl3:leading-[1.4em]">
        Simple, traffic-based pricing
      </h1>
      <div className="mt-3 justify-center text-[1.6rem] font-semibold md:mt-[.6rem] md:flex md:w-full md:gap-[.1rem] md:text-[.81rem] xl3:text-[.95rem]">
        <p>Sign-up for our 30-day trial.</p>
        <p className="mt-2 md:mt-0">No credit card required.</p>
      </div>
    </div>
  );
}

export default Header;
