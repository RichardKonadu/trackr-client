import HomePageCard from "../../Components/HomePageCard/HomePageCard";

export default function HomePage() {
  return (
    <main>
      <div className="homepage">
        <HomePageCard
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          repellendus! Cumque saepe deserunt expedita ex similique reprehenderit
          natus ipsum, quo quae laudantium fugit repudiandae vitae sapiente
          distinctio veritatis molestiae! Ipsam."
          buttonText="Sign Up"
        />
        <HomePageCard
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur hic voluptatem ducimus ipsum quam veniam assumenda voluptate! Ducimus tempora quis quidem quaerat, accusantium neque reprehenderit quia quod harum, voluptatem repellat?"
          buttonText="Test"
        />
        <HomePageCard
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magnam praesentium totam molestiae earum vel! Natus magni dolorem necessitatibus, porro eveniet earum voluptatum explicabo! Sequi laboriosam quis error quidem? Totam."
          buttonText="Test"
        />
      </div>
    </main>
  );
}
