import React from "react";
const Pagination = (props) => {
    const {pagination, onPageChange} = props
    console.log('pagination',pagination);
    const {page, limit, totalRows} = pagination
    const totalPages = Math.ceil(totalRows/ limit);
    const handlePageChange = (newPage) => {
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return(
        <div>
            <button
            disabled={page <= 1 }
            onClick={() => handlePageChange(page -1)}
            >
                Prev
            </button>
            <button
            // disabled={page >= totalPages }
            onClick={() => handlePageChange(page+1)}
            >
                Next
            </button>
        </div>
    )

}
export default Pagination