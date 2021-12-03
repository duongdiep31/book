import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePrd, itemPrd } from '../../../Store/action/products';
const Listproducts = () => {
  const products = useSelector((state) => state.product.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(itemPrd())
  },[dispatch])
      let Result;
     if (products && Array.isArray(products)) {
          Result =products.map((item,index)=> {
              return(
                  <React.Fragment
                  key={index}>
                  <tr>
                    <td>
                      {index+1}
                    </td>
                    <td>
                          {item.name}
                    </td>
                    <td>
                          <img alt="Avatar" className="table-avatar" src={item.image} />
                    </td>
                    <td className="project_progress">
                                  {item.author}
                    </td>
                    <td className="project-state">
                      <span className="badge badge-success">{item.status}</span>
                    </td>
                    <td className="project-actions text-right">

                      <Link className="btn btn-primary btn-sm" to="#">
                        <i className="fas fa-folder">
                        </i>
                        View
                      </Link>
                      <Link className="btn btn-info btn-sm" to={`/admin/changeprd/${item._id}`}>
                        <i className="fas fa-pencil-alt">
                        </i>
                        Edit
                      </Link>
                      <button onClick={() => dispatch(deletePrd(item._id))} className="btn btn-danger btn-sm" to="#">
                        <i className="fas fa-trash">
                        </i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  </React.Fragment>
              )
          })
     }else{console.log('error');}
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
    </div>
  </section>
  <section className="content">
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
              <th style={{width: '30%'}}>
                Price
              </th>
              <th>
                Author
              </th>
              <th style={{width: '8%'}} className="text-center">
                Status
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
    </div>
  </section>
            </>
    );
}

export default Listproducts;
