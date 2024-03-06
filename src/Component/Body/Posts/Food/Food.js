import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import './Food.css'
import dinner from '../../../../datas'
const Foods = () => {
  const params = useParams()
  const [dinners , setDinner] = useState(dinner)
  const food = dinners.find(item => item.title == params.title)

  return (
    <div className='food_body'>
      
    </div>
  )
}

export default Foods
