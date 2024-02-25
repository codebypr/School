import { createSlice } from "@reduxjs/toolkit"

 const initialState={
        teacherData:[
            { id: '1', name: 'Ram kumar', class: '12th', phone: '1234567890' },
            { id: '2', name: 'Shyam', class: '12th', phone: '123453330' },
            { id: '3', name: 'Anand', class: '2nd', phone: '8976564890' },
            { id: '4', name: 'Ram', class: '10th', phone: '1234567890' },
            { id: '5', name: 'Rani', class: '11th', phone: '1234567890' },
            { id: '6', name: 'Shiva', class: '5th', phone: '1234567890' },
            { id: '7', name: 'Ram', class: '12th', phone: '1234567890' },
                    ]
}

export const TeacherSlice=createSlice({
    name:'teacher',
    initialState,
    reducers:{

    }
})

export default TeacherSlice.reducer
