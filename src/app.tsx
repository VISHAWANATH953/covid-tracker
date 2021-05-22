import { useEffect, useState } from "preact/hooks";
export const App = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const r = await fetch("https://api.covid19india.org/data.json");
    const d = await r.json();
    setData(d.statewise[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return <main>
      <h1>Covid Tracker Live</h1>
      <div className="boxdiv-boxes">
        <div className="boxdiv-boxes-box">
          <h2>
            OUR<span>COUNTRY</span>
          </h2>
          <p>INDIA</p>
        </div>
        <div className="boxdiv-boxes-box">
          <h2>
            TOTAL<span>RECOVERED</span>
          </h2>
          <p>{data.recovered}</p>
        </div>
        <div className="boxdiv-boxes-box">
          <h2>
            TOTAL<span>CONFIRMED</span>
          </h2>
          <p>{data.confirmed}</p>
        </div>
        <div className="boxdiv-boxes-box">
          <h2>
            TOTAL<span>DEATH</span>
          </h2>
          <p>{data.deaths}</p>
        </div>
        <div className="boxdiv-boxes-box">
          <h2>
            TOTAL<span>ACTIVE</span>
          </h2>
          <p>{data.active}</p>
        </div>
        <div className="boxdiv-boxes-box">
          <h2>
            LAST<span>UPDATED</span>
          </h2>
          <p>{data.lastupdatedtime}</p>
        </div>
      </div>
    </main>
};
