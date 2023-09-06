import React from 'react';

function EncryptView() {
  return (
    <div>
        <h2>Encrypt View</h2>
        <form>
            <label>
                Plaintext:
                <input type="text" name="name" />
            </label>
        </form>

        <form>
            <label>
                Key:
                <input type="text" name="name" />
            </label>
        </form>
        <button>Encrypt</button>

        <form>
            <label>
                Ciphertext:
                <input type="text" name="name" />
            </label>
        </form>

        <form>
            <label>
                Key:
                <input type="text" name="name" />
            </label>
        </form>
        <button>Decrypt</button>
    </div>
  );
}

export default EncryptView;