import { useState } from "react";

const Commit = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex rounded-md shadow-md gap-2 px-4 py-2 items-center"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="text-blue-500 ">@</div>
      <div>2e884</div>
      {open && (
        <div>
          <div>Failed to Compile</div>
        </div>
      )}
      <button className="bg-blue-500 rounded-md px-2 py-1">
        {" "}
        {open ? "Redeploy" : "failed"}{" "}
      </button>
    </div>
  );
};

export default Commit;
