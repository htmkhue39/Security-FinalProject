import React from 'react';
import './EncryptView.css';

function EncryptView() {
  return (
    <div className='EncryptView'>
        <div className='title'>
            <h2>Encrypt View</h2>
        </div>
    
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