import React, { useState } from "react";

const Upgrade = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex rounded-md shadow-md gap-2 px-4 py-2 items-center"
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
