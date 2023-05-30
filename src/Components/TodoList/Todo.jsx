
import React from 'react'
import { useState } from 'react'
import Input from "./Input"
import {datas} from "./Api"
import "./TodoS.css"

const Todo = () => {
    const [api, setApi] = useState(datas)
     const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const addDown = (e) => {
        let NewInfo = {
            id: Date.now(),
            name: name,
            last: last,
            email: email,
        }
        setApi([...api, NewInfo])
        setName('');
        setLast('');
        setEmail('')
        e.preventDefault();
    }

    const removeItem = (id , e) => {
        
         setApi((prev) => {
            return (prev.filter((user) => {
                return user.id !== id
            }))
         });
         e.preventDefault()
     }


  return (
<div className='todo'>
             <form>
             <Input value={name} onChange={(e) => setName(e.target.value)} className=" inputAdd form-control mt-3" type="text" placeholder="Your Name" />
             <Input value={last} onChange={(e) => setLast(e.target.value)} className=" inputAdd form-control mt-3" type="text" placeholder="Last Name" />
             <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" inputAdd form-control mt-3" type="text" placeholder="Your Email" />
             <button onClick={addDown} className='btn btn-success mt-3 w-100'>Add to Todo</button>
             <div className='todo mt-3 table-responsive-lg' >
                 <div className="table-responsive-xxl">
                     <table className="table table-hover table-info  ">
                         <thead>
                             <tr className='table-responsive-lg'>
                                 <th className='col' scope="col">#</th>
                                 <th className='col' scope="col">First</th>
                                 <th className='col' scope="col">Last</th>
                                 <th className='col' scope="col">Handle</th>
                                 <th> <i className=" col dellite fa-solid fa-trash-can"></i></th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 api.map((arr, index) => {
                                     return <tr key={index}>
                                         <th className='col' scope="row">{index + 1}</th>
                                         <td className='col'>{arr.name}</td>
                                         <td className='col'>{arr.last}</td>
                                         <td className='col'>{arr.email}</td>
                                         <td className='col' >
                                             <button onClick={() => removeItem(arr.id)} className='buttonDelite dellite fa-solid fa-trash-can' index = {index}>
                                             </button>
                                         </td>
                                     </tr>
                              })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            </form>



      </div>
  )
}

export default Todo