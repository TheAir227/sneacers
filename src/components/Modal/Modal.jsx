import './Modal.css'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem';
export default function Modal() {
    function mod() {
        let modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
    }
    return (
        <>
            <div id='modal' onClick={mod} className="modal hidden">
                <div className="cart">
                    <div className="cart-top">
                        <h2>Корзина</h2>
                        <CartItem/>
                    </div>
                    <div className="cart-bottom">
                        <div className="text">
                            <p>Итого:</p>
                            <b>21000</b>
                        </div>
                        <div className="text">
                            <p>Налог 5%:</p>
                            <b>100</b>
                        </div>
                        <Button padding="15px" bradius="18px"> Оформить заказ → </Button>
                    </div>
                </div>
            </div>
        </>
    )
}