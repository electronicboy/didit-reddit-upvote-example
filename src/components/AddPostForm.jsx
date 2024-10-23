'use client'
import TipTapEditor from "@/components/TipTapEditor";
import {useState} from "react";

export default function AddPostForm({savePost}) {
    const [formData, setFormData] = useState({title: "", content: ""})

    /**
     *
     * @param event {ChangeEventHandler<HTMLInputElement>}
     */
    function handleFormUpdate(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleRichUpdate(e) {
        setFormData((prevState) => { return {...prevState, "content": e.editor.getHTML()}})
    }
    console.log("formData", formData);

    function handleSubmit(e) {
        e.preventDefault();
        savePost(formData);
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                name="title"
                placeholder="Post title..."
                className="text-black px-3 py-2 rounded"
                onChange={handleFormUpdate}
                value={formData.title}
                required={true}
            />
            <TipTapEditor handleUpdate={handleRichUpdate} content={formData.content}/>
            <button className="bg-green-400 px-4 py-2 text-xl text-black rounded">
                Submit post
            </button>
        </form>
    )
}
