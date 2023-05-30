import axios from 'axios';



export const uploadImage = async (file: any) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'k7vkgwnn');
        const resp = await axios.post('https://api.cloudinary.com/v1_1/djalhvlj2/image/upload', formData)
        return resp.data.secure_url;
    } catch (error) {
        console.log(error);
        return null;
    }
};