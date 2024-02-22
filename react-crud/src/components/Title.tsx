import './Title.css'

const Title = (props: any)=>{
    return(
        <div className="d-flex flex-column justify-content-center">
            <h4 className="ps-4 pt-2 pe-2">
                {props.children}
            </h4>
            <hr/>
        </div>
    )
}

export default Title