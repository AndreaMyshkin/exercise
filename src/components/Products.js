import React from "react";


const Products = ({products}) =>  (
    <div>
      {products ? (
          <div>
            <h1>Productos{products.count}</h1>
            {products.results.map(item => (
              <div className="">
                <img src={item.photo.small} />
                <h1>{item.name}</h1>
                <p>{item.store.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        ) : null}
    </div>
  );


export default Products;
