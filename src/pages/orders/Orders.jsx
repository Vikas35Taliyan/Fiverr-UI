import React from 'react'
import "./Orders.scss"
import { Link } from "react-router-dom"

const Orders = () => {

  const currentUser = {
    id:1,
    username: "vikas",
    isSeller:true,
  };
  return (
      <div className="orders">
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-email-48.png' alt='' className='contact' />
              </td>
            </tr>
          </table>
        </div>
      </div>
  )
}
export default Orders