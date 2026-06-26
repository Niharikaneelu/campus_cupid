import ThemeButton from './ThemeButton';

function ProfilePhotoUploader({ preview, onChange }) {
  return (
    <section className="photo-uploader-card">
      <div className="photo-uploader-copy">
        <h3>Profile photo</h3>
        <p>Upload a friendly picture so people recognize you faster in discovery.</p>
      </div>

      <div className="photo-preview-frame">
        {preview ? <img src={preview} alt="Profile preview" /> : <span>Upload preview</span>}
      </div>

      <label className="photo-upload-button">
        <ThemeButton variant="secondary" type="button">
          Choose photo
        </ThemeButton>
        <input type="file" accept="image/*" onChange={onChange} aria-label="Upload profile photo" />
      </label>
    </section>
  );
}

export default ProfilePhotoUploader;