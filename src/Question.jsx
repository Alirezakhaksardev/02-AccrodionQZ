import { useState } from 'react'
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai'

function Question({data}) {

  const [showInfo , setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{data.title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {
            !showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />
          }
        </button>
      </header>
      { 
        showInfo && 
          <p>
            {data.info}
          </p> 
      }
    </div>
  )
}

export default Question