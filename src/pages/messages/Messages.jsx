import React from 'react'
import "./Messages.scss"
import { Link } from "react-router-dom"

const Messages = () => {

  const currentUser = {
    id:1,
    username: "vikas",
    isSeller:true,
  };

  const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere numquam doloremque eveniet. Doloremque dolor in quaerat harum doloribus, placeat esse repellat excepturi numquam possimus dolorem unde expedita, vitae autem!`
  return (
      <div className="messages">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className='active'>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>
                vikas
              </td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 day ago</td>
            </tr>
          </table>
        </div>
      </div>
  )
}
export default Messages