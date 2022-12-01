import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreadCrumb from './BreadCrumb.component';
import Files from './Files.component';

const defaultValues = {
  dir: [],
  fileInfo: [],
};

const Explorer = () => {
  const [serverResponse, setServerResponse] = useState(defaultValues);

  useEffect(() => {
    const getValues = async () => {
      const urlValue = window.location.href.split('/path/');
      const response = await axios
        .get(`http://localhost:8000/path/${urlValue[1]}`)
        .catch((error) => {
          alert(error.code);
        });
      setServerResponse(response.data);
    };
    getValues();
  }, []);

  const { dir, fileInfo } = serverResponse;

  return (
    <div>
      <BreadCrumb dir={dir} />
      <Files fileInfo={fileInfo} />
    </div>
  );
};

export default Explorer;
