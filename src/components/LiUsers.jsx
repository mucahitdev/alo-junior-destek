import React from 'react'

export const LiUsers = ({data:{userName,description,fullName}}) => {
    return (
        <div className='p-1'>
            <div className=' w-80 '>
                <div className='bg-[#0a66c2] rounded-t-2xl'>
                    <span className='text-white'>{fullName}</span>
                </div>
                <div className='bg-[#eef3f8]'>
                    <div>
                        {description}
                    </div>
                    <div className=''>
                        <a className='bg-blue-600 text-white py-1 px-2 rounded-full hover:opacity-70' href={`https://tr.linkedin.com/in/${userName}`} target='_blank' rel="noreferrer" >Profili Görüntüle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}