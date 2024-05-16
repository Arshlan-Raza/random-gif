import Spinners from './Spinners';
import useGif from '../hooks/useGif';

const Random = () => {
    const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg 
    border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>A Random Gif</h1>
        
        {
            loading ? (<Spinners/>) : (<img src={gif} width="450" /> )
        }

        

        <button onClick={() => fetchData()} className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>

    </div>
  )
}

export default Random;