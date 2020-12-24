import './pagination.css'
import React from 'react'
import ReactPaginate from 'react-paginate'

function PaginationPanel({ url, setUrl, ...options }) {
  // onChange (default)
  function onChangeHandler({ selected }) {
    selected = ++selected
    const newUrl = new URL(url)
    newUrl.searchParams.set('page', selected)
    if (selected === 1) {
      newUrl.searchParams.delete('page')
    }
    setUrl(newUrl.href)
  }

  // RENDER
  if (options.pageCount <= 1) {
    return null
  }
  return (
    <ReactPaginate
      {...{
        pageRangeDisplayed: 4,
        marginPagesDisplayed: 2,
        onPageChange: onChangeHandler,
        disableInitialCallback: true,
        previousLabel: 'Предыдущая',
        nextLabel: 'Следующая',
        breakLabel: '...',
        containerClassName: 'UI-pagination',
        activeLinkClassName: 'UI-pagination__link-active',
        disabledClassName: 'UI-pagination__link-disabled',
        ...options,
      }}
    />
  )
}
export default PaginationPanel
