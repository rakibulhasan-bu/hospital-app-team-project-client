import { useGetUsersQuery } from "../../redux/features/user/userApi";

type User = {
  email: string;
};

const DashboardUsers = () => {
  const { data: users } = useGetUsersQuery({});
  // console.log(users);
  return (
    <div className="">
      DashboardUsers
      <br />
      {users?.data.map((user: User) => (
        <p>{user?.email}</p>
      ))}
    </div>
  );
};

export default DashboardUsers;
