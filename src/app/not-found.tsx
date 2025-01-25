import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <html style={{ height: "100vh" }}>
      <body>
        <div
          style={{
            height: "90vh",
            width: "100%",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}>
          <div>
            <Image
              src={"/error.png"}
              width={300}
              height={300}
              alt="error img"
            />
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "red",
              }}>
              Uh-oh!
            </h1>

            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "black",
              }}>
              Error 404
            </p>
            <Link href={"/"}>
              <button
                style={{
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Error;
