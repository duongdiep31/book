import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser, getAlluser } from '../../../Store/action/userAction';
const Listuser = () => {
  const User = useSelector((state) => state.user.users )
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAlluser)
  },[dispatch])
  
  let Result
  if (User) {
      Result = User.map((item,index) => {
        return (
          <React.Fragment key={index} >
                 <tr>
              <td>
                {index+1}
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
              <td>
                {item.role}
              </td>
           
              <td className="project-actions text-right">
                <button onClick={
                    ()=>{
                      dispatch(deleteuser(item._id))
                    }

                } className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </button>
              </td>
            </tr>

          </React.Fragment>
        )
      } )
  }


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
                Email
              </th>
              <th>
                Role
              </th>
              <th style={{width: '20%'}}>
                  Action
              </th>
            </tr>
          </thead>
          <tbody>
          {Result}
          
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
