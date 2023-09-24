import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

export const Cart = () => {

const { clear, items, removeItem} = useContext(CartContext)

const total = () =>
items.reduce(
    (acumulador,valorActual) => 
    acumulador + (valorActual.quantity * valorActual.precio),
    0
)





return (
    <Container>
        <h1>Cart</h1>
    <Table striped bordered hover variant ="dark">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.precio}</td>
          <td>{item.quantity}</td>
          <td>
            <button onClick={() => removeItem(item.id)}>
            Eliminar
            </button>
          </td>
           </tr>
     ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td> {total()} </td>
        </tr>
      </tfoot>
    </Table>
    </Container>
)



}
