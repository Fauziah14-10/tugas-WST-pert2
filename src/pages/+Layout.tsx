import "./Layout.css";
import { LanguageProvider } from "../components/LanguageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Content>{children}</Content>
      </div>
    </LanguageProvider>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" style={{ width: "100%", minHeight: "100vh" }}>
      <div
        id="page-content"
        style={{
          width: "100%",
          padding: 0,
          paddingBottom: 0,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}
