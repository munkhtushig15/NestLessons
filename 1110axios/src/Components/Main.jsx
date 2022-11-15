import '../App.css'

export const Main = ({data}) => {
    return (
        <div className="container">
            <div className='dataContainer'>
                <div>name: {data.name}</div>
                <div>username: {data.username}</div>
                <div>email: {data.email}</div>
            </div>
        </div>
    )
}