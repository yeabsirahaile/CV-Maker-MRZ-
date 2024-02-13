import { Button } from "@/components/ui/button";
import { useFormContext } from "../../../context/FormContext";

export default function Buttons() {
  const form = useFormContext();

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
      Submit
    </Button>
  );
}
