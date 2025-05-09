import "./HomepageCard.scss";

export default function HomePageCard({ text, buttonText }) {
  return (
    <div className="homepage__card">
      <p>{text}</p>
      {buttonText && (
        <button className="homepage__card--button">{buttonText}</button>
      )}
    </div>
  );
}
