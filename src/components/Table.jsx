export default function LeagueTable() {
  return (
    <div className="container mx-auto mb-4">
      <h2 className="mb-4 text-xl font-bold text-center">League Table</h2>
      <div>
        <table className=" mx-auto border-seperate border text-center border-slate-500 table-fixed">
          <thead>
            <tr>
              <th className="border border-slate-500 p-1">Conference</th>
              <th className="border border-slate-500 p-1">Team</th>
              <th className="border border-slate-500 p-1">W-L Record</th>
              <th className="border border-slate-500 p-1">Win%</th>
              <th className="border border-slate-500 p-1">Home Record</th>
              <th className="border border-slate-500 p-1">Road Record</th>
              <th className="border border-slate-500 p-1">Streak</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 p-1">Eastern</td>
              <td className="border border-slate-700 p-1">
                Cleveland Cavaliers
              </td>
              <td className="border border-slate-700 p-1">15-1</td>
              <td className="border border-slate-700 p-1">0.938</td>
              <td className="border border-slate-700 p-1">7-0</td>
              <td className="border border-slate-700 p-1">8-1</td>
              <td className="border border-slate-700 p-1">W10</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Eastern</td>
              <td className="border border-slate-700 p-1">Boston Celtics</td>
              <td className="border border-slate-700 p-1">10-2</td>
              <td className="border border-slate-700 p-1">0.833</td>
              <td className="border border-slate-700 p-1">5-1</td>
              <td className="border border-slate-700 p-1">5-1</td>
              <td className="border border-slate-700 p-1">W4</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Eastern</td>
              <td className="border border-slate-700 p-1">Orlando Magic</td>
              <td className="border border-slate-700 p-1">9-6</td>
              <td className="border border-slate-700 p-1">0.600</td>
              <td className="border border-slate-700 p-1">5-3</td>
              <td className="border border-slate-700 p-1">4-3</td>
              <td className="border border-slate-700 p-1">W2</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Eastern</td>
              <td className="border border-slate-700 p-1">New York Knicks</td>
              <td className="border border-slate-700 p-1">9-7</td>
              <td className="border border-slate-700 p-1">0.563</td>
              <td className="border border-slate-700 p-1">4-3</td>
              <td className="border border-slate-700 p-1">5-4</td>
              <td className="border border-slate-700 p-1">L1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Eastern</td>
              <td className="border border-slate-700 p-1">
                Philadelphia 76ers
              </td>
              <td className="border border-slate-700 p-1">8-5</td>
              <td className="border border-slate-700 p-1">0.615</td>
              <td className="border border-slate-700 p-1">4-3</td>
              <td className="border border-slate-700 p-1">4-2</td>
              <td className="border border-slate-700 p-1">W3</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Western</td>
              <td className="border border-slate-700 p-1">
                Golden State Warriors
              </td>
              <td className="border border-slate-700 p-1">10-3</td>
              <td className="border border-slate-700 p-1">0.769</td>
              <td className="border border-slate-700 p-1">6-1</td>
              <td className="border border-slate-700 p-1">4-2</td>
              <td className="border border-slate-700 p-1">W3</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Western</td>
              <td className="border border-slate-700 p-1">
                Oklahoma City Thunder
              </td>
              <td className="border border-slate-700 p-1">11-4</td>
              <td className="border border-slate-700 p-1">0.733</td>
              <td className="border border-slate-700 p-1">5-2</td>
              <td className="border border-slate-700 p-1">6-2</td>
              <td className="border border-slate-700 p-1">W5</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">
                Los Angeles Lakers
              </td>
              <td className="border border-slate-700 p-1">Western</td>
              <td className="border border-slate-700 p-1">10-4</td>
              <td className="border border-slate-700 p-1">0.714</td>
              <td className="border border-slate-700 p-1">6-2</td>
              <td className="border border-slate-700 p-1">4-2</td>
              <td className="border border-slate-700 p-1">L1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Houston Rockets</td>
              <td className="border border-slate-700 p-1">Western</td>
              <td className="border border-slate-700 p-1">10-5</td>
              <td className="border border-slate-700 p-1">0.667</td>
              <td className="border border-slate-700 p-1">7-2</td>
              <td className="border border-slate-700 p-1">3-3</td>
              <td className="border border-slate-700 p-1">W4</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Western</td>
              <td className="border border-slate-700 p-1">Denver Nuggets</td>
              <td className="border border-slate-700 p-1">8-5</td>
              <td className="border border-slate-700 p-1">0.615</td>
              <td className="border border-slate-700 p-1">5-3</td>
              <td className="border border-slate-700 p-1">3-2</td>
              <td className="border border-slate-700 p-1">W2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
