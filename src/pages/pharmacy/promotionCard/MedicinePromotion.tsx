
const MedicinePromotion = () => {
    return (
        <div className="border rounded-2xl shadow-md flex ">
            
            <div className="flex-1 relative rounded-2xl bg-emerald-100 p-6">
                <h2 className="text-2xl font-bold mb-4">Special Offer: Save 15% on Medicine Purchases</h2>
                <p className="text-lg mb-4">Get 15% off on your order today!</p>
                
                <img src="/src/assets/doctor.svg" alt="Product" className="w-1/3 absolute bottom-0 right-0" />
                <a href="#" className="bttn common-btn ">Upload Prescription Now</a>
            </div>
            
            <div className="mt-6 ml-6 p-6">
                <h3 className="text-xl font-semibold mb-3">How does this work?</h3>
                <ol className="list-decimal pl-5">
                    <li className="mb-2 bg-blue-100 rounded-full px-3 py-1">Add medicines to your cart</li>
                    <li className="mb-2 bg-blue-100 rounded-full px-3 py-1">Add delivery address and place the order</li>
                    <li className="mb-2 bg-blue-100 rounded-full px-3 py-1">We will call you to confirm the medicines</li>
                    <li className="bg-blue-100 rounded-full px-3 py-1">Now, sit back! Your medicines will get delivered at your doorstep</li>
                </ol>
            </div>
        </div>
    );
}

export default MedicinePromotion;
