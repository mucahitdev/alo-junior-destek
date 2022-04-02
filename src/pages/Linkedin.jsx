import React, { useState, useEffect } from 'react'
import { LiUsers } from '../components'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'
import { Link } from 'react-router-dom'



export const Linkedin = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'usersLinkedin'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setUsersData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  
  return (
    <div>
      <div className='bg-red-200'>
        <div>
          <Link to='add-linkedin' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Linkedin
            </button>
          </Link>

        </div>
      </div>


      <div className='flex flex-col justify-center items-center bg-lime-200'>
        
        {
          usersData.map((item, id) => <LiUsers key={id} {...item} />)
        }
      </div>


    </div>
  )
}

