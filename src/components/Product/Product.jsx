
import like from '../../../public/catalog/like.svg'
import './Product.css'
export default function Product({category, name, img, price}) {
    return (
        <>
            <div className="item">
                <div className="like">
                    <img src={like} alt="" />
                </div>

                <img className='imageitem' src={img} alt="" />
                <div className="item-top">
                    <p>{category}</p>
                    <p>{name}</p>
                </div>
                <div className="item-bottom">
                    <div className="price">
                        <span>ЦЕНА:</span>
                        <p>{price} руб</p>
                    </div>
                    <button className='add'>+</button>
                </div>
            </div>
        </>
    )
}