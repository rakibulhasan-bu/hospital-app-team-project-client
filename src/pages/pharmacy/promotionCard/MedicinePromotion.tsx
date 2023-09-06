
const MedicinePromotion = () => {
    return (
        <div className="promo-section">
            <h2>Special Offer: Save 15% on Medicine Purchases</h2>
            
            {/* Product Image */}
            <img src="#" alt="Product" className="product-image" />
            
            <p>Get 15% off on your order today!</p>
            
            {/* Upload Prescription Button */}
            <a href="#" className="upload-btn">Upload Prescription Now</a>
            
            <div className="how-it-works">
                <h3>How does this work?</h3>
                <ol>
                    <li>Add medicines to your cart</li>
                    <li>Add delivery address and place the order</li>
                    <li>We will call you to confirm the medicines</li>
                    <li>Now, sit back! Your medicines will get delivered at your doorstep</li>
                </ol>
            </div>
        </div>
    );
}

export default MedicinePromotion;

