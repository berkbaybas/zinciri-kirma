import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Title = () => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("Tıkla, Zincir ismini oluştur..");

  const ref = useRef();
  const handleClickOutside = () => {
    if (editMode) {
      setEditMode(false);
      localStorage.setItem("title", JSON.stringify(title));
      console.log("title güncellendi");
    }
  };

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    const titleFromLocal = JSON.parse(localStorage.getItem("title"));
    if (titleFromLocal) {
      setTitle(titleFromLocal);
    }
  }, []);

  return (
    <div className="mb-10" ref={ref}>
      {editMode ? (
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      ) : (
        <h1
          className="text-5xl antialiased tracking-wider text-white"
          onClick={() => setEditMode(true)}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default Title;
