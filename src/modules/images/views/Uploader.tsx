import React from 'react'

import { FilledInput } from '@mui/material';

import {uploadImage} from '../../../common/Config_clodinary'



const Uploader = () => {

 const [image, setImage] = React.useState('https://res.cloudinary.com/djalhvlj2/image/upload/v1685410352/ror0nq9xkp819jis1hno.jpg')

    const handleUpload = async (e: any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const url = await uploadImage(file)
        console.log(url)
        if(url)
        setImage(url)
    }   

  return (
    <>
    <h1>Subidor Prueba</h1>
    <img src={image} alt="imagen" />
    <FilledInput type="file" onChange={handleUpload} />
    
    </>
  )
}

export default Uploader