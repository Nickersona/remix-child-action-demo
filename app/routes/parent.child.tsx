import { Form, useActionData } from "@remix-run/react";


export const action = async ({request}) => {
    const fd = await request.formData();
    console.log('ACTION Runing')
    console.log(fd.get('name'));
    return {actionData: "Hello from the server"}
}


export default function SomeChild() {
    const data = useActionData();
    console.log('CHILD DATA',data)
  return (
    <div>
      <h1>Child Content</h1>
        <Form method="post" action="/parent/child">
            <input name="name" id="name" type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </Form>
    </div>
  );
}
