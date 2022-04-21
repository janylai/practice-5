
import './Cards.css'

function Cards(props) {
    return(
       <div className='card'>
               <img className='img' src= {props.profilePic}/>
             <div>
              {props.username}  {props.id} 
             </div>
             <div>
               {props.userInfo}
            </div>

       </div>
    )
}

export default Cards