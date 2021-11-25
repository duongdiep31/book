import React from 'react';
import { Link } from 'react-router-dom';
const Listuser = () => {
    return (
            <>
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Projects</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
            <li className="breadcrumb-item active">Projects</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Projects</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{width: '1%'}}>
                #
              </th>
              <th style={{width: '20%'}}>
                 Name
              </th>
              <th>
                Image
              </th>
           
              <th style={{width: '20%'}}>
                  Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                #
              </td>
              <td>
                <Link to='#'>
                  AdminLTE v3
                </Link>
                <br />
                <small>
                  Created 01.01.2019
                </small>
              </td>
              <td>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar4.png" />
                  </li>
                </ul>
              </td>
             
           
              <td className="project-actions text-right">
                <Link className="btn btn-primary btn-sm" to="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </Link>
                <Link className="btn btn-info btn-sm" to="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </Link>
                <Link className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </Link>
              </td>
            </tr>
          
          </tbody>
        </table>

      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
    </>
    );
}

export default Listuser;
