import db from '../data/db.json';
const oitenta = db.oitenta;

export const Oitenta = () => {
  return (
    <div>
      <h1>1980 Champions</h1>
      <table className="center">
        <thead className="oitenta-table-head">
          <tr>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="oitenta-table-body">
          {oitenta.map((item) => {
            return (
              <tr>
                <td>{item.year}</td>
                <td>{item.champion}</td>
                <td>{item.vice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
