import React from 'react'

export const LiUsers = ({data:{userName,description,fullName}}) => {
    console.log(userName);
    return (
        <div className='p-1'>
            <div className='bg-neutral-600 w-80 rounded-2xl'>
                <div className='bg-[#0a66c2] '>
                    {fullName}
                </div>
                <div className='bg-[#eef3f8]'>
                    <div>
                        {description}
                    </div>
                    <div>
                        <a href={`https://tr.linkedin.com/in/${userName}`} target='_blank' rel="noreferrer" >Profili Görüntüle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}