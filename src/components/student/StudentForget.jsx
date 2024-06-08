import logo from '../../assets/SchoolLogo.png';
import { Link } from 'react-router-dom';

function StudentForget() {
  return (
    <div className="flex w-full sm:h-screen flex-col sm:flex-row justify-around">
      <div className="flex w-full h-1/2 sm:h-full items-center justify-center sm:w-1/2 flex-col">
        <div className="sm:h-2/5 sm:w-1/2">
          <img
            src={logo}
            alt="School's logo"
            className="object-fit h-full w-full"
          />
        </div>
        <div className="sm:h-3/5 sm:w-11/12 flex justify-normal gap-4 flex-col items-center">
          <h1 className="font-bold text-xl">
            Powering student-centric education in school
          </h1>
          <p>
            We help Schools of all Classes and Streams operate better - from
            admission to academics, back office to accrediations, desktops to
            mobiles - We empower students, faculty and management to collborate
            effecienty and use insights effectively, bench marking quality
            education while creating personalized learning experience.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center sm:w-1/2 h-1/2 sm:h-full py-0 sm:py-8 sm:m-0 my-10">
        <form
          action=""
          className="bg-slate-50 flex flex-col sm:w-11/12 h-5/6 border-2 border-slate-300 rounded-2xl py-4 items-center px-4"
        >
          <h1 className="font-bold text-xl">Forgot Password</h1>
          <p className="text-gray-500">Please Enter Your ID & Password</p>

          <div className="flex flex-col w-4/5 text-left gap-4 py-4">
            <label htmlFor="login" className="text-base font-medium">
              Login ID
            </label>
            <input
              id="login"
              type="text"
              className="border-gray-500 border-2 rounded-lg py-1 px-2"
              placeholder="Ex: 12345"
            />
            <label htmlFor="email" className="text-base font-medium">
              Enter E-mail
            </label>
            <div className="flex gap-4 sm:flex-row flex-col">
              <input
                id="email"
                type="email"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 grow"
                placeholder="abc@gmail.com"
              />
              <button
                onClick={() => {
                  alert('OTP has been sent!');
                }}
                className="border-2 border-sky-500 py-0.75 px-2 rounded-xl bg-sky-500 text-white"
              >
                Send OTP
              </button>
            </div>
            <h3 className="text-base font-medium">Verify OTP</h3>
            <div className="flex gap-2">
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
              <input
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
              />
            </div>
          </div>
          <div className="flex gap-4 m-4 mt-8">
            <button
              onClick={() => {
                alert('Information Submitted!');
              }}
              type="submit"
              className="border-2 border-sky-500 px-4 py-1 sm:py-1 sm:px-10 rounded-xl bg-sky-500 text-white"
            >
              Submit
            </button>

            <Link
              to="/"
              className="border-2 border-gray-500 px-3 py-1 sm:py-1 sm:px-10 rounded-xl bg-gray-500 text-white"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default StudentForget;
