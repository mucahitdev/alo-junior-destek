import React from 'react'

export const LiUsers = ({data:{userName,description,fullName}}) => {
    return (
        <div className='p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <div className='my-2'>
                <div className='bg-[#0a66c2] rounded-t-2xl py-2'>
                    <span className='text-white'>{fullName}</span>
                </div>
                <div className='bg-orange-300 py-2'>
                    <div>
                        {description}
                    </div>
                    <div className='pt-3'>
                        <a className='bg-blue-600 text-white py-1 px-2 rounded-full hover:opacity-70' href={`https://tr.linkedin.com/in/${userName}`} target='_blank' rel="noreferrer" >Profili Görüntüle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}