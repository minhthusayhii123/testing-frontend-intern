import { auth, signOut } from "@/auth";
const SettingPage = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}
    <form action={async ()=> {
      'use server'
      ;

      await signOut({ redirectTo: "/auth/login" });
    }}>
      <button className="bg-black text-white" type="submit">Sign Out</button>
    </form>
  </div>;
};

export default SettingPage;
