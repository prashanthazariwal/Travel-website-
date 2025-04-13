import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";


const Users = () => {

  const [formData , setFormData] = useState([])
  useEffect(()=>{
    const Data = JSON.parse(localStorage.getItem("formData"))
    setFormData(Data)
    
  },[])
 

console.log(formData)
  const data = useMemo(() => formData);


 



  const columns = [
    {
      header: "FIRST NAME",
      accessorKey: "firstName",
      footer: "FIRST NAME",
      // cell: info => info.getValue(),
    },
    {
      header: "LAST NAME",
      accessorKey: "lastName",
      footer: "LAST NAME",
      // cell: info => info.getValue(),
    },
    {
      header: "DOB",
      accessorKey: "date_of_birth",
      footer: "AGE",
      // cell: info => info.getValue(),
    },
    {
      header: "EMAIL",
      accessorKey: "email",
      footer: "EMAIL",
      // cell: info => info.getValue(),
    },
    {
      header: "PHONE NUMBER",
      accessorKey: "phoneNumber",
      footer: "PHONE NUMBER",
      // cell: info => info.getValue(),
    },
    {
      header: "Address",
      accessorKey: "address",
      footer: "Address",
      // cell: info => info.getValue(),
    },
    {
      header: "Departure Time",
      accessorKey: "departureDateTime",
      footer: "Departure Time",
      // cell: info => info.getValue(),
    },
    {
      header: "Return Time",
      accessorKey: "returnDateTime",
      footer: "Return Time",
      // cell: info => info.getValue(),
    },
    {
      header: "DepartureFrom City",
      accessorKey: "departureFromCity",
      footer: "DepartureFrom City",
      // cell: info => info.getValue(),
    },
    {
      header: "DepartureFrom Country",
      accessorKey: "departureFromCountry",
      footer: "DepartureFrom Country",
      // cell: info => info.getValue(),
    },
    {
      header: "Destination City",
      accessorKey: "destinationCity",
      footer: "Destination City",
      // cell: info => info.getValue(),
    },
    {
      header: "Destination Country",
      accessorKey: "destinationCountry",
      footer: "Destination Country",
      // cell: info => info.getValue(),
    },
    {
      header: "Fare",
      accessorKey: "fare",
      footer: "Fare",
      // cell: info => info.getValue(),
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    // onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting,
  });
  return (
    <div className=" h-screen w-full p-2 flex flex-col  items-center ">
      <h2 className="text-sm bg-red-300 font-semibold">Togo Users information filled by the form is displayed below in the table !</h2>
      <table  className="w-10/12 mt-9 rounded-lg min-h-56 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <caption className="caption-top text-left font-semibold text-[black] mb-4 text-[2vmax]">
          Users Information
        </caption>
        <thead className=" text-sm font-semibold">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className=" bg-slate-300 border p-2 min-w-[6.4rem] text-start "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    { asa: "🔼", des: "🔽" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* <thead>
            <tr>
                <th>ID</th>
            </tr>
        </thead> */}
        <tbody className="text-[black] text-sm">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white ">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border  min-w-24 p-2 font-[500]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot className="text-sm bg-slate-400 text-white">
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border text-start min-w-24 p-2"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>

      <div className="mt-6 flex gap-4 items-center">
        <button
          onClick={() => table.setPageIndex(0)}
          className="px-3 py-2 text-sm font-semibold bg-slate-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[12px] "
        >
          {" "}
          First Page
        </button>

        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="px-3 py-2 text-sm font-semibold bg-slate-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[12px] "
        >
          {" "}
          Previous Page
        </button>

        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="px-3 py-2 text-sm font-semibold bg-slate-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[12px] "
        >
          {" "}
          Next Page
        </button>

        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-3 py-2 text-sm font-semibold bg-slate-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[12px] "
        >
          {" "}
          Last Page
        </button>

        {/* <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="border-[black] border-[2px] w-[25%] rounded-lg h-[30px]"
        /> */}
      </div>
    </div>
  );
};

export default Users;
