const User = ({ item, deleteFunction }) => {

    return (
        <div key={item.id} className="squareStyle">
            {item.age} - {item.name}
            <button onClick={() => deleteFunction(item.id)}>삭제</button>
        </div>
    )
}

export default User;