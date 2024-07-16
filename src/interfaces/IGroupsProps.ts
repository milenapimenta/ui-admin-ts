import React from "react";

interface IGroupsProps {
  key: React.Key;
  id: string;
  name: string;
  username: string;
  is_premium: boolean;
  is_open: boolean;
  createdAt: string;
}

export default IGroupsProps;
