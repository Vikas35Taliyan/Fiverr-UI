import React from 'react'
import "./MyGigs.scss"
import { Link } from "react-router-dom"

export const MyGigs = () => {
  return (
      <div className="myGigs">
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img src='../src/assets/myGigs.jpg' alt='' className='img'/>
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
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
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
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
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
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
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
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
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
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
                <img src='../src/assets/icons8-delete-100.png' alt='' className='delete' />
              </td>
            </tr>
          </table>
        </div>
      </div>
  )
}
