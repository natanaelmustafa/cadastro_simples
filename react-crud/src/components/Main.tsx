import './Main.css'
import Title from './Title';

interface MainProps{
    title: string
    children?: any
}

const Main = (props: MainProps) =>{
    return(
        <div className='principal'>
            <Title>{props.title}</Title>
            <div className='p-4'>{props.children}</div>
        </div>
    )
}
export default Main;