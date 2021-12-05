import Account from "@modules/acccount/components/Account";
import * as React from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((e) => e.user);

  return <Account user={user} />;
}

export default Home;
