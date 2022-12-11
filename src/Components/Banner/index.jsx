import style from './style.css'

export default function Banner(){
    return(
        <div className="container">
            <div className="box-text">
                <h2>As melhores fragrancias</h2>
                <p>Há um click de distância</p>
                <button className='btn-home'>Veja mais</button>
            </div>
            <div className="box-image">
                <div className="gost-color"></div>
                <img src="https://images.unsplash.com/photo-1569172683675-125281f86e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWwlMjBhbW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    )
}