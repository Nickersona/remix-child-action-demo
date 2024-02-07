import { Outlet, useActionData } from "@remix-run/react";

export default function SomeParent() {
    const data = useActionData();
    console.log('PARENT DATA', data)
  return (
    <div>
      <h1>Parent Content</h1>

      <Outlet />
    </div>
  );
}
