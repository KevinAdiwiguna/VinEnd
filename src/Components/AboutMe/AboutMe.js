import React, { useEffect } from 'react'
import "./aboutme.css"
import avatar1 from  '../../Assets/Images/avatar.jpg'

import Aos from 'aos'
import "aos/dist/aos.css"

function AboutMe() {

    useEffect(() => {
        Aos.init({duration:2400})
    },[])

  return (
    <div className='aboutme-class' id='aboutme'>
        <div className='aboutme-cotnainer'>
            <div className='aboutme-content'>
                <h1 className='text-center'  data-aos="fade-up-right">About Me</h1>
                <div className='aboutme-content-1'>
                    <div className='aboutme-img-01'>
                    <img src={avatar1} alt='avatar img'  data-aos="fade-right"/>
                    </div>
                    <div className='aboutme-text-01'>
                        <h5 data-aos="fade-up">Hallo semuanya Saya kevin</h5>
                        <p data-aos="fade-up">Hai saya Kevin. Saya berasal dari indonesia dan saya sekolah di SMKN 2 Mataram di jalan pemuda</p>
                        <table >
                            <tr >
                                <td data-aos="fade-up">Age: </td>
                                <td data-aos="fade-up">16</td>
                            </tr>
                            <tr  >
                                <td data-aos="fade-up">Email: </td>
                                <td data-aos="fade-up">kevinadiwiguna.school@gmail.com</td>
                            </tr>
                            <tr  >
                                <td data-aos="fade-up">Phone</td>
                                <td data-aos="fade-up">085*******98</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutMe