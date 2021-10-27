import { useEffect, useState } from "preact/hooks"
export const App = () => {
  const [data, setData] = useState<any>([]);
  const getindia = async () => {
    const r = await fetch("http://api.covid19india.org/data.json",
      { mode: 'no-cors' }
    )
    const d = await r.json();
    const fillterd = d.statewise.filter((d: any) => 0 != d.active)
    setData(fillterd)
  }
  useEffect(() => { getindia() }, []);
  return (
    <main>
      <h1>Covid Tracker Live</h1>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>State</th>
            <th>Active</th>
            <th>Confirm</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d: any, i: number) => {
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{d.state}</td>
                <td>{d.active}</td>
                <td>{d.confirmed}</td>
                <td>{d.deaths}</td>
                <td>{d.recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  )
}
