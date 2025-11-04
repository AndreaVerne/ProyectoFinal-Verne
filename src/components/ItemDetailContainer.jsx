import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import ErrorPage from "./ErrorPage";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const product = doc(db, "products", id);
    getDoc(product).then((res) => {
      let data = res.data();
      if(data){
        setDetail({
          id: res.id,
          ...data
        });
      }
      else{
        setInvalid(true);
      }
    }).catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }, []); 

  return (
    <>
      <>
        {loading ? (
          <LoaderComponent />
        ) : invalid ? (
          <ErrorPage message="Producto no encontrado 🤔" />
        ) : (
          <ItemDetail detail={detail} />
        )}
      </>
    </>
  );
};

export default ItemDetailContainer;
