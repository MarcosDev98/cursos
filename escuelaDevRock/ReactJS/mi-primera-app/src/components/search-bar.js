import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">logo</div>
            <div className="col-md-4">
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputPassword2" className="sr-only">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
