import React, { useState, useEffect } from 'react'
import { CardDual, LiUsers } from '../components'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';




export const Linkedin = () => {
  const [usersData, setUsersData] = useState([]);
  const [dualData, setDualData] = useState([]);


  useEffect(() => {
    const q = query(collection(db, 'usersDual'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setDualData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  

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
      <div className='my-4'>
        <div className='flex flex-col space-y-4 sm:block sm:space-x-6'>
          <Link to='add-github' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Github & Linkedin
            </button>
          </Link>
          <Link to='add-linkedin' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 sm:m-0">
              Add Linkedin
            </button>
          </Link>

        </div>
      </div>
      
      {
        dualData.length === 0 &&  usersData.length === 0 ? <div className='h-full flex items-center justify-center'><ReactLoading type='spinningBubbles' color='#ffffff'  height={50} width={50} /></div> :
          <div>
            <h2 className='text-white text-2xl'>Github & Linkedin</h2>
            <span className='text-white'><b className='text-lime-300'>{dualData.length}</b> kişi</span>


            <div className='flex sm:flex-wrap flex-col sm:flex-row '>
              {
                dualData.map((item, id) => <CardDual key={id} {...item} />)
              }
            </div>
            <h2 className='text-white text-2xl mt-4'>Linkedin</h2>
            <span className='text-white'><b className='text-lime-300'>{usersData.length}</b> kişi</span>


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

