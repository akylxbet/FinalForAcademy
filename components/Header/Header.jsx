import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import Burger from "@/components/Header/Burger/Burger";
import {useDispatch, useSelector} from "react-redux";
import h from './Header.module.scss'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton, Button, useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import {useEffect, useRef, useState} from "react";
import NoAcc from "@/components/NoAcc/NoAcc";
import {logout} from "@/redux/reducers/user";
import {useDebounce} from "@/hooks/debounce";
import {getProducts} from "@/redux/reducers/products";

const Header = () => {

    const router = useRouter()
    const { user } = useSelector(state => state.user)
    const [name,setName] = useState('')
    const dispatch = useDispatch()

    const debounced = useDebounce(name)

    useEffect(() => {
        dispatch(getProducts(debounced))
    },[debounced])

    useEffect(() => {
        setName('')
    },[router])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    let func = {
        isOpen,
        onOpen,
        onClose,
        cancelRef
    }

    const logoOut = () => {
        localStorage.removeItem('user')
        dispatch(logout())
    }

    return (
        <header className={h.header}>
            <div className="container">
                <nav className={h.header__nav}>
                    <div className={h.header__burger}>
                        <Burger />
                    </div>
                    <Link href="/" className={h.header__title}>
                        <img src="/bozuy.png" alt="" />
                    </Link>

                    <ul className={h.header__list}>
                        <Link href="/" className={h.header__list_item}>Главная</Link>
                        <Link href="/catalog" className={h.header__list_item}>О нас</Link>
                        <Link href="/disctrict" className={h.header__list_item}>Наши районы</Link>
                    </ul>
                    <div className={h.header__icons}>
                        <div className={h.header__icons_notify}  onClick={user? () => router.push('/favorites'): onOpen } >
                            <NoAcc func={func}/>
                            <FiHeart size={23}/>
                        </div>

                        <div className={h.header__icons_notify} onClick={user? () => router.push('/basket'): onOpen }  >
                            <NoAcc func={func}/>
                            <span className={h.header__icons_notify_red}></span>
                            <BsBag size={23} />
                        </div>

                        <Popover isLazy>
                            <PopoverTrigger>
                                <Button variant='link'><FiUser size={23} color="black"/></Button>
                            </PopoverTrigger>

                            <PopoverContent w="initial" >
                                <PopoverHeader paddingRight="50px" fontWeight='semibold'>{user ? user?.name : "Вы не авторизованы"}</PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>
                                    {
                                        user ?
                                            <Button onClick={() => logoOut()} colorScheme='teal' variant='solid'>
                                                Log out
                                            </Button> :

                                            <Button onClick={() => router.push('/register')} colorScheme='teal' variant='solid'>
                                                Авторизоваться
                                            </Button>
                                    }
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </nav>
        

            </div>
        </header>
    );
};

export default Header;