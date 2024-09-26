import { useEffect, useState } from "react";

const Upgrade = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);
  return (
    <div
      className={`flex rounded-md shadow-md gap-2 px-4 py-2 items-center transition-transform transform duration-1000 ease-in-out flex-wrap justify-center ${
        animate ? "translate-x-0" : "translate-x-28"
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="text-green-500">$</div>
      <div>Upgrade to <span className="text-green-500">Pro</span> </div>
      {open && <span className="animate-bounce">and save $12</span>}
      <button className="bg-green-500 rounded-md px-2 py-1">
        {open ? "see pro" : "Billing"}
      </button>
    </div>
  );
};

export default Upgrade;
