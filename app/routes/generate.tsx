import { useState } from 'remix';
import { useActionData, Form } from 'remix';

export default function GenerateResume() {
  const actionData = useActionData();
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div>
      <h1>Generate Resume Based on Job Description</h1>
      <Form method="post">
        <textarea
          name="jobDescription"
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          placeholder="Paste job description here"
        />
        <button type="submit">Generate</button>
      </Form>
      {actionData && <pre>{JSON.stringify(actionData.resume, null, 2)}</pre>}
    </div>
  );
}
