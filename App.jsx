export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <h1>Performance Elite Volleyball Consulting</h1>
      <p>
        Data-driven tryout systems for Mid-Atlantic volleyball clubs.
      </p>

      <h2>Contact Us</h2>

      <form
        action="https://formsubmit.co/performanceelitevolleyball@gmail.com"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}
      >
        <input type="hidden" name="_subject" value="New Website Inquiry" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="club" placeholder="Club Name" />

        <textarea
          name="message"
          placeholder="Tell me about your club and tryout needs"
          required
        />

        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
}
