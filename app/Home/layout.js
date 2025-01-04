// /app/layout.js
import Navbar from "../../components/Navibar";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
