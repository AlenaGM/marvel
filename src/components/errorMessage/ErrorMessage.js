import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: "200px",
        maxFidth: "100%",
        height: "200px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;
