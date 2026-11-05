import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 w-full max-w-[430px] mx-auto"
      style={{
        background: "linear-gradient(to bottom, #fff5f7 0%, #ffffff 40%, #ffffff 100%)",
      }}
    >
      <div className="mb-12">
        <h1 className="text-[72px] tracking-wider font-normal" style={{ color: "#d4183d" }}>
          Bata
        </h1>
      </div>
      <button
        onClick={() => {
          navigate("/home");
        }}
        className="w-full max-w-[340px] py-4 rounded-xl text-white transition-opacity active:opacity-80"
        style={{ backgroundColor: "#d4183d" }}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
