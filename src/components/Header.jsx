function Header() {
  return (
    // can't adjust svg background circle thickness/stroke
    <div
      className=" flex flex-col justify-center
    bg-svg-header bg-[length:140px_140px] bg-center bg-no-repeat text-center xl3:bg-[length:145px_145px] xl3:bg-[top_3.8rem_right_12.5rem]"
    >
      <h1 className="text-2xl font-extrabold text-neutral-dark-desaturated-blue xl3:-mt-[.7rem] xl3:text-[1.76rem] xl3:leading-[1.4em]">
        Simple, traffic-based pricing
      </h1>
      <p className="mt-[.6rem] text-[.81rem] font-semibold xl3:text-[.95rem]">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </div>
  );
}

export default Header;
