import Button from "./Button";
import Input from "./Input";
import "../design/form-design/Form.scss";

export default function FormField() {
  return (
    <>
      <div className="container">
        <div className="form-field">
          <form action="">
            <Input name="url" id="url-input" title="Shorten a link here..." />
          </form>
          <Button title="Shorten it!" name="btn" />
        </div>
      </div>
    </>
  );
}
