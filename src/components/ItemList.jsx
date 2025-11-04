import React from "react";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";

const ItemList = ({ data }) => {
  return (
    <div className="item-list">
      {data.length === 0 && (
        <div className="no-products">
          <p>No hay productos disponibles</p>
        </div>
      )}
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {data.map((prod) => (
          <Col key={prod.id}>
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
