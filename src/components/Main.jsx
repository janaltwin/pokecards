import React, { useEffect, useState } from 'react'
import Card from './Card'
import PokeInfo from './PokeInfo'
import axios from 'axios'

const Main = () => {
  const [pokeData,setPokeData]=useState([])
  const [loading,setLoading]=useState(true)
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl,setNextUrl]=useState()
  const [prevUrl,setPrevUrl]=useState()
  const [pokeDex,setPokeDex]=useState()

  const getPokemon=async(res)=>{
    res.map(async(item)=>{
        const result=await axios.get(item.url)
        setPokeData(state=>{
          state=[...state,result.data]
          state.sort((a,b)=>a.id>b.id?1:-1)
          return state
        })
    })
  }
  const pokeFun=async()=>{
    setLoading(true)
    const res=await axios.get(url)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false) 
  }
  
  useEffect(()=>{
      pokeFun()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

  return (
    <div className='w-full h-full flex bg-gradient-to-br from-gray-500 to-white'>
        <div className='grid grid-cols-5 w-1/2 gap-8 px-12 py-12 mt-8'>
            <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
            <div className='button font-bold flex text-2xl'>
              <div className='mx-2 bg-red-600 to-cyan-500 p-1 rounded'>
                { prevUrl && <button onClick={()=>{
                  setPokeData([])
                  setUrl(prevUrl)
                }}>Prev</button>}
              </div>
              <div className='mx-2 bg-white p-1 rounded'>
                { nextUrl && <button onClick={()=>{
                  setPokeData([])
                  setUrl(nextUrl)
                }}>Next</button>}
              </div>
            </div>
        </div>
        <div className='flex justify-center items-center w-1/2'>
            <PokeInfo data={pokeDex}/>
        </div>
    </div>
  )
}
export default Main