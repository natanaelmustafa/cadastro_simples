import './Button.css'

interface ButtonProps{
    color?: 'green' | 'blue'
    className?: string
    children: any
    onClick?: () => void
}

const Button = (props: ButtonProps)=>{
    return(
        <button onClick={props.onClick} className={`button ${
            props.color === 'green' ? 'green' : props.color === 'blue' ? 'blue' : ''
        }`}>{props.children}</button>
    )
}
export default Button