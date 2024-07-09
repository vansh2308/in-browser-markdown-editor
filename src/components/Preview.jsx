import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import data from './../assets/data.json'
import rehypeRaw from 'rehype-raw'
import { useDispatch, useSelector } from "react-redux";
import { setFullPreview } from "../features/fullPreviewSlice";



export default function Preview() {
    const dispatch = useDispatch()
    const fullPreview = useSelector(state => state.fullPreview.value)

    return (
        <div className="w-1/2 h-full flex flex-col gap-2 flex-grow">
            <div className="flex w-full items-center justify-between tracking-[0.2rem]">
                <p className="text-xs"> PREVIEW </p>
                {!fullPreview && <button className="text-md"
                    onClick={() => dispatch(setFullPreview(true))}>
                    <FaEye />
                </button>}
                {fullPreview && <button className="text-md"
                    onClick={() => dispatch(setFullPreview(false))}>
                    <FaEyeSlash />
                </button>}
            </div>
            
            <Markdown
                className="w-[100%] overflow-auto p-6 bg-lsecondary rounded-md flex-grow markdown-preview dark:bg-dsecondary"
                // remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={data[0].content}
            />

        </div>
    )
}