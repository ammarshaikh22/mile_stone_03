"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HeaderMenuOne } from "./HeaderMenu";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { ListMenu } from "./ListMenu";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenu from "./MobileMenu";
import { data1, data2 } from "@/data/data";
import SearchInputData from "./SearchInputData";
import axios from "axios";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenTo, setMenuOpenTo] = useState(false);
  const [name, setName] = useState("English");
  const [name2, setName2] = useState("USD");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)
  const [user, setUser] = useState(false)
  const route = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuTo = () => {
    setMenuOpenTo(!menuOpenTo);
  };
  const takeNames = (name: any) => {
    setName(name);
  };
  const takeNamesTwo = (name: any) => {
    setName2(name);
  };
  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get('/api/users/profile')
      setUser(res.data.user?.isLogin)
    }
    getUserData()
  }, [])
  const handleLogout = async (e: any) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/users/logout')
      alert('Logout successfully')
      setUser(false)
      route.push('/login')
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }
  return (
    <header
      className="relative"
      onClick={() => {
        if (menuOpen || menuOpenTo) {
          setMenuOpen(false);
          setMenuOpenTo(false);
        }
      }}
    >
      <div className=" max-w-[92%] mx-auto">
        <div className='md:flex hidden justify-between items-center after:absolute after:contents-[""] after:top-10 after:left-0 after:bottom-0 after:right-0 after:mx-auto after:w-full after:h-[1px] after:bg-slate-200 py-3'>
          <div className="flex gap-8 items-center relative">
            <p className='after:absolute after:contents-[""] after:top-0 after:left-0 after:right-6 after:mx-auto after:w-[1px] after:h-5 after:bg-slate-300 text-base'>
              <Link href="/about">About Us</Link>
            </p>
            <p>
              <Link href="/profile">My Account</Link>
            </p>
          </div>
          <div className="flex gap-12 items-center relative justify-center">
            <p className='after:absolute after:contents-[""] after:top-0 after:left-0 after:right-28 after:mx-auto after:w-[1px] after:h-5 after:bg-slate-200'>
              <PersonOutlineIcon />
              {
                user ? <span className="cursor-pointer" onClick={handleLogout}>Logout</span> : <span className="cursor-pointer"><Link href='/login'>Login</Link></span>
              }
            </p>
            <p className='after:absolute after:contents-[""] after:top-0 after:left-36 after:right-0 after:mx-auto after:w-[1px] after:h-5 after:bg-slate-200'>
              <Link href="/">{name}</Link>
              {menuOpenTo ? (
                <ExpandLessIcon
                  onClick={handleMenuTo}
                  className="cursor-pointer"
                />
              ) : (
                <ExpandMoreIcon
                  onClick={handleMenuTo}
                  className="cursor-pointer"
                />
              )}
            </p>
            {menuOpenTo ? (
              <HeaderMenuOne
                names={data1}
                fuc={takeNames}
                className={`absolute top-10 left-10 right-0 mx-auto w-[100px] h-[164px] border rounded-md bg-white z-20`}
              />
            ) : null}
            <p>
              <Link href="/">{name2}</Link>{" "}
              {menuOpen ? (
                <ExpandLessIcon
                  onClick={handleMenu}
                  className="cursor-pointer"
                />
              ) : (
                <ExpandMoreIcon
                  onClick={handleMenu}
                  className="cursor-pointer"
                />
              )}
            </p>
            {menuOpen ? (
              <HeaderMenuOne
                names={data2}
                fuc={takeNamesTwo}
                className="absolute top-10 left-64 right-0 mx-auto w-[80px] h-[156px] border rounded-md z-30 bg-white"
              />
            ) : null}
          </div>
        </div>
        <div className={`w-full bg-white left-0 right-0 transition-transform duration-300 ${isScrolled ? 'fixed top-0 z-50 shadow-md' : 'relative'}`}>
          <div className={`flex justify-between items-center py-5 ${isScrolled ? "max-w-[92%] mx-auto" : null} `}>
            <div>
              <Image src="/logo.png" alt="logo" height={130} width={130} />
            </div>
            <div className="relative md:block hidden" >
              <ListMenu />
            </div>
            <div className="relative md:block hidden">
              <SearchInputData />
              <div className="absolute top-3 right-4">
                <SearchIcon className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <WorkOutlineIcon />
                <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-purple-700 w-[20px] h-[20px] mx-auto text-center text-sm text-white'>
                  0
                </span>
              </div>
              <div className="relative">
                <FavoriteBorderIcon />
                <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-black text-white w-[20px] h-[20px] mx-auto text-center text-sm'>
                  0
                </span>
              </div>
              <div className="relative">
                <SyncAltIcon />
                <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-black w-[20px] h-[20px] mx-auto text-center text-white text-sm'>
                  0
                </span>
              </div>
              <div className="md:hidden block relative">
                {
                  mobileMenu ? <span onClick={() => setMobileMenu(!mobileMenu)} className="z-30 fixed top-6 right-7"><CloseIcon /></span> : <span onClick={() => setMobileMenu(!mobileMenu)}><MenuIcon /></span>
                }
              </div>
              <div className={`p-6 fixed top-0 right-0 h-full overflow-scroll z-20 w-[80%] bg-gray-100 border backdrop-brightness-0 transform transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "translate-x-full"
                }`}>
                {
                  mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu} /> : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
