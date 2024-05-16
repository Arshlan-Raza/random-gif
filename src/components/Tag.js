
import React, {useState } from 'react'
import Spinners from './Spinners';
import useGif from '../hooks/useGif';


const Tag = () => {

    const [tag, setTag] = useState('');

    const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg 
    border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>Random {tag} Gif</h1>
        
        {
            loading ? (<Spinners/>) : (<img src={gif} width="450" /> )
        }

         <input  className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center' onChange={(event) => setTag(event.target.value)}
         value={tag}/>   

        <button onClick={() => fetchData(tag)} className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>

    </div>
  )
}

export default Tag;