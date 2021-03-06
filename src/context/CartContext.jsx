import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/client";
import firebase from "firebase/app";
import "@firebase/firestore";
import swal from 'sweetalert';

export const CartContext = createContext();
const { Provider } = CartContext

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    async function getData() {
      const db = getFirestore();
      const COLLECTION = db.collection('item');
      const RESPONSE = await COLLECTION.get();
      let items = RESPONSE.docs.map((doc) => { return { ...doc, id: doc.id } });
      setItems(items);
      console.log(COLLECTION);
    }
    console.log("Items desde Firebase: ", items);
    getData();
  }, [])

  const addItem = (item, cantidad) => {
    const index = cart.findIndex(obj => obj.item.id === item.id)
    if (index === -1) {
      setCart([...cart, { item, cantidad }])
    }
    else {
      setCart(() => {
        cart[index].cantidad = cantidad
        return [...cart]
      })
      mostrarAlert()
    }
  }

  function Limpiar() {
    setCart([])
  }

  function quitarItem(id) {
    const filteredCart = cart.filter((obj) => obj.item.id !== id);
    setCart(filteredCart);
  }

  function precioTotal() {
    const valor = cart.reduce((acumulador, obj) => {
      return (acumulador += (Number(obj.item.price) * Number(obj.cantidad)))
    }, 0)
    return valor
  }

  const getTotalQty = () => {
    let qty = 0;
    cart.forEach(obj => {
      let cantidad = obj.cantidad;
      qty += cantidad;
    });
    return qty;
  }

  const mostrarAlert = () => {
    swal({
      title: "Producto agregado",
      text: "El producto fue agregado al carrrito con exito",
      icon: "success",
      button: "aceptar",
      timer: "2000"
    })
  }

  const ordenAlert = () => {
    swal({
      title: "Orden de compra",
      text: "Su orden de compra fue aprobada, presione en el boton inicio para volver a comprar",
      icon: "success",
      button: "ACEPTAR"
    })
  }

  //para checkout
  async function createOrder(name, phone, email, items) {
    const order = {
      buyer: { name, phone, email, items },
      fecha: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotalQty()
    };
    const db = getFirestore();
    db.collection("orders").add(order)
    let respuesta = await db.collection("orders").get();
    respuesta.docs.map((doc) => {
      console.log(doc.data());
    })
    ordenAlert()
  }

  return (
    <Provider value={{ cart, addItem, Limpiar, quitarItem, precioTotal, getTotalQty, items, createOrder, mostrarAlert }}>
      {children}
    </Provider>
  )
}

export default CustomProvider;
