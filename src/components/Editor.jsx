

import { useSelector } from 'react-redux'
import data from './../assets/data.json'


export default function Editor() {
    const fullPreview = useSelector(state => state.fullPreview.value)

    return (
        <div className="w-1/2 h-full flex flex-col gap-2 editor" style={ fullPreview ? {width: 0} : {} }>
            <p className=" tracking-[0.2rem] text-xs"> EDITOR </p>
            <textarea
                className="w-full overflow-auto p-6 bg-lsecondary rounded-md text-sm flex-grow focus:outline-none dark:bg-dsecondary"
                value={ data[0].content }
                onChange={(e) => e.preventDefault()}
            />

        </div>
    )
}