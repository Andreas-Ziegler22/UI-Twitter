import { Sidebar } from "../components/Sidebar";

export function Default() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content"></div>
    </div>
  );
}
