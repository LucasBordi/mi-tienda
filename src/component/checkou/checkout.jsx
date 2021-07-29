//import { getFirestore } from "../../firebase/client";
//import { CartContext } from '../../context/CartContext';
//import { firebase } from 'firebase';
//import {useContext, useState } from 'react';


import React, { useContext, useState } from "react";
import {CartContext } from './../../context/CartContext';


export const CheckoutForm = () => {
    const { createOrder } = useContext(CartContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    return (
        
        <>
            <input
                type="text"
                placeholder="Nombre"
                onInput={(e) => {setName(e.target.value )}}
                />
            <input
                type="email"
                placeholder="nombre@ejemplo.com"
                onInput={(e) => {setEmail(e.target.value )}}
                />
            <input
                type="text"
                placeholder="1112345678"
                onInput={(e) => {setPhone(e.target.value )}}
                />
            <button className="button"
                onClick={()=>CartContext.createOrder({name,phone,email})}
                block={true}
            >
                    Confirmar
            </button>
        </>
    );
};


                    /*
                    const [form, setForm] = useState({ email: "", name: "", phone: "" });
                    
                  
                    
                    const confirmarCarrito = () => {
                      if (!form.name) {
                          console.log(
                          " Ingresá tu nombre para completar el checkout.",
                          "",
                          "error"
                        );
                        return;
                      }
                      if (!form.email.includes("@")) {
                          console.log(
                          " Ingresá un email válido para completar el checkout.",
                          "",
                          "error"
                        );
                        return;
                      }
                      if (!form.phone) {
                        console.log(
                          " Ingresá un teléfono para completar el checkout.",
                          "",
                          "error"
                        );
                        return;
                      }
                      createOrder(form.email, form.name, form.phone);
                    };*/



/*
export const checkOut = () => {
   // const {cart, precioTotal } = useContext(CartContext)
    const [form, setForm] = useState()

    function dispatchOrden(newOrden) {
        const db = getFirestore();
        const orders = db.collection("orden")
        orders.add(newOrden).then(({ id }) => {
            alert.fire(`orden cargada: ${id}`)
            actualizarStock(newOrden);
        })
            .catch(e => {
                alert.fire(`error 404`)
            })
            .finally(() => {
            })
    }


    function validarDatos() {
        if (form.email.includes("@") && form.name != null && form.phone !== null) {

            const newOrden = {
                buyer: { name: form.name, phone: form.phone, email: form.email },
                pedido: cart.map(element => ({
                    name: element.item.name,
                    id: element.item.id,
                    qty: element.quantity
                })),
                fecha: (new Date()).toLocaleDateString(),
                total: precioTotal()
            }
            dispatchOrden(newOrden);
        }
        else {
            alert.fire("ingrese datos validos")
        }

    };

    async function actualizarStock(newOrden) {

        const db = getFirestore()
        const cartActualizado = db.collection("orders")
            .where(firebase.firestore.FieldPath.documentID(), 'in', newOrden.pedido.map(e => e.id));

        const query = await cartActualizado.get();
        const batch = db.batch();
        const outOfStock = [];

        query.docs.forEach((docsnapshot, index) => {
            if (docsnapshot.data().stock >= newOrden.pedido[index].qty) {
                batch.update(docsnapshot.ref, { stock: docsnapshot.data().stock - newOrden.pedido[index].qty })
            }
            else {
                outOfStock.push({ ...docsnapshot.data(), id: docsnapshot.id })
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit();
        }
        else {
            alert.fire("algo trae")
        }
    }

    return (

        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email"  placeholder="Enter email" onInput={(e)=>setForm({...form,email:e.target.value})}/>

            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input type="text"  placeholder="Nombre" onInput={(e)=>setForm({...form,name:e.target.value})}/>

            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Telefono</label>
                <input type="number"  placeholder="Enter email" onInput={(e)=>setForm({...form,phone:e.target.value})}/>

            </div>
                <button type="submit" className="btn btn-primary" onClick={validarDatos}>Finalizar Compra</button>
        </div>
            )
}
*/