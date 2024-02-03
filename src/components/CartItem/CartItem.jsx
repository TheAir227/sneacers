import './CartItem.css'
import img from '../../../public/catalog/item1.png'
export default function CartItem(){
    return(
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="itemName">
                    <p>Мужские кросовки</p>
                    <p>Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <div className="krest">
                    ✕
                </div>
            </div>
        </>
    )
}