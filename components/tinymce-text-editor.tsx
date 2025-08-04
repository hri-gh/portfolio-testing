'use client'

// import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinymceEditorProps {
    initialValue: string; // Initial value to load into the editor
    onEditorChange: (content: string) => void; // Callback to handle content changes
}

const TinymceTextEditor: React.FC<TinymceEditorProps> = ({ initialValue, onEditorChange }) => {
    // const [content, setContent] = useState<string>(''); // State to hold the editor content

    // const handleEditorChange = (newContent: string) => {
    //     setContent(newContent); // Update state with the new content
    // };

    return (
        <div>
            <Editor
                apiKey="jada7d12n8ztcjv2oawyabar1ak0x3pvdxeq48qy5rjc8mx4"  // Replace with your actual TinyMCE API key
                initialValue={initialValue}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={onEditorChange}
            />
            {/* <div> */}
            {/* <h3>Editor Content:</h3> */}
            {/* <p>{content}</p> */}
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> Render content */}
            {/* </div> */}
        </div>
    );
};

export default TinymceTextEditor;
