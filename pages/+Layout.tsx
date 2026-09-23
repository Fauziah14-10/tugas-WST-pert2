import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" style={{ width: "100%", minHeight: "100vh" }}>
      <div
        id="page-content"
        style={{
          width: "100%",
          padding: 20,
          paddingBottom: 50,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}
