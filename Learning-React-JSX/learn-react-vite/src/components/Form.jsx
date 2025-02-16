export default function Form() {
  return (
    <>
      <div className="Form">
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" />
        <textarea name="Bio" id="">BIO</textarea>
      </div>
    </>
  );
}
