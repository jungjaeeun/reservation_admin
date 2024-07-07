"use client";
import withAuth from "@hoc/withAuth";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default withAuth(HomePage);
