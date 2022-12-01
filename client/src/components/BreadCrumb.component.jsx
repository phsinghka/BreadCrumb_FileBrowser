const BreadCrumb = ({ dir }) => {
  let newLink = 'http://localhost:3000/path';
  return (
    <div>
      {dir.map((child) => {
        newLink += '/' + child;
        return (
          <span key={child}>
            <span> </span>
            <a href={newLink}>{child}</a>
            <span> / </span>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
