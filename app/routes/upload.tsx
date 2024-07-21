import { useState } from 'remix';
import { useActionData, Form } from 'remix';

export default function UploadResume() {
  const actionData = useActionData();
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <h1>Upload Your Resume</h1>
      <Form method="post" encType="multipart/form-data">
        <input
          type="file"
          name="resume"
          onChange={e => setFile(e.target.files?.[0] || null))}
        />
        <button type="submit">Upload</button>
      </Form>
      {actionData && <p>{actionData.message</p>}
    </div>
  );
}