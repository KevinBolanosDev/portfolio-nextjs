import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ReactDropzone() {
  // const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que hay un archivo seleccionado
    if (!acceptedFiles[0]) {
      alert("Por favor selecciona un archivo primero");
      return;
    }

    // Tu cloud name de Cloudinary (desde las variables de entorno)
    const cloudName =
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dicf57vti";
    const uploadPreset =
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default";

    // Construir FormData
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", uploadPreset);

    // URL CORRECTA de la API REST de Cloudinary
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    console.log("☁️ Subiendo archivo a Cloudinary...");
    console.log("📍 URL:", url);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log("📡 Respuesta recibida:", res.status);

      if (!res.ok) {
        const errorData = await res.json();
        console.error("❌ Error de Cloudinary:", errorData);
        throw new Error(
          `Error HTTP: ${res.status} - ${
            errorData.error?.message || "Error desconocido"
          }`
        );
      }

      const data = await res.json();
      console.log("✅ Archivo subido exitosamente:", data);
      console.log("🔗 URL de la imagen:", data.secure_url);
      alert(`¡Archivo subido con éxito!\nURL: ${data.secure_url}`);

      // Aquí puedes guardar data.secure_url en tu estado o base de datos
      return data;
    } catch (error) {
      console.error("❌ Error al subir archivo:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />

        <div
          {...getRootProps()}
          style={{
            background: "#e3e3e3",
            padding: "20px",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>

        {acceptedFiles[0] && (
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            alt=""
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        )}

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ReactDropzone;
