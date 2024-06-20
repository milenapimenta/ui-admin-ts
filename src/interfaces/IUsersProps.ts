import React from "react";

interface IUsersProps {
  key: React.Key;
  uuid: string;
  name: string;
  lastname: string;
  role: string;
  email: string;
  password?: string;
  createdAt: string;
  emailVerifiedAt: string | null;
}

export default IUsersProps;
