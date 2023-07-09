import Items from "./items"

const getUsers=async()=>{
  const res=await fetch(process.env.BASE_URL+'/api/users',{cache:"no-store"})
  const json=await res.json()
  return json
}

export default async function Home() {

  const users=await getUsers()


  
  return (
    <div>
      <div className='content-home'>
        {users?.users?.map((user:any,index:number)=>(
          <Items key={index} user={user} />
        ))}
      </div>
    </div>
  )
}
