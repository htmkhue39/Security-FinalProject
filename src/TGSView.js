import React from 'react';
import EncryptView from './EncryptView';

function TGSView({ onClick }) {
  return (
    <div>
        <h3>The Authentication Server says: </h3>
        <h4>Encrypted Key Message: bUsydUp0REcraXp6Nk1RTk1vZFhoaW1HNkRrRHN1RzFPQ3NkQ2F0V0djMERWQ0tDdjFxM3llblZiNDNIelI5MmNmUmRDS2U4Y3lodTNDSGQ2QnBaMEE9PQ==
        </h4>

        <h4>Authentication Ticket: TldqZFJtMHFobU5Kckd2bUR0a1ZnUVNMOGV6cEhmZUZZOW1sNTVKV1dLY1ZselFmdCtDVTNCRzFjazNJV1lPYWl3MUN2MGJtd29zSVl0Mm5LTlhsQUE9PQ==
        </h4>

        <h3>Now you can issue a request to the TGS</h3>

        <form>
            <label>
            Authentication Ticket: 
                <input type="text" name="name" />
            </label>
        </form>

        <form>
            <label>
            Authenticator:
                <input type="text" name="name" />
            </label>
        </form>
        <button>Send to TGS</button>
        <button onClick={onClick}>Back to AS</button>
        <EncryptView />
    </div>
  );
}

export default TGSView;