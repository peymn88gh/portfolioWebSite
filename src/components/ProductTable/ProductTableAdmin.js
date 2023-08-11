import React, { useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "components/Datatables/Table";
import TableCell from "components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faHashtag, faPencil, faRemove, faSearch } from "@fortawesome/free-solid-svg-icons";
import TableLoading from "components/Datatables/TableLoading";
import Input from "components/Input/Input";
import Paginate from "components/Datatables/Paginate";
import Dialog from "components/Dialog/Dialog";

function ProductTableAdmin({ loading, dataHeader, data, handleDelete}) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowCount, setRowCount] = useState(10);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteParam, setDeleteParam] = useState([]);
  const handleShowDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const deleteRow  = (rowId) => {
    setDeleteParam([rowId]);
    handleShowDeleteDialog();
  }

  const rowsPerPageOptions = [{value:'10', label:'10'},{value:'20', label:'20'},{value:'50', label:'50'}];

  const {filteredRows, totalFilteredPages} = applyFilters(data, categoryFilter, statusFilter, searchQuery, rowCount);
  const firstRowIndex = (currentPage - 1) * rowCount;
  const lastRowIndex = firstRowIndex + rowCount; 
  const rowsToDisplay = filteredRows.slice(firstRowIndex, lastRowIndex);

  const onRowCountChange = (newRowCount) => {
    setRowCount(newRowCount);
    setCurrentPage(1);
  };



  return (
    <>
      <div className="mb-4 flex space-x-4">
        <Input
          label="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
        <Input
          label="category"
          type="select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          options={[{value:1,label:1},{value:2,label:2},{value:3,label:3}]}
        />
        
        <Input
          label="status"
          type="select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={[{value:1,label:1},{value:2,label:2},{value:0,label:0}]}
          
        />
      </div>
      <Datatables loading={loading} dataHeader={dataHeader}>
        {rowsToDisplay.map((row, index) => (
          <tr
            key={index}
            className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
          >
            <TableCell dataLabel="Product name" showLabel={true}>
              <span className="font-medium text-sm text-gray-900">
                {row.productName}
              </span>
            </TableCell>
            <TableCell dataLabel="Product description" showLabel={true} className={' md:max-w-xs'}>
              <p className="font-normal text-sm text-gray-500 md:whitespace-normal">{row.productDescription}</p>
            </TableCell>
            <TableCell dataLabel="Category id" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.categoryId}</p>
            </TableCell>
            <TableCell dataLabel="User id" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.userId}</p>
            </TableCell>
            <TableCell dataLabel="Key search" showLabel={true} className={' max-w-xs'}>
              {row.keySearch.split(' ').map((word, index)=>
                <span
                key={index}
                className="rounded-full py-1 px-3 text-xs font-semibold bg-slate-500 text-slate-50 m-1"
                >
                <FontAwesomeIcon icon={faHashtag} />{' '}
                {word}
                </span>
              )}
            </TableCell>
            <TableCell dataLabel="Product status" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.productStatus}</p>
            </TableCell>
            <TableCell dataLabel="Id" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.id}</p>
            </TableCell>
            <TableCell dataLabel="Status" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.status}</p>
            </TableCell>
            
            <TableCell>
              <button
                className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>
              <button
                onClick={(e) => {
                  deleteRow(row.id);
                }}
                className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </TableCell>
          </tr>
        ))}
      </Datatables>
      
      {loading && <TableLoading />}
      <Paginate
        countedResults={filteredRows.length}
        currentPage={currentPage}
        totalPages={totalFilteredPages}
        onPageChange={setCurrentPage}
        rowCountOptions={rowsPerPageOptions}
        selectedRowCount={rowCount}
        onRowCountChange={onRowCountChange}
      />
      <Dialog
        isOpen={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleDelete}
        params={deleteParam}
        title="Delete Confirmation"
        content="Are you sure you want to delete this records?"
        
      />
    </>
  );
}
function applyFilters(data, categoryFilter, statusFilter, searchQuery, rowCount) {
   const filteredRows = data.filter((row) => {
    const matchesCategory = categoryFilter === "" || row.categoryId.toString() === categoryFilter;
    const matchesStatus = statusFilter === "" || row.productStatus.toString() === statusFilter;
    const matchesSearch = searchQuery === "" || 
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.productDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.keySearch.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });
  return {
    filteredRows,
    totalFilteredPages: Math.ceil(filteredRows.length / rowCount),
    
  };
}
export default ProductTableAdmin;
