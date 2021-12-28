import React from 'react'
import useFetch from '../hooks/useFetch'

const Card = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <div className='p-8 bg-gray-400 text-black text-center'>
            {data && data.map((todo) => (
                <p key={todo.id}>{todo.title} is {todo.completed ? 'completed' : 'not completed'}</p>
            ))}
        </div>
    )
}

export default Card
