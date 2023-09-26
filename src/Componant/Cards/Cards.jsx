import Card from "../Card/Card";

const Cards = ({donation}) => {
    // console.log(donation);
    return (
        <div className="mx-auto container"> 
            {/* <h1 className="text-center text-2xl">All Items</h1> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
               {
                 donation.map(donate => <Card key={donate.id} donate={donate}></Card>)
               }
            </div>
        </div>
    );
};

export default Cards;