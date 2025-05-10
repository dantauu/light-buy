import { Filtering } from "../Filtering/Filtering"
import Card, { CardSecond } from "../Card/Card"
import { Pagination } from "../Pagination/Pagination"
import { useState } from "react"
import "./FilteringAndCardPagination.scss"

export const FilterAndCardPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    console.log("Current page:", pageNumber)
  }

  return (
    <>
      <div className="container container__filter__and__card">
        <div className="home-wrapper">
          <div className="home-left">
            <Filtering />
          </div>
          <div className="home-right">
            {currentPage === 1 && <Card />}
            {currentPage === 2 && <CardSecond />}
          </div>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}
