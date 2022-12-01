import { Link } from 'react-router-dom';

const Files = ({ fileInfo }) => {
  return (
    <div>
      {fileInfo.map((child) => {
        return (
          <div>
            {child.type ? (
              <a href={window.location.href + '/' + child.files}>
                {child.files}
              </a>
            ) : (
              <div>{child.files}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Files;
