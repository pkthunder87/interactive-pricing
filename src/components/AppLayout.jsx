function AppLayout() {
  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-rows-[35%_50%_15%] justify-center   ">
      <div className="bg-purple-500">Top</div>
      <div className="h-full w-[50dvw] bg-blue-500">Pricing Component</div>
      <div className="bg-red-500 ">Bottom</div>
    </div>
  );
}

export default AppLayout;
