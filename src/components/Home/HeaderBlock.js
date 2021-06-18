import './HeaderBlock.css';

const HeaderBlock = () => {
    return (
        <div className="headerBlock">
            <div className="headerBlock__info">
                <div className="headerBlock__infoText">
                    <h1>Model S</h1>
                    <h4>
                        Order Online for <span>Touchless Delivery</span>
                    </h4>
                </div>
                <div className="headerBlock__actions">
                    <button className="headerBlock__button--primary">custom order</button>
                    <button className="headerBlock__button--secondary">existing inventory</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock
