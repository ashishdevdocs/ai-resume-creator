import { Form } from 'remix';

export default function ManualEntry() {
  return (
    <div>
      <h1>Enter Your Resume Details</h1>
      <Form method="post">
        {/* Add form fields for resume details */}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
