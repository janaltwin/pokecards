import React from 'react'
import {DiCodeigniter} from 'react-icons/di'
import pokemon from '../assets/pokemon.png'
import poketypes from '../assets/poketypes.png'

const PokeInfo = ({data}) => {
  return (
      <>
      {
        (!data) ? <div className='mb-10 w-96'><img src={pokemon} alt=""/></div>:(
          <>
          <div class="relative p-4 bg-card shadow-md w-1/2 h-3/4 mb-2 rounded-sm ring-amber-300 ring-8 font-roboto text-black">
            <div className='uppercase flex justify-between font-black px-2 mb-1'>
              <h3 className='mb-1'>{data.name}</h3>
              <h3 className="flex"><span className='border-3 rounded-full bg-cyan-400 mb-1'><DiCodeigniter size={25} color='blue'/></span>{data.base_experience}</h3>
            </div>
            <div className='absolute w-16 mb-6 left-0 top-8'><img src={poketypes} alt=''/></div>
            <div class="bg-cardHeader border-neutral-200 shadow-lg w-full h-1/2 ring-cyan-500 ring-8">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="Pokémon" className='p-auto w-52 h-60 m-auto'/>
            </div>
                <div class="justify-center mt-4">
                <span class="font-bold gap-2 flex justify-center text-center capitalize mt-4">Type: {
                              data.types.map(pokemon=>{
                                return(
                                    <div>
                                        <h3>{pokemon.type.name}</h3>
                                    </div>
                                )
                            })
                            }
                </span>
                  <span class="font-bold flex justify-center gap-2 text-center capitalize mt-4">Abilities: {
                              data.abilities.map(pokemon=>{
                                    return(
                                        <div>
                                            <h2>{pokemon.id}{pokemon.ability.name}</h2>
                                        </div>
                                    )
                                })
                            }
                    </span>
                    <span class="font-bold gap-2 text-center capitalize grid justify-center grid-cols-2 mt-6 pt-4">{
                              data.stats.map(pokemon=>{
                                return(
                                    <>
                                        <h3>{pokemon.stat.name}:{pokemon.base_stat}</h3>
                                    </>
                                )
                            })
                            }
                    </span>
                </div>
            </div>
          </>
        )
      }
        
      </>
  )
}

export default PokeInfo