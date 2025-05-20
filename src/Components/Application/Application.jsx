import "./Application.scss";

export default function Application() {
  return (
    <>
      <div className="application">
        <section className="company">
          <h2>Company Name</h2>
          <p>Test Company</p>
        </section>
        <section className="role">
          <h3>Role</h3>
          <p>Test Role</p>
        </section>
        <section className="cv">
          <h3>CV</h3>
        </section>
        <section>
          <h3>Cover Letter</h3>
        </section>
        <section className="stages">
          <h3>Screen</h3>
          <p>Not heard</p>
        </section>
        <section>
          <h3>Notes</h3>
          <p>Test notes</p>
        </section>
        <section className="edit">
          <button> Update application</button>
        </section>
      </div>
    </>
  );
}
