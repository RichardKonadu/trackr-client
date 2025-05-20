import Application from "../../Components/Application/Application";
import "./Applications.scss";

export default function Applications() {
  return (
    <div className="applications">
      <button className="add__application">Add application</button>
      <Application />
      <Application />
    </div>
  );
}
