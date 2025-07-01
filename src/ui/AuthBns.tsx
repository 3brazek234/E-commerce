import { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import Modal from "./Model";

const AuthBns = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-black hover:bg-[#6A48AA] text-white px-4 py-2 rounded-md transition-colors"
      >
        <span>Sign in</span>
        <IoLogIn />
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome Back"
        size="sm"
      >
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm font-medium text-purple-600 hover:text-purple-500">
              Forgot password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-[#6A48AA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Sign in
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button type="button" className="font-medium text-purple-600 hover:text-purple-500">
              Sign up
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AuthBns;
