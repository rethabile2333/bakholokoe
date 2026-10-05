export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-stone-100">

      <section className="flex min-h-screen items-center justify-center px-6 py-16">

        <div className="w-full max-w-md">

          {/* Header */}

          <div className="mb-8 text-center">

            <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
              BAKHOLOKOE HERITAGE
            </p>

            <h1 className="mt-4 text-4xl font-bold text-green-950">
              Admin Portal
            </h1>

            <p className="mt-3 text-gray-600">
              Manage the Heritage Archive
            </p>

          </div>


          {/* Login Card */}

          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">

            <form className="space-y-6">

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-green-950"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
                />

              </div>


              {/* Password */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-green-950"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
                />

              </div>


              {/* Remember */}

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-gray-600">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />

                  Remember me

                </label>


                <button
                  type="button"
                  className="text-sm font-semibold text-green-900 hover:text-yellow-600"
                >
                  Forgot password?
                </button>

              </div>


              {/* Login */}

              <button
                type="submit"
                className="w-full rounded-xl bg-green-950 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
              >
                Sign In
              </button>

            </form>

          </div>


          {/* Footer */}

          <p className="mt-8 text-center text-sm text-gray-500">

            Authorized administrators only.

          </p>

        </div>

      </section>

    </main>
  );
}