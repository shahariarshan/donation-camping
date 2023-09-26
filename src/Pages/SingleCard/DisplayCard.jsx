import swal from "sweetalert";


// eslint-disable-next-line react/prop-types
const DisplayCard = ({item}) => {
    const {id,picture,title,category_bg_color,text_button_bg_color,description,price} = item  || {}
    const handelClick = () => {
        // console.log(item);
        const addDonation =[];
        const donationAdded = JSON.parse (localStorage.getItem("donationAdded"));

        if(!donationAdded){
            addDonation.push(item);
            localStorage.setItem("donationAdded", JSON.stringify(addDonation));
            swal("Good Work!","Your Donation successfully added!","Success")
        

        }
        else {
            const isExits =donationAdded .find((item) => item.id === id);

            if(!isExits){
                addDonation.push(...donationAdded,item);
                localStorage.setItem("donationAdded", JSON.stringify(addDonation));
                swal("Good Work!","Your Donation successfully added!","Success")
            }
            else{
                swal("Error!","Already Donated!","Error")
            }
        }
    }
    
    return (
        <div className="mx auto container"  >
           <div style={{ color: category_bg_color }}  className="card shadow-xl">
 <div>
 <figure><img className="  lg:h-[600px] lg:max-w-full lg:relative" src={picture} alt="" /></figure>
 </div>
 <div className="bg-opacity-20">
  <button onClick={handelClick} style={{ backgroundColor: category_bg_color}} className="btn lg:absolute lg:mx-44  font-medium lg:-mt-16 p-3 "><span className="">Donation</span> {price}</button>
 </div>
 
   <div className=" lg:pl-40 mt-4">
   <p style={{ color: text_button_bg_color }} className="text-start text-3xl font-semibold ">{title}</p>
    <p className="mt-3 mb-10">{description}</p>
   </div>
    
    
</div>
   </div>
    );
};

export default DisplayCard;