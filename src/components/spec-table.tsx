export function SpecTable({ specs }: { specs: Record<string, string> }) {
  return (
    <table className="spec-table">
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
