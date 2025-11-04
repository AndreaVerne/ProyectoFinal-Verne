import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { db } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Container, Carousel } from "react-bootstrap";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);
  
  // Banner solo se muestra en la página principal
  const renderBanner = () => {
    if (!categoryId) {
      return (
        <div className="promo-banner-container">
          <Carousel className="promo-banner" indicators={true} controls={true}>
            <Carousel.Item>
              <div className="banner-slide banner-slide-1">
                <div className="banner-content">
                  <h2>Nueva Colección</h2>
                  <p>Descubre los productos más recientes para tu rutina de belleza</p>
                  <button className="banner-btn">Ver Ahora</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-slide banner-slide-2">
                <div className="banner-content">
                  <h2>Ofertas Especiales</h2>
                  <p>Hasta 30% de descuento en productos seleccionados</p>
                  <button className="banner-btn">Ver Ofertas</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-slide banner-slide-3">
                <div className="banner-content">
                  <h2>Envío Gratis</h2>
                  <p>En compras superiores a $5000</p>
                  <button className="banner-btn">Comprar Ahora</button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }
    return null;
  };

  return (
    <Container className="py-5">
      {renderBanner()}
      <div className="category-header">
        <h1 className="category-title">
          {categoryId ? (
            <>
              {props.saludo} <span className="highlight">{categoryId}</span>
            </>
          ) : (
            props.saludo
          )}
        </h1>
        {categoryId && <div className="category-divider"></div>}
      </div>
      {loading ? <LoaderComponent /> : <ItemList data={data} />}
    </Container>
  );
};
export default ItemListContainer;
