

import { useDispatch, useSelector } from 'react-redux'
import data from './../assets/data.json'
import { useDebugValue, useEffect } from 'react'
import { setMarkdown } from '../features/markdownSlice'
import userDocs, { setContent, setSaved } from '../features/userDocs'




export default function Editor() {
    const fullPreview = useSelector(state => state.fullPreview.value)
    const markdown = useSelector(state => state.markdown.value)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        e.preventDefault();
        dispatch(setMarkdown(e.target.value))
        dispatch(setSaved({type: "unsaved"}))
        dispatch(setContent(markdown))
    }

    return (
        <div className="w-1/2 h-full flex flex-col gap-2 editor" style={ fullPreview ? {width: 0} : {} }>
            <p className=" tracking-[0.2rem] text-xs"> EDITOR </p>
            <textarea
                className="w-full overflow-auto p-6 bg-lsecondary rounded-md text-sm flex-grow focus:outline-none dark:bg-dsecondary"
                value={ markdown == null ? "" : markdown }
                onChange={(e) => handleChange(e)}
                disabled = {markdown == null}
            />

        </div>
    )
}