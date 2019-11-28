import React from "react";


const Products = ({products}) =>  (
    <div className="container">
      {products ? (
        <div>
           <h1 className="results">{products.count} resultados</h1>
          <div className="products__container">
          
            {products.results.map(item => (
              <div className="card__item">
                <img src={item.photo.small} />
                <h1>{item.name}</h1>
                <p className="store__name">{item.store.name}</p>
                <p className="price">${item.price}MX</p>
              </div>
            ))}
          </div>
          </div>
        ) : null}

    </div>
  );


export default Products;
