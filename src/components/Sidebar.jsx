
import logo from "./../assets/logo.svg"
import { IoClose } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarDisplay } from "../features/sidebarDisplaySlice";
import { toggleTheme } from "../features/themeSlice";
import { useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { setActive } from "../features/userDocs";
import { setMarkdown } from "../features/markdownSlice";

export default function Sidebar() {
    const userDocs = useSelector(state => state.userDocs.value)
    const dispatch = useDispatch()

    return (
        <div className="h-screen absolute left-0 top-0 p-6 bg-sidebar text-white flex flex-col gap-7 w-[19rem] items-start overflow-x-hidden sidebar">
            <button className="w-full text-xl"
                onClick={() => { dispatch(setSidebarDisplay(false)) }}
            >
                <IoClose className="float-right inline" />
            </button>
            <img src={logo} alt="logo" />

            <button className="bg-orange hover:bg-orange/80 px-4 py-3 w-full text-sm flex gap-3 font-medium items-center justify-center rounded-md">
                <FaPlus className="text-md" />
                New Document
            </button>

            <span className="text-xs tracking-[0.2rem] mt-4 text-greytext">MY DOCUMENTS</span>

            <div className="flex flex-col gap-7 max-h-[60%] overflow-auto">
                {
                    userDocs.docsList.map((doc, key) => {
                        return (
                            <DocTile key={key} doc={doc} idx={key} />
                        )
                    })
                }
            </div>

            <ThemeBtn />
        </div>
    )
}


function DocTile({doc, idx}) {
    const userDocs = useSelector(state => state.userDocs.value)
    const dispatch = useDispatch()
    return (
        <button className="flex gap-5  items-center"
        onClick={() => {
            dispatch(setActive(idx))
            dispatch(setMarkdown(userDocs.docsList[idx].content))
        }}
        >
            <IoDocumentText className="text-2xl" />
            <div className="flex flex-col text-xs font-extralight justify-start items-start">
                <span className="text-greytext"> {doc.createdAt} </span>
                <span className="font-normal text-[0.9rem] mt-1" style={ userDocs.active == idx ? {color: "#e36643"} : {} }> {doc.name} </span>
            </div>

        </button>
    )
}


function ThemeBtn() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)
    const toggleBtn = useRef(null)

    useEffect(() => {
        toggleBtn.current.style.justifyContent = theme === "light" ? "flex-start" : "flex-end";
    }, [theme])
    function handleThemeToggle(e) {
        if (theme == "light") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        dispatch(toggleTheme())
    }



    return (
        <div className="flex gap-3 text-lg items-center absolute bottom-6">
            <FaRegSun />
            <button
                className="bg-greytext rounded-full w-10 flex items-center p-1 h-5 justify-end "
                onClick={(e) => handleThemeToggle(e)}
                ref={toggleBtn}
            >
                <span className="bg-lsecondary aspect-square h-full rounded-full" />
            </button>
            <FaRegMoon className="text-md" />

        </div>
    )
}