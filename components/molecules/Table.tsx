const Table = () => {
  return (
    <>
      <table className="table-fixed w-40">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>one</td>
          </tr>
          <tr>
            <td>2</td>
            <td>two</td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        table {
          border: 1px solid #98cad6;
        }

        th {
          padding: 0 0.5rem;
          text-align: left;
          border: 1px solid #98cad6;
          background-color: #98cad6;
        }

        td {
          padding: 0 0.5rem;
          border: 1px solid #98cad6;
        }
      `}</style>
    </>
  );
};

export default Table;
