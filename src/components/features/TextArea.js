import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextArea = ({ content, setContent }) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <>
      <ReactQuill
        modules={modules}
        theme="snow"
        value={content}
        placeholder="Content goes here..."
        onChange={setContent}
      />
    </>
  );
};
