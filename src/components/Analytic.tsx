import React, { useState } from "react";

const Analytic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div>
          <div>
            <table className="table-auto items-center">
              <tr  >
                <th>Traffic</th>
                <th>Last 3 days</th>
                <th>see all</th>
              </tr>
              <tr className="hover:bg-slate-300 ">
                <td>/orders</td>
                <td>19</td>
                <td>2,543 visits</td>
              </tr>
              <tr className="hover:bg-slate-300">
                <td>/template</td>
                <td>19</td>
                <td>2,543 visits</td>
              </tr >
              <tr className="hover:bg-slate-300">
                <td>/projects</td>
                <td>25</td>
                <td>2,543 visits</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      <div
        className="flex rounded-md shadow-md gap-2 px-4 py-2 items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="text-red-500">@</div>
        <div>32 online analytic</div>
        <button className="bg-red-500 rounded-md px-2 py-1"> {open ? 'close' : 'Analytics' }</button>
      </div>
    </>
  );
};

export default Analytic;
