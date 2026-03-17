const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-full border-4 border-background border-t-primary animate-spin" />
      <p className="text-primary font-semibold text-sm tracking-wide">Loading...</p>
    </div>
  </div>
);

export default Loader;
