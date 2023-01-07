import React from 'react'

const Card = ({pokemon,loading,infoPokemon}) => {
  return (
    <>
    {
      loading ? <h1>Loading...</h1>:
      pokemon.map((item)=>{
        return(
          <>
            <div key={item.id} onClick={()=>infoPokemon(item)}  className="rounded-full cursor-pointer w-24 h-24 border-4 border-black bg-gradient-to-b from-red-600 to-white">
                <div className="absolute rounded-full w-8 h-8 bg-black"></div>
                <div className="absolute rounded-full w-5 h-5 bg-white"></div>
                <img src={item.sprites.front_default} alt=''/>
            </div>
          </>
        )
      })
    } 
    </>
  )
}
export default Card
