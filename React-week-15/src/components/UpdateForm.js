import React, {useState} from 'react'

const initialState = {
    id: '',
    title: '',
    body: ''
}

const UpdateForm = () => {

    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const updateData = async () => {
        const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        const data =  await res.json()
        console.log(data)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        updateData()
        setFormData(initialState)
    }

  return (
    <div>
        <h2>Update Post Form</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text"
                    placeholder='Enter ID'
                    name='id'
                    value={formData.id} 
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title} 
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter Body'
                    name='body'
                    value={formData.body} 
                    onChange={onChange}
                />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default UpdateForm