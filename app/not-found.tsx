import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
        404 - Page Not Found
      </h1>
      <p style={{ marginBottom: "20px", color: "#666", fontSize: "1.1rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Return to Homepage
      </Link>
    </div>
  );
}
