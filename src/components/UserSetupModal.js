import React, { useState } from 'react';
import { X, Upload, Trash2 } from 'lucide-react';
import './UserSetupModal.css';

function UserSetupModal({ onSave, existingProfile }) {
  const [name, setName] = useState(existingProfile?.name || '');
  const [photo, setPhoto] = useState(existingProfile?.photo || null);
  const [photoPreview, setPhotoPreview] = useState(existingProfile?.photo || null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSave({ name: name.trim(), photo });
  };

  return (
    <div className="modal-overlay">
      <div className="setup-modal">
        <div className="setup-header">
          <h2>{existingProfile ? 'Edit Profile' : 'Welcome to TaskMaster'}</h2>
          <p>{existingProfile ? 'Update your profile information' : "Let's set up your profile"}</p>
        </div>

        <div className="setup-content">
          <div className="photo-upload">
            <div className="photo-preview">
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" />
              ) : (
                <div className="photo-placeholder">
                  <Upload size={32} />
                </div>
              )}
            </div>
            <div className="photo-actions">
              <label className="upload-btn">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePhotoChange}
                  hidden
                />
                Upload Photo (Optional)
              </label>
              {photoPreview && (
                <button className="remove-photo-btn" onClick={handleRemovePhoto}>
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Your Name *</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        <div className="setup-footer">
          <button 
            className="btn-save" 
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            {existingProfile ? 'Save Changes' : 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSetupModal;
