import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Toolbar from "./components/Toolbar";




export default function App(){
  return(
    <div className="w-screen h-screen max-h-screen text-dtext bg-dprimary flex flex-col">
      <Toolbar />
      <div className="flex gap-5 w-full flex-grow p-6 pt-0 overflow-auto">
        <Editor />
        <Preview />
      </div>
    </div>
  )
}