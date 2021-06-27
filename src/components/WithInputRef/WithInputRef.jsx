import { useState, useRef } from 'react';

const WithInputRef = WrapperComponent => {
  const [imgUrl, setImgUrl] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log(file);
    // reader.readAsDataURL(event.target.files[0]);
    // this.state.userData.set('photo', event.target.files[0]);
  };

  const InputRef = ({ ref, ...props }) => (
    <>
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={inputRef}
      />

      <WrapperComponent onClick={() => inputRef.current?.click()} {...props} />
    </>
  );

  return InputRef;
};

export default WithInputRef;
