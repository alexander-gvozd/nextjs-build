import * as React from "react";
import Counter from "@modules/acccount/components/Counter";
import Styles from "@modules/acccount/components/Account.module.scss";

export interface IUser {
  userId: number;
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const Account: React.FC<IProps> = function (props: IProps) {
  const { user } = props;

  return (
    <div>
      <h1>
        Hello! This is <strong className={Styles.strong}>{user.name}'s</strong>{" "}
        account page
      </h1>
      <p>
        User id: <span className={Styles.strong}>{user.userId}</span>
      </p>
      <p>
        User email: <span className={Styles.strong}>{user.email}</span>
      </p>
      <Counter />
    </div>
  );
};

export default Account;
