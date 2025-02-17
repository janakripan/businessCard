import React from 'react'

function ContentCard({items}) {
  return (
    <div className='w-11/12 md:w-8/12 lg:w-4/12 bg-white h-fit p-3 rounded-lg border-2 border-gray-300 flex flex-col items-center justify-center py-4 '>
        <h1>
            {items.FullName}
        </h1>
        <div className='w-full  h-full flex flex-col items-start gap-y-2 mt-4'>
            <p>
                Email:{items.Email}
            </p>
            <p>
                business:{items.BusinessName}
            </p>
            <p>
                profession:{items.Profession}
            </p>
            <p>
                Phone number:{items.PhoneNumber}
            </p>
            <p>
                Whatsapp number : {items.WhatsappNumber}
            </p>
            <p>
                Country : {items.Country}
            </p>
            <p className=' h-fit w-full break-words'>
                location: <a target="_blank" href={items.LocationLink}>{items.LocationLink} </a>
            </p>
            <p>
                Description: {items.Description}
            </p>

        </div>

      
    </div>
  )
}

export default ContentCard
