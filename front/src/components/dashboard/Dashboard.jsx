import React, { useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar'
import product from '../../api/product'
import './style.css'

function Dashboard({ auth }) {

  const [data, setData] = useState([])

  useEffect(()=>{
    async function fetchData() {
      const dataApi = await product();
      setData(dataApi.data.products)
    }
    fetchData();
  },[])

  return (
    <div>
      <NavBar auth={auth} />
      <div className="contenedor">
        <h2 className="title">Data API Dummy</h2>
        <div className="contenedor_info">
          {data.map((item, index) => (
            <ul className="info" key={index}>
              <img src={item.thumbnail} alt="" />
              <div className="info desc">
                <li>Nombre: {item.title}</li>
                <li>Descripción: {item.description}</li>
                <li>Categoria: {item.category}</li>
                <li>Descuento: {item.discountPercentage}</li>
                <li>Precio: {item.price}</li>
                <li>Disponibilidad: {item.stock}</li>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard