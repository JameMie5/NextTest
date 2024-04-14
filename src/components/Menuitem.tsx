import React from "react";

export default function Menuitem() {
  return (
    <div
      className="col-12 p-4 bg-white shadow-sm p-3 mb-5 bg-body rounded"
      style={{ position: "fixed", top: 60, width: "100%", zIndex: 1000 }}
    >
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
      <hr />
      <div className="row">
        <div className="container col-8">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <p className="p-2"><button className="btn btn-warning" style={{width: '140px'}}>Highlight</button></p>
              </div>
              <div className="col">
                <p className="p-2"><button className="btn btn-warning" style={{width: '140px'}}>Pantip Realtime</button></p>
              </div>
              <div className="col">
                <p className="p-2"><button className="btn btn-warning" style={{width: '140px'}}>Pantip Pick</button></p>
              </div>
              <div className="col">
                <p className="p-2"><button className="btn btn-warning" style={{width: '140px'}}>Pantip Hitz</button></p>
              </div>
              <div className="col">
                <p className="p-2"><button className="btn btn-warning" style={{width: '140px'}}>ซิลิคอนวัลเลย์</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown col-1">
          <button
            className="btn btn-purple dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "150px" }}
          >
            หมวดหมู่
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                แท็กฮิต
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                คลับ
              </a>
            </li>
            <div className="container">
              <hr />
            </div>
            <li>
              <a className="dropdown-item" href="#">
                เว็บในเคลือ
              </a>
            </li>
          </ul>
        </div>
        <div className="container col-3">
          <p className="container">
            <button className="btn btn-outline-Secondary" style={{ width: "100%", border: 'none' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </p>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
