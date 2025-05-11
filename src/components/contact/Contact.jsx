import { useState } from "react";
import "./Contact.css";

const BOT_TOKEN = "8093375243:AAH2azQ2Uo76p6eLQ08x-5kadDeNmF0xhmU";
const CHAT_ID = "-4778071768";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !textArea) {
      alert("Barcha maydonlar to'ldirilishi kerak!");
      return;
    }

    setLoading(true);

    const text = `Foydalanuvchi %0A%0AIsmingiz: ${firstName} %0AFamilyangiz: ${lastName} %0AEmailingiz: ${email} %0AFikringiz: ${textArea} %0A`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onreadystatechange = () => {
      if (api.readyState === 4) {
        if (api.status === 200) {
          setSuccess(true);

          setFirstName("");
          setLastName("");
          setEmail("");
          setTextArea("");
        } else {
          setSuccess(false);
        }
        setLoading(false);
      }
    };
    api.send();
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact me</h2>
      <hr />
      <footer>
        <form onSubmit={handleSubmit}>
          <div className="contact-input">
            <div className="name-input">
              <div className="input">
                <label htmlFor="">First Name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="input">
                <label htmlFor="">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="">Email *</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="input">
              <label htmlFor="">Menga xabar qoldiring ...</label>
              <textarea
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
                cols="32"
                rows="10"
              ></textarea>
            </div>

            <div className="submit-button-wrapper">
              <button
                className="submit-button"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Jo'natish"}
              </button>
              {success !== null && (
                <div
                  className={`response-message ${
                    success ? "success" : "error"
                  }`}
                  id="send"
                >
                  {success
                    ? "Ma'lumotingiz yuborildi!"
                    : "Ma'lumotingiz yuborilmadi. Qayta urunib ko'ring."}
                </div>
              )}
            </div>
          </div>
        </form>

        <div className="contact-wrapper">
          <h2>Muxtasar Otaxanova</h2>
          <h4>Telegram: @Otaxanova15</h4>
          <h4>Email: muxtasarotaxanova@gmail.com</h4>
          <h4>Phone: +998 (97) 822 33 24</h4>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
