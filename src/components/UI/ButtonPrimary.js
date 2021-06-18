import './ButtonPrimary.css'
const ButtonPrimary = (props) => {
    return (
        <button className="buttonPrimary">{props.children}</button>
    )
}
export default ButtonPrimary;