import Image from 'next/image'


const getUsers=async()=>{
  // const res=await fetch(process.env.BASE_URL+'/api/users',{ next: { revalidate: 0 } })
  // const json=await res.json()
  // return json
}

export default async function Home() {

  // const users=await getUsers()

  
  return (
    <div>
      <div className='content-home'>
        {/* {users?.users?.map((user:any,index:number)=>(
          <div key={index} className="bingkai">
            <p >{user.name}</p>
            <p>{user.email}</p>
            <div className='tombol'>
              <button className='update'>Update</button>
              <button className='delete'>Delete</button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}
