/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({donate}) => {
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color} = donate  || {}
    return (
    <Link to={`/donate/${id}`}>
      <div  style={{ backgroundColor: card_bg_color }} className="mx-auto container ">
           <div   className="card shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="mt-4 text-start p-3 font-medium  w-[30%] rounded-xl ">
  <button style={{ color: text_button_bg_color  }} className="p-1">{category}</button>
  </div>
    <p style={{ color: text_button_bg_color }} className="text-start font-semibold p-3">{title}</p>
    
</div>
   </div>
    </Link>
    );
};

export default Card;