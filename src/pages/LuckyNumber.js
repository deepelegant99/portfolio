import { useLocation, useParams } from "react-router";

const LuckyNumber = () => {
  const { num } = useParams();

  const query = new URLSearchParams(useLocation().search);

  return (
    <div>
      You lucky number is a {num}
      <br />
      Your first name is {query.get("first")}, and your last name is
      {query.get("last")}
    </div>
  );
};

export default LuckyNumber;
