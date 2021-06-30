import noventa from '../data/noventa.json';

export const Noventa = () => {
  return (
    <div>
      <h1>1990 Champions</h1>
      <table className="center">
        <thead className="noventa-table-head">
          <tr>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="noventa-table-body">
          {noventa.map((item) => {
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
