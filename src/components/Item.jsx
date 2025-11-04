import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Item = ({ prod }) => {
  const { name, price, img, id, stock } = prod;
  return (
    <div className={`product-card ${stock === 0 ? "out-of-stock" : ""}`}>
      <div className="product-card__image-container">
        <img src={img} className="product-card__image" alt={name} />
        {stock === 0 && <div className="product-card__overlay">Agotado</div>}
        {stock > 0 && stock <= 5 && (
          <Badge bg="warning" text="dark" className="product-card__stock-badge">
            ¡Últimas unidades!
          </Badge>
        )}
      </div>
      <div className="product-card__content">
        <h5 className="product-card__title">{name}</h5>
        <p className="product-card__price">${price.toLocaleString('es-AR')}</p>
        <Link 
          to={`/item/${id}`} 
          className={`product-card__button ${stock === 0 ? "disabled" : ""}`}
          aria-disabled={stock === 0}
        >
          {stock === 0 ? "Sin stock" : "Ver detalles"}
        </Link>
      </div>
    </div>
  );
};

export default Item;
