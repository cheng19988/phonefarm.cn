import type { SpecTableData } from "@/data/network-specs";

export function DataTable({ table }: { table: SpecTableData }) {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      {table.caption && (
        <p className="text-sm text-slate-400 mb-3 font-medium">{table.caption}</p>
      )}
      <table className="spec-table min-w-[640px]">
        <thead>
          <tr>
            {table.headers.map((h) => (
              <th key={h} className="text-left text-slate-300 font-semibold text-xs uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="text-slate-300 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
