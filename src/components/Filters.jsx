import { useId } from 'react'
import { useFilters } from '../hooks/UseFilters.js'
import './Filters.css'
// Pasos para elaborar el contexto:
// 1.- Crear el contexto.
// 2.- Proveer el contexto.
// 3.- COnsumir el contexto.
export function Filters ({ onChange }) {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({ // THE ONLY TRUTH IS THE CONTEXT STATE!
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({ // THE ONLY TRUTH IS THE CONTEXT STATE!
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Min. Price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>
    </section>
  )
}
