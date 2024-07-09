import { IoMenu } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import logo from "./../assets/logo.svg"
import logoDark from "./../assets/logo-dark.svg"
import { AiFillDelete } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarDisplay } from "../features/sidebarDisplaySlice";
import { setContent, setSaved } from "../features/userDocs";

export default function Toolbar({ }) {
    const theme = useSelector(state => state.theme.value)
    const userDocs = useSelector(state => state.userDocs.value)
    const markdown = useSelector(state => state.markdown.value)
    const dispatch = useDispatch()

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(setSaved({type: "saved"}));
        dispatch(setContent(markdown))
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
                        <span className="font-medium text-sm">{userDocs.docsList[userDocs.active].name}</span>
                    </div>

                </div>
            </div>


            <div className="flex gap-9 text-2xl items-center">
                <button>
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