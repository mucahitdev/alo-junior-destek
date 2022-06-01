import React, { useState, useEffect } from 'react'
import { LiUsers } from '../components'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';




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
    <div className=''>
      <div className='my-4 '>
        <div className='space-x-6'>
          <Link to='add-linkedin' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Linkedin
            </button>
          </Link>
          <Link to='add-github' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Github
            </button>
          </Link>

        </div>
      </div>
      
      {
        usersData.length === 0 ? <div className='h-full flex items-center justify-center'><ReactLoading type='spinningBubbles' color='#ffffff'  height={50} width={50} /></div> :
          <div>
            <span className='text-white'>Bulunan kullanıcı sayısı: <b>{usersData.length}</b></span>


            <div className='flex sm:flex-wrap flex-col sm:flex-row '>
              {
                usersData.map((item, id) => <LiUsers key={id} {...item} />)
              }
            </div>
          </div>
      }
    </div>
  )
}

