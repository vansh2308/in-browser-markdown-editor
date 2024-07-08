import { FaEye } from "react-icons/fa";
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import data from './../assets/data.json'
import rehypeRaw from 'rehype-raw'




export default function Preview() {
    return (
        <div className="w-1/2 h-full flex flex-col gap-2">
            <div className="flex w-full items-center justify-between tracking-[0.2rem]">
                <p className="text-xs"> PREVIEW </p>
                <button className="text-md">
                    <FaEye />
                </button>

            </div>
            <Markdown
                className="w-[100%] overflow-auto p-6 bg-dsecondary rounded-md flex-grow markdown-preview"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={data[0].content}
            />

        </div>
    )
}