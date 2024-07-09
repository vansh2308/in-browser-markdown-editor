import { IoMenu } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import logo from "./../assets/logo.svg"
import logoDark from "./../assets/logo-dark.svg"
import { AiFillDelete } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarDisplay } from "../features/sidebarDisplaySlice";

export default function Toolbar({ }) {
    const theme = useSelector(state => state.theme.value)
    const dispatch = useDispatch()
    

    return (
        <div className="w-full h-fit p-6 flex justify-between">
            <div className="flex gap-9 items-center text-3xl ">
                <button onClick={() => dispatch(setSidebarDisplay(true))}>
                    <IoMenu />
                </button>
                <img src={ theme == "light" ? logoDark : logo } alt="logo"  className="w-32"/>
                <div className="flex gap-3 pl-5 border-l-[1px] border-dprimary items-center">
                    <IoDocumentText />
                    <div className="flex flex-col text-xs font-light justify-start">
                        <span>Document Name</span>
                        <span className="font-medium text-sm">Untitled Doc</span>
                    </div>
                
                </div>
            </div>


            <div className="flex gap-9 text-2xl items-center">
                <button>
                    <AiFillDelete />
                </button>
                <button className="bg-orange px-4 py-3 text-sm flex gap-3 font-medium items-center rounded-md">
                    <IoIosSave className="text-xl" />
                    Save Changes
                </button>

            </div>


        </div>
    )
}