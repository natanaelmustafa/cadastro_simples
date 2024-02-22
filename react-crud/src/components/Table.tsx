import './Table.css'
import { IconeEdicao, IconeLixo } from "./Icons"
import Client from "../core/Client"

interface TabelaProps{
    clients: Client[] | undefined,
    selectedClient?: (client: Client) => void,
    DeletedClient?: (client: Client) => void
}
const Table = (props: TabelaProps) =>{
    const displayActions = props.DeletedClient || props.selectedClient
    function renderHeader(){
        return(
            <tr>
                <th className="text-start p-3">Código</th>
                <th className="text-start p-3">Nome</th>
                <th className="text-start p-3">Idade</th>
                {displayActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }
    function renderData(){
        return props.clients?.map((client, i) =>{
            return(
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'purple0' : 'purple1'}`}>
                    <td className="text-start p-3">{client.id}</td>
                    <td className="text-start p-3">{client.name}</td>
                    <td className="text-start p-3">{client.age}</td>
                    {displayActions ? renderActions(client) : false}
                </tr>
            )
        })
    }
    function renderActions(client: Client){
        return(
            <td className="d-flex justify-content-start">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className={`
                        d-flex justify-content-center align-items-center
                        text-success rounded-circle border-0 p-3 m-1
                        hover-button
                    `}>{IconeEdicao}</button>
                ): false}
                {props.selectedClient ? (
                    <button onClick={() => props.DeletedClient?.(client)} className={`
                        d-flex justify-content-center align-items-center
                        text-danger rounded-circle border-0 p-3 m-1
                        hover-button
                    `}>{IconeLixo}</button>
                ): false}
            </td>
        )
    }
    return(
        <div className='teste'>
            <table className='container-fluid rounded overflow-hidden'>
            <thead className='table-head'>{renderHeader()}</thead>
            <tbody>{renderData()}</tbody>
        </table>
        </div>
    )
}
export default Table