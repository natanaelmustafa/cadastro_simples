import './Input.css'

interface InputProps{
    type?: 'text' | 'number'
    text: string
    _value: any
    _readonly?: boolean
    valueChanged?: (value:any) => void
}

const Input = (props: InputProps)=>{
    return(
        <div className="d-flex flex-column mb-2">
            <label className="mb-2">
                {props.text}
            </label>
            <input type={props.type ?? 'text'}
                value={props._value}
                readOnly={props._readonly}
                onChange={e =>props.valueChanged?.(e.target.value)}
                className={`${props._readonly ? '' : 'bg-focus'}`}></input>
        </div>
    )
}
export default Input