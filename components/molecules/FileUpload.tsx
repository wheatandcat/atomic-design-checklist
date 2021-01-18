const FileUpload = () => {
  return (
    <div className="flex w-32 h-20 items-center justify-center">
      <label
        className="
      flex flex-col items-center p-2 bg-white text-blue rounded-lg 
      shadow-lg tracking-wide uppercase border 
      border-blue-600 
      cursor-pointer 
      hover:bg-blue-600 
      text-blue-600
      hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <div className="text-sm">Select file</div>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

export default FileUpload;
