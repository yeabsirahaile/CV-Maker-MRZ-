import { Button } from "../../ui/button";
import { useFormContext } from "../../../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const { form } = useFormContext();
  const navigate = useNavigate();
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    // Navigate to /preview
    navigate("/preview");
  }

  return (
    <div className=" flex gap-7">
      <Button
        className={`bg-blue-500`}
        type="submit"
        onClick={form.handleSubmit(onSubmit)}
      >
        Submit
      </Button>
      <Button className={`bg-blue-500`} onClick={() => form.reset()}>
        Reset
      </Button>
    </div>
  );
}
