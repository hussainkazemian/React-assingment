import {ChangeEvent, useRef, useState} from 'react';
import {useForm} from '../hooks/FormHooks';
import {useFile, useMedia} from '../hooks/apiHooks';
//import {useNavigate} from 'react-router';

const Upload = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadResult, setUploadResult] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  //const navigate = useNavigate();
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const initValues = {
    title: '',
    description: '',
  };

  const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  const doUpload = async () => {
    setUploading(true);

    console.log(inputs);
    try {
      const token = localStorage.getItem('token');
      if (!file || !token) {
        return;
      }
      // upload the file to fileserver and post metadata to media api server
      const fileResult = await postFile(file, token);
      await postMedia(fileResult, inputs, token);

      // redirect to Home if you want
      //navigate('/');

      // OR notify user & clear inputs
      setUploadResult('Media file uploaded!');
      resetForm();
    } catch (e) {
      console.log((e as Error).message);
      setUploadResult((e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const {handleSubmit, handleInputChange, inputs, setInputs} = useForm(
    doUpload,
    initValues,
  );

  const resetForm = () => {
    setInputs(initValues);
    setFile(null);
    // use fileRef to clear file input field after upload
    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-600 shadow-md rounded-lg max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-white mb-4">Upload</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium" htmlFor="title">Title</label>
            <input className="mt-2 w-full p-2 border rounded-md bg-gray-700 text-white" name="title" type="text" id="title" onChange={handleInputChange} value={inputs.title} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium" htmlFor="description">Description</label>
            <textarea className="mt-2 w-full p-2 border rounded-md bg-gray-700 text-white" name="description" rows={5} id="description" onChange={handleInputChange} value={inputs.description}></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium" htmlFor="file">File</label>
            <input className="mt-2 w-full p-2 border rounded-md bg-gray-700 text-white" name="file" type="file" id="file" accept="image/*, video/*" onChange={handleFileChange} ref={fileRef} />
          </div>
          <img className="mb-4 rounded-md shadow-md" src={file ? URL.createObjectURL(file) : 'https://place-hold.it/200?text=Choose+image'} alt="preview" width="200" />
          <button className="w-full py-2 bg-stone-500 text-white rounded-md transition-all duration-500 ease-in-out hover:bg-stone-700 disabled:opacity-50" type="submit" disabled={!file || inputs.title.length <= 3 || inputs.description.length === 0}>
            {uploading ? 'Uploading..' : 'Upload'}
          </button>
          <button className="w-full mt-2 py-2 bg-gray-600 text-gray-200 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-500" type="button" onClick={resetForm}>Reset</button>
        </form>
        <p className="mt-4 text-green-600 font-semibold">{uploadResult}</p>
      </div>
    </>
  );
};

export default Upload;

