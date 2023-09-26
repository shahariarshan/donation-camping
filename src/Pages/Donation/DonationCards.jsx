
// eslint-disable-next-line react/prop-types
const DonationCards = ({item}) => {
    // eslint-disable-next-line no-unused-vars
    const {picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price} = item  || {}
    return (
        <div className=" bg-base-300">
    <div>
    <div className=" flex flex-1 gap-5">
    <figure><img className="h-auto=" src={picture} alt="" /></figure>
    <div className="py-5">
    
    <button style={{ color: text_button_bg_color  }} className="p-1 font-medium">{category}</button>
    <p  className="text-start text-2xl font-semibold pt-2 ">{title}</p> 
    <p style={{ color: text_button_bg_color }} className="text-sm pt-2"><span className="text-lg font-normal"> Amount: {price}.00</span></p>   
    <button  style={{ backgroundColor: category_bg_color}} className="btn font-medium  text-red mt-4">View Details</button>
    </div>
    </div>
    
        </div>

        
        
</div>


      
    );
};

export default DonationCards;