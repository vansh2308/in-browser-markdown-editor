import { useCallback, useEffect, useMemo, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "./features/markdownSlice";



export default function App(){
  const sidebarDisplay = useSelector(state => state.sidebarDisplay.value)
  const dispatch = useDispatch()
  let userDocs = useSelector(state => state.userDocs.value)
  let markdown = useSelector(state => state.markdown.value)

  useEffect(() => {
    dispatch(setMarkdown( userDocs.docsList[userDocs.active].content ))
  }, [])


  return(
    <div className="w-screen h-screen max-h-screen text-ltext bg-lprimary flex flex-col dark:text-dtext dark:bg-dprimary">
      <Toolbar />
      { sidebarDisplay && <Sidebar /> }
      <div className="flex gap-5 w-full flex-grow p-6 pt-0 overflow-auto">
        <Editor />
        <Preview />
      </div>
    </div>
  )
}