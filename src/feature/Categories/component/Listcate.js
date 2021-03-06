import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletecate, itemcate } from '../../../Store/action/categories';
import {useTranslation} from 'react-i18next'
const Listcate =  () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.category)
          useEffect(()=>{
            dispatch(itemcate())
          },[dispatch])
           const data = categories
          let Result
          if (data && Array.isArray(data)) {
              Result = data.map((item,index) => {
              return( <React.Fragment
                  key={index}
                >
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
                        
                      
                          <td className="project-actions text-right">
                            
                            <Link className="btn btn-info btn-sm" to={`/admin/changecate/${item._id}`}>
                              <i className="fas fa-pencil-alt">
                                {t('CRUD.edit')}
                              </i>
                              
                            </Link>
                            <button
                              onClick={()=> {
                                             dispatch(deletecate (item._id))}}
                            className="btn btn-danger btn-sm"  >
                              <i className="fas fa-trash">
                              </i>
                              {t('CRUD.delete')}
                            </button>
                          </td>
                        </tr>
                      


                </React.Fragment>)
              })

}
  


    return (
            <>
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>{t('titlePage.cate')}</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="#">{t('admin.dash')}</Link></li>
            <li className="breadcrumb-item active">{t('admin.cate')}</li>
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
        <h3 className="card-title">{t('admin.cate')}</h3>
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
              {t('CRUD.name')}
              </th>
              <th>
              {t('CRUD.img')}
              </th>
           
              <th style={{width: '20%'}}>
              {t('CRUD.action')}
              </th>
            </tr>
          </thead>
          <tbody>
            {Result}
          </tbody>
       
        </table>
        <div style={{
                display: 'grid',
                gridTemplateColumns:'1fr 1fr'
            }}   >
        <Link to="/admin/addcate" style={{
              width:'15%'
            }} className="btn btn-sm btn-primary mt-3 mb-3 ml-3">
                                {t('CRUD.create')}

                </Link></div>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>

            </>
      
    );
}

export default Listcate;
