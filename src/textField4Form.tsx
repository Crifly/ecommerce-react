import React from 'react'
import {useField} from 'formik'

export const TextField = ({ ...props}) => {
    const [field,meta] = useField('')
    return(
        <>
            <input  type="text"  />
        </>
    )
}