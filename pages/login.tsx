// import { GetServerSideProps } from "next";
// import { getSession, signIn } from "next-auth/react";
// import Image from "next/image";

// type Props = {};

// const Login = (props: Props) => {
//   return (
//     <div className="pt-[15vh] flex flex-col items-center gap-4 w-full h-screen">
//       <Image
//         src="/images/login-logo.png"
//         height={400}
//         width={400}
//         alt="Facebook logo"
//         className="object-contain"
//       />
//       <button
//         className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer active:scale-95"
//         onClick={() => signIn("facebook")}
//       >
//         Login with Facebook
//       </button>
//     </div>
//   );
// };

// export default Login;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };
