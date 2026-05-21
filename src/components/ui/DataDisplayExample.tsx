import React from "react";
import { Button, Checkbox, DataTable, RadioGroup, RadioGroupItem, TextField } from "@artifact/ui-lib";
import type { ColumnDef } from "@tanstack/react-table";

type Employee = {
  id: number;
  name: string;
  email: string;
  department: "engineering" | "design" | "operations";
  status: "active" | "inactive";
  city: string;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Lina Haddad",
    email: "lina.haddad@moi.sy",
    department: "engineering",
    status: "active",
    city: "Damascus",
  },
  {
    id: 2,
    name: "Omar Nasser",
    email: "omar.nasser@moi.sy",
    department: "operations",
    status: "active",
    city: "Aleppo",
  },
  {
    id: 3,
    name: "Maya Salim",
    email: "maya.salim@moi.sy",
    department: "design",
    status: "inactive",
    city: "Homs",
  },
  {
    id: 4,
    name: "Rami Khalil",
    email: "rami.khalil@moi.sy",
    department: "engineering",
    status: "active",
    city: "Latakia",
  },
  {
    id: 5,
    name: "Sara Yousef",
    email: "sara.yousef@moi.sy",
    department: "operations",
    status: "inactive",
    city: "Tartus",
  },
  {
    id: 6,
    name: "Kareem Darwish",
    email: "kareem.darwish@moi.sy",
    department: "design",
    status: "active",
    city: "Damascus",
  },
];

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => <span className="capitalize">{row.original.department}</span>,
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={[
          "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
          row.original.status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-700",
        ].join(" ")}
      >
        {row.original.status}
      </span>
    ),
  },
];

const checkboxSelectionColumn: ColumnDef<Employee> = {
  id: "checkbox-select",
  header: ({ table }) => (
    <input
      type="checkbox"
      aria-label="Select all rows"
      className="size-4 cursor-pointer accent-primary"
      checked={table.getIsAllRowsSelected()}
      ref={(element) => {
        if (element) {
          element.indeterminate = table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected();
        }
      }}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  meta: { headerLabel: "Select" },
  cell: ({ row }) => (
    <input
      type="checkbox"
      aria-label={`Select ${row.original.name}`}
      className="size-4 cursor-pointer accent-primary"
      checked={row.getIsSelected()}
      onChange={row.getToggleSelectedHandler()}
      onClick={(event) => event.stopPropagation()}
    />
  ),
  enableHiding: false,
};

const DataDisplayExample: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [activeOnly, setActiveOnly] = React.useState(false);
  const [department, setDepartment] = React.useState<"all" | Employee["department"]>("all");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      search.trim() === "" ||
      `${employee.name} ${employee.email} ${employee.city}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !activeOnly || employee.status === "active";
    const matchesDepartment = department === "all" || employee.department === department;

    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Filtered Employees</h2>
          <p className="text-sm text-gray-500">Results update from the filters above.</p>
        </div>

        <DataTable
          columns={[checkboxSelectionColumn, ...columns]}
          data={filteredEmployees}
          className="border-0 shadow-none"
          enableRowSelection
          renderSelectedActions={(selectedRows) => (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{selectedRows.length} rows selected</span>
              <Button>Bulk action</Button>
            </div>
          )}
          emptyStateMessage="No employees match the current filters."
          filters={
            <div className="grid gap-6 p-5 lg:grid-cols-[1.2fr_0.8fr]">
              <TextField
                id="employee-search"
                label="Search employees"
                placeholder="Search by name, email, or city"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                message="Search updates the data display immediately."
              />

              <Checkbox
                id="active-only"
                label="Show active employees only"
                checked={activeOnly}
                onCheckedChange={(checked) => setActiveOnly(checked === true)}
                message={activeOnly ? "Only active records are shown." : "All records are shown."}
              />

              <div className="space-y-3 lg:col-span-2">
                <p className="text-sm font-medium text-gray-700">Department filter</p>
                <RadioGroup
                  value={department}
                  onValueChange={(value) => setDepartment(value as "all" | Employee["department"])}
                  className="grid gap-3 md:grid-cols-4"
                >
                  <RadioGroupItem id="department-all" value="all" label="All" />
                  <RadioGroupItem id="department-engineering" value="engineering" label="Engineering" />
                  <RadioGroupItem id="department-design" value="design" label="Design" />
                  <RadioGroupItem id="department-operations" value="operations" label="Operations" />
                </RadioGroup>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default DataDisplayExample;
