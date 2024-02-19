import feestructure from '../MyImages/feeStructure.jpg';
import feestructure2 from '../MyImages/feeStructure2.jpg';
function FeeStructure(){
    return(
        <>
            <div className="container my-5 pt-5">
                 <h1 className="text-center mb-5">Fees Structure</h1> 
                <div className="container text-center">
                   <img src={feestructure} alt="" />
                   <img src={feestructure2} alt="" />
                </div> 
            </div>
        </>
    );
}
export default FeeStructure;