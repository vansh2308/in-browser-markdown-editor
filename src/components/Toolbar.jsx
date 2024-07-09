import { IoMenu } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import logo from "./../assets/logo.svg"
import logoDark from "./../assets/logo-dark.svg"
import { AiFillDelete } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarDisplay } from "../features/sidebarDisplaySlice";
import { deleteDoc, setContent, setSaved } from "../features/userDocs";
import { setMarkdown } from "../features/markdownSlice";
import { useEffect } from "react";

export default function Toolbar({ }) {
    let theme = useSelector(state => state.theme.value)
    let userDocs = useSelector(state => state.userDocs.value)
    let markdown = useSelector(state => state.markdown.value)
    const dispatch = useDispatch()


    const handleSave = (e) => {
        e.preventDefault();
        dispatch(setSaved({type: "saved"}));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(userDocs.active)
        let mkdn = userDocs.docsList.length == 1 ? null : userDocs.active == 0 ? userDocs.docsList[1].content : userDocs.docsList[0].content
        dispatch(setMarkdown(mkdn))
        dispatch(deleteDoc());    

    }


    return (
        <div className="w-full h-fit p-6 flex justify-between">
            <div className="flex gap-9 items-center text-3xl ">
                <button onClick={() => dispatch(setSidebarDisplay(true))}>
                    <IoMenu />
                </button>
                <img src={theme == "light" ? logoDark : logo} alt="logo" className="w-32" />
                <div className="flex gap-3 pl-5 border-l-[1px] border-dprimary dark:border-lprimary items-center">
                    <IoDocumentText />
                    <div className="flex flex-col text-xs font-light justify-start">
                        <span>Document Name</span>
                        <span className="font-medium text-sm">{ userDocs.active != null ? userDocs.docsList[userDocs.active].name : ""}</span>
                    </div>

                </div>
            </div>


            <div className="flex gap-9 text-2xl items-center">
                <button onClick={(e) =>  handleDelete(e)} disabled={ userDocs.active == null }>
                    <AiFillDelete />
                </button>
                <button
                    className="bg-orange hover:bg-orange/80 px-4 py-3 text-sm flex gap-3 font-medium items-center rounded-md"
                    onClick={(e) => handleSave(e)}
                >
                    <IoIosSave className="text-xl" />
                    Save Changes
                </button>

            </div>


        </div>
    )
}