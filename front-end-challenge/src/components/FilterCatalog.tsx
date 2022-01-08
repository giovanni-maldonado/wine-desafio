/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { setMinDelimiter, setMaxDelimiter } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'
import { FilterCatalogStyle } from '../styles/components/FilterCatalogStyle'

const FilterCatalog: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = (e: { target: { value: string } }) => {
    if (e.target.value === '1') {
      dispatch(setMinDelimiter(0))
      dispatch(setMaxDelimiter(11))
    }
    if (e.target.value === '2') {
      dispatch(setMinDelimiter(12))
      dispatch(setMaxDelimiter(23))
    }
    if (e.target.value === '3') {
      dispatch(setMinDelimiter(24))
      dispatch(setMaxDelimiter(35))
    }
    if (e.target.value === '4') {
      dispatch(setMinDelimiter(36))
      dispatch(setMaxDelimiter(47))
    }
    if (e.target.value === '5') {
      dispatch(setMinDelimiter(48))
      dispatch(setMaxDelimiter(59))
    }
    if (e.target.value === '6') {
      dispatch(setMinDelimiter(60))
      dispatch(setMaxDelimiter(62))
    }
  }
  return (
    <FilterCatalogStyle>
      <button className="filter-catalog" onClick={handleClick} value="1">1</button>
      <button className="filter-catalog" onClick={handleClick} value="2">2</button>
      <button className="filter-catalog" onClick={handleClick} value="3">3</button>
      <button className="filter-catalog" onClick={handleClick} value="4">4</button>
      <button className="filter-catalog" onClick={handleClick} value="5">5</button>
      <button className="filter-catalog" onClick={handleClick} value="6">6</button>
    </FilterCatalogStyle>
  )
}

export default FilterCatalog
