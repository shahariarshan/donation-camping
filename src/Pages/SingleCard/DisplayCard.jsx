

const DisplayCard = ({item}) => {
    const {id,picture,title,category_bg_color,text_button_bg_color,description,price} = item  || {}
    
    return (
        <div   >
           <div style={{ color: category_bg_color }}  className="card shadow-xl">
 <div>
 <figure><img className="  lg:h-[600px] lg:max-w-full lg:relative" src={picture} alt="" /></figure>
 </div>
 <div>
  <button style={{ backgroundColor: category_bg_color}} className="btn lg:absolute lg:mx-44 lg:-mt-16 p-3">Donation {price}</button>
 </div>
 
    <p style={{ color: text_button_bg_color }} className="text-start text-3xl font-semibold p-3">{title}</p>
    <p className="p-3 ">{description}</p>
    
    
</div>
   </div>
    );
};

export default DisplayCard;