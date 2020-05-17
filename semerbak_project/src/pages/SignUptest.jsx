<div>
  <Navigation {...this.props} />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-9 col-md-9 col-lg-5">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h1 className="card-title text-center">SIGN UP</h1>
            <form className="form-signin">
              <div className="sign-up-space-between">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="input-first-name"
                    className="form-control"
                    name="first-name"
                    placeholder="First Name *"
                    required
                    autofocus
                  />
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="input-last-name"
                    className="form-control"
                    name="last-name"
                    placeholder="Last Name *"
                    required
                    autofocus
                  />
                </div>
              </div>
              <div className="form-label-group">
                <input
                  type="email"
                  id="input-email"
                  className="form-control"
                  name="email"
                  placeholder="Email *"
                  required
                  autofocus
                />
              </div>
              <div className="sign-up-space-between">
                <div className="form-label-group">
                  <input
                    type="password"
                    id="input-password"
                    className="form-control"
                    name="password"
                    placeholder="Password *"
                    required
                  />
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="input-password"
                    className="form-control"
                    name="confirm-password"
                    placeholder="Confirm Password *"
                    required
                  />
                </div>
              </div>
              <div className="form-label-group">
                <input
                  type="text"
                  id="input-telephone"
                  className="form-control"
                  name="telephone"
                  placeholder="Telephone *"
                  required
                />
              </div>
              <div className="form-label-group">
                <input
                  type="text"
                  id="input-address"
                  className="form-control"
                  name="address"
                  placeholder="Address *"
                  required
                />
              </div>
              <p>Already have an account? Sign in</p>
              <button
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card card-signin my-5">
          <div className="card-body">
            <p className="card-title">Need Assistance?</p>
            <h3>Contact Our Customer Service Team</h3>
            <p>custservice@title.com</p>
            <p>
              Our customer service team is available to take your emails daily
              during the following business hours:
            </p>
            <p>Monday - Friday : 09.00 - 17.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>;
