import UserAvatar from "../molecules/menus/UserAvatar";
import RegisterDialog from "../organisms/Popups/RegisterDialog";
import useIsLoggedIn from "@/hooks/use-IsLogIn";

const AuthNav = () => {
  const { isLoggedIn, isMounted } = useIsLoggedIn();

  if (!isMounted) return null;

  return <>{isLoggedIn ? <UserAvatar /> : <RegisterDialog />}</>;
};

export default AuthNav;
