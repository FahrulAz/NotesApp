// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { addNote } from "../utils/local-data";
// import Toast from "../components/Toast";
// import PropTypes from "prop-types";
// import LanguageContext from "../contexts/LanguageContext";

// function AddPage() {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [toastMessage, setToastMessage] = useState(null);
//   const navigate = useNavigate();
//   const { language } = useContext(LanguageContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addNote({ title, body });
//     setToastMessage("Note added successfully!");
//     setTimeout(() => {
//       navigate("/");
//     }, 1000);
//   };

//   return (
//     <div className="addpage">
//       <h1>{language === "EN" ? "Add New Note" : "Tambah Catatan Baru"}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             placeholder={language === "EN" ? "Title" : "Judul"}
//             className="addpage_title"
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder={
//               language === "EN" ? "Your notes ..." : "Isi Catatan Kamu ..."
//             }
//             className="addpage_desc"
//             id="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Add Note</button>
//       </form>
//       {toastMessage && (
//         <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
//       )}
//     </div>
//   );
// }

// AddPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   toastMessage: PropTypes.string.isRequired,
//   navigate: PropTypes.func.isRequired,
// };

// export default AddPage;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import Toast from "../components/Toast";
import LanguageContext from "../contexts/LanguageContext";

function AddPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [toastMessage, setToastMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await addNote({ title, body });
    if (!error) {
      setToastMessage(
        language === "EN"
          ? "Note added successfully!"
          : "Catatan berhasil ditambahkan!"
      );
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setToastMessage(
        language === "EN" ? "Failed to add note!" : "Gagal menambahkan catatan!"
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="addpage">
      <h1>{language === "EN" ? "Add New Note" : "Tambah Catatan Baru"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder={language === "EN" ? "Title" : "Judul"}
            className="addpage_title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <textarea
            placeholder={
              language === "EN" ? "Your notes ..." : "Isi Catatan Kamu ..."
            }
            className="addpage_desc"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? language === "EN"
              ? "Adding..."
              : "Menambahkan..."
            : language === "EN"
            ? "Add Note"
            : "Tambah Catatan"}
        </button>
      </form>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}

export default AddPage;
