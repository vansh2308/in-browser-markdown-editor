import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import { useSelector } from "react-redux";



export default function App(){
  const sidebarDisplay = useSelector(state => state.sidebarDisplay.value)

  return(
    <div className="w-screen h-screen max-h-screen text-dtext bg-dprimary flex flex-col">
      <Toolbar />
      { sidebarDisplay && <Sidebar /> }
      <div className="flex gap-5 w-full flex-grow p-6 pt-0 overflow-auto">
        <Editor />
        <Preview />
      </div>
    </div>
  )
}