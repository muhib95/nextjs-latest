import Image from "next/image";
import styles from "../login.module.css";
import footer from "../../../public/asset/footerimg.png";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={`relative hero min-h-screen ${styles.log}`}>
      <div>
        <div className="hero-content  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div
            className={`card flex-shrink-0 w-full max-w-sm shadow-2xl ${styles.login}`}
          >
            <div className="card-body">
              <div>
                <p className="text-center text-white">Login</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Employee Id</span>
                </label>
                <input
                  type="text"
                  placeholder="employee id"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    href="#"
                    className={`label-text-alt link link-hover ${styles.linkt}`}
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0">
          <Image src={footer} className="w-full h-auto" alt="footer"></Image>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
