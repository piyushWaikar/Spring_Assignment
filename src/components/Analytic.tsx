import { useEffect, useState } from "react";

const Analytic = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to trigger the initial animation
  }, []);

  return (
    <>
      <div
        className={`transform transition-transform duration-700 ease-in-out overflow-hidden ${
          open ? "max-h-screen translate-y-0 opacity-100" : "max-h-0 translate-y-12 opacity-0"
        }`}
      >
        <div>
          <table className="table-auto items-center">
            <thead>
              <tr>
                <th>Traffic</th>
                <th>Last 3 days</th>
                <th>See all</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-300">
                <td>/orders</td>
                <td>19</td>
                <td>2,543 visits</td>
              </tr>
              <tr className="hover:bg-slate-300">
                <td>/template</td>
                <td>19</td>
                <td>2,543 visits</td>
              </tr>
              <tr className="hover:bg-slate-300">
                <td>/projects</td>
                <td>25</td>
                <td>2,543 visits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`flex rounded-md shadow-md gap-2 px-4 py-2 items-center transition-transform transform duration-1000 ease-in-out ${
          animate ? "translate-x-0" : "translate-x-28"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="text-red-500">@</div>
        <div>32 online analytic</div>
        <button className="bg-red-500 rounded-md px-2 py-1">
          {open ? "Close" : "Analytics"}
        </button>
      </div>
    </>
  );
};

export default Analytic;
