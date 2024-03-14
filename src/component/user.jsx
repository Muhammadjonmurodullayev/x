import React,{useState,useEffect} from 'react'
import "./user.css"
import Logo from "./img/LOGO.png"
import {IoMenu} from "react-icons/io5"
import Device from "./img/Device.png"
import Chiziq from "./img/Chiziq.svg"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img9 from "./img/img9.png"
import Cover from "./img/cover.svg"
import {FaChevronRight} from "react-icons/fa"
import Png_icons from "./img/png_icons.png"
import gogle from "./img/gogle.svg"
import Group769 from "./img/Group769.png"
import Grouplo from "./img/Grouplo.png"
import Behance from "./img/behance.svg"
import Behance1 from "./img/behance (1).svg"
import Behance2 from "./img/behance (2).svg"
import bg from "./img/bg.png"
import Rectangle2 from "./img/Rectangle 203.svg"
const User=() => {
    const [ekranOlchami,setEkranOlchami]=useState(window.innerWidth)
    const [ekranOlchami1,setEkranOlchami1]=useState(window.innerWidth)
    const [ekranOlchami2,setEkranOlchami2]=useState(window.innerWidth)
    useEffect(() => {
        const handleResize=() => {
            setEkranOlchami(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    useEffect(() => {
        const handleResize=() => {
            setEkranOlchami(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return (
        <>
            <div className='parent'>
                <img className='logo' src={Logo} alt="#" />
                <div className='text'>
                    {ekranOlchami1<=768? (
                        <IoMenu className='menu' />
                    ):(
                        <>
                            <p id='text'>Bosh sahifa</p>
                            <p>Savollar</p>
                            <p>Reklama</p>
                            <p>Yangiliklar</p>
                            <p>Hamkorlar</p>
                            <p>Kontakt</p>
                        </>
                    )}
                </div>
            </div>
            <div className="parent2">
                <div className='pozition'>
                    {ekranOlchami2<=830? (
                    <p className='text_position'>Biz do'konlar Va Xaridorlar o'rtasidagi <br /> servismiz.</p>
                    ):(
                        <div className='parent_text_id67'>
                            <p className='text_position'>Biz do'konlar Va Xaridorlar o'rtasidagi <br /> servismiz.</p>
                        </div>
                    )}
                    <img className='Device' src={Device} alt="" />
                </div>
            </div>
            <div className="parent3">
                <div className='parent_text'>
                    <p className='takliflar'>Bizning takliflar</p>
                    <img className='chiziq' src={Chiziq} alt="" />
                </div>
                <div className="parent3">
                    <div className='icons'>
                        <div className='card'>
                            <img src={img1} alt="" />
                            <p>Vaqtingizni tejang</p>
                        </div>
                        <div className='card'>
                            <img src={img2} alt="" />
                            <p>online xarid</p>
                        </div>
                        <div className='card'>
                            <img src={img3} alt="" />
                            <p>Ma'suliyatli jamoa</p>
                        </div>
                        <div className='card'>
                            <img src={img4} alt="" />
                            <p>katta assortiment</p>
                        </div>
                    </div>
                    <div className="icons2">
                        <div className='card'>
                            <img src={img1} alt="" />
                            <p>Vaqtingizni tejang</p>
                        </div>
                        <div className='card'>
                            <img src={img2} alt="" />
                            <p>online xarid</p>
                        </div>
                        <div className='card'>
                            <img src={img3} alt="" />
                            <p>Ma'suliyatli jamoa</p>
                        </div>
                        <div className='card'>
                            <img src={img4} alt="" />
                            <p>katta assortiment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parent4">
                <div className="parent4_text">
                    <p className='p_parent3'>Ko’p so’raladigan savollar</p>
                    <p className='p_parent4'>Kerakli javobni bilib oling</p>
                </div>
                <div className="imput_id">
                    <div className='sxema'>
                        <p className='sxema_text'>Stroymarket.uz  nima va kimlarga kerak?</p>
                        <img className='sxema_img' src={img9} alt="" />
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>
                    <div className='sxema_text2'>
                        <p className='sxema_text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
                    </div>
                </div>
                <div className="imput_id">
                    <div className='sxema'>
                        <p className='sxema_text'>Stroymarket.uz  nima va kimlarga kerak?</p>
                        <img className='sxema_img' src={img9} alt="" />
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>
                    <div className='sxema_text2'>
                        <p className='sxema_text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
                    </div>
                </div>
                <div className="imput_id">
                    <div className='sxema'>
                        <p className='sxema_text'>Stroymarket.uz  nima va kimlarga kerak?</p>
                        <img className='sxema_img' src={img9} alt="" />
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>
                    <div className='sxema_text2'>
                        <p className='sxema_text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
                    </div>
                </div>
            </div>
            <div className="parent5">
                <div className='reklama'>
                    <p className='reklama_text'>Reklama</p>
                    <p className='reklama_text2'>Siz uchun foydali takliflar</p>
                </div>
                <div className='reklama_div'>
                    <img className='cover' src={Cover} alt="" />
                    <p className='cover_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="parent6">
                <div className="yangiliklar">
                    <p className='yangiliklar_text'>Yangiliklar</p>
                    <p className='yangiliklar_text2'>Tandirdan uzilgan xabarlar</p>
                </div>
                {ekranOlchami>=800? (
                    <>
                        <div className='imgggg'>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Chilonzorda yangi hamkor</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                        </div>
                        <div className='imgggg'>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Chig’atoyda yetkazib berish bepul bo’ldi</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                        </div>
                        <div className='imgggg'>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Ilovadagi o’zgarishlar</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                        </div>
                    </>
                ):(
                    <>
                        <div className='imgggg'>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Chilonzorda yangi hamkor</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='imgggg'>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Chig’atoyda yetkazib berish bepul bo’ldi</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imgggg'>
                            <div className="img_chilonzor">
                                <img className='Png_icons' src={Rectangle2} alt="" />
                            </div>
                            <div className="img_div_id">
                                <div className='chilonzor45'>
                                    <p className='chilonzor'>Ilovadagi o’zgarishlar</p>
                                    <p className='chilonzor2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    <div className='button_name'>
                                        <p>see more</p>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="parent7">
                <div className='hamkorlar'>
                    <p className='hamkorlar_text'>Hamkorlar</p>
                    <p className='hamkorlar_text2'>Bizning ajoyib hamkorlarimiz</p>
                </div>
                <div className='hamkorlar_icos'>
                    <div className='gogle_icons'>
                        <img className='gogle' src={Behance2} alt="" />
                        <img className='gogle' src={Behance} alt="" />
                        <img className='gogle' src={gogle} alt="" />
                        <img className='gogle' src={Behance1} alt="" />
                    </div>
                    <div className='gogle_icons'>
                        <img className='gogle' src={Behance2} alt="" />
                        <img className='gogle' src={Behance} alt="" />
                        <img className='gogle' src={gogle} alt="" />
                        <img className='gogle' src={Behance1} alt="" />
                    </div>
                </div>
            </div>
            <div className="kontact">
                <div className='kontact34'>
                    <div className='logo_pg'>
                        <img className='hgg' src={Logo} alt="" />
                        <p className='hg' > stroymarket@gmail.com</p>
                        <p className='hg' >+998 90 123 45 56</p>
                        <p className='hg'>    +998 91 123 45 56</p>
                        {/*  <p>Sergeli tumani, Labzak 8-12</p> */}
                    </div>
                    <div className='logo_pg2'>
                        <p className='ppp'>Dasturchilar</p>
                        <p>developer@gmail.com</p>
                        <p>+99890 123 45 67</p>
                    </div>
                </div>
                <div className="kontact65">
                    <div className='logo_pg3'>
                        <p className='ppp'>Ijtimoiy tarmoqlar</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Pinterest</p>
                        <p>Linkedin</p>
                    </div>
                    <div className='logo_pg4'>
                        <p className='ppp'>Hoziroq yuklab oling</p>
                        <div className="play">
                            <img src={Group769} alt="#" />
                        </div>
                        <div className="play">
                            <img src={Grouplo} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
