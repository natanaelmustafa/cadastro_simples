import { useState } from "react"
import Client from "../core/Client"
import Input from "./Input"
import Button from "./Button"

interface FormProps{
    client?: Client
    saveClient?: (client: Client) => void
    canceled?: () => void
}

const Form = (props: FormProps) =>{
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return(
        <div>
            {id ? (<Input _readonly text="Código" _value={id}></Input>) : false}

            <Input text="Nome" _value={name} valueChanged={setName}></Input>
            <Input text="Idade" type="number" _value={age} valueChanged={setAge}></Input>

            <div className="d-flex justify-content-end mt-4">
                <Button color={'blue'} onClick={() => props.saveClient?.(new Client(name, +age, id))}
                    >{id ? 'Alterar' : 'Salvar'}</Button>
                <div className="ms-2">
                    <Button onClick={props.canceled}>Cancelar</Button>
                </div>
            </div>
        </div>
    )
}
export default Form