import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getBase64 } from './utils/img';
import './Perfil.css'
import AOS  from 'aos';

export default function Profile({ user }) {
    const [image, setImage] = useState('');

    const onChangeImg = async (e) => {
        const file = e.target.files[0];
        const image = await getBase64(file);
        setImage(image);
        await axios.put('/usuarios', { image });
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <br />
            <div data-aos="fade-up" className="Perfil-cont">
                <div>
                    <div className="Perfil-img-cont">
                        <img className="Perfil-img" src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="profile" />
                    </div>
                </div>
                <div className='Perfil-info'>
                    <p data-aos="fade-right"><b style={{ color: "#fe8a39"}}>Nombre:</b> {user.nombre}</p>
                    <p data-aos="fade-right"><b style={{ color: "#fe8a39"}}>Mail:</b> {user.email}</p>
                    <p data-aos="fade-right"><b style={{ color: "#fe8a39"}}>Celular:</b> {user.celular}</p>
                    {/* <FormUser token={token} /> */}
                </div>
            </div>
            <br />
        </div>
    );
}
