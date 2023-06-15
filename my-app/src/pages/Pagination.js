import { useState, useEffect } from 'react'
import data from './Data'
import ReactPaginate from 'react-paginate'

const Pagination = () => {

	const items = data.products;

	const itemsPerPage = 4;

	// Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

	return(
		<>
		<div className="item-list">
			{ 	
				currentItems.map((item) => (
					<div className="item-content">
						<ul>
							<li><img src={"/images/" + item.image} alt={item.image} /></li>
							<li>{item.name}</li>
							<li>{item.description}</li>
							<li>{item.currency + item.price}</li>
						</ul>
					</div>
				))
			}

		 <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
     	 />

		</div>
		</>
	)

}

export default Pagination;