import { useEffect, useState } from "react";

const Commit = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <div
      className={`flex rounded-md shadow-md gap-2 px-4 py-2 items-center transition-transform transform duration-1000 ease-in-out ${
        animate ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="text-blue-500">@</div>
      <div>2e884</div>

       <div
        className={`transition-transform duration-500 ease-in-out transform overflow-hidden ${
          open ? "scale-100 opacity-100 max-h-full max-w-full text-center  translate-y-0 " : "scale-0 opacity-0 max-h-0 max-w-0 translate-y-12 "
        }`}
      >
        <div>Failed to Compile</div>
      </div>

      <button className="bg-blue-500 rounded-md px-2 py-1">
        {open ? "Redeploy" : "failed"}
      </button>
    </div>
  );
};

export default Commit;
