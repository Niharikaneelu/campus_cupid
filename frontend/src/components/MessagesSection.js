import AvatarMark from './AvatarMark';
import ThemeButton from './ThemeButton';

function MessagesSection() {
  return (
    <div className="messages-layout">
      <section className="message-thread">
        <div className="thread-header">
          <AvatarMark size="small">N</AvatarMark>
          <div>
            <h3>Nia</h3>
            <p>Online now</p>
          </div>
        </div>
        <div className="chat-bubble incoming">Hi, you seem fun. What are you looking for here?</div>
        <div className="chat-bubble outgoing">Something genuine. Coffee first, chaos later.</div>
        <div className="chat-input-row">
          <input type="text" placeholder="Type a message..." aria-label="Message text" />
          <ThemeButton variant="primary" type="button">
            Send
          </ThemeButton>
        </div>
      </section>
    </div>
  );
}

export default MessagesSection;