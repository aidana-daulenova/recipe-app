import { useUser } from "../hooks/useUser";

export default function Home() {
  const { user } = useUser();
  console.log("user===", user);

  return <h1>Home page</h1>;
}
