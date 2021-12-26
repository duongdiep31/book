import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePrd, itemPrd } from '../../../Store/action/products';
import ReactPaginate from 'react-paginate'
import {useTranslation} from 'react-i18next'
const Listproducts = () => {
  const {t} = useTranslation()
  const products = useSelector((state) => state.product.product)
  const dispatch = useDispatch()
  const [page, setPage] = useState({
    page :1,
    limit: 9
  })
  useEffect(() => {
    dispatch(itemPrd(page))
  }, [dispatch, page])
  const handlePageClick = (data) => {
    setPage({
      page: data.selected+1,
      limit: 9
    })
  }
  let Result;
  const listBook = products.list
  if (listBook && Array.isArray(listBook)) {
    Result = listBook.map((item, index) => {
      return (
        <React.Fragment
          key={index}>
          <tr>
            <td>
              {index + 1}
            </td>
            <td>
              {item.name}
            </td>
            <td>
              <img alt="Avatar" className="table-avatar" src={item.image} />
            </td>
            <td className="project_progress">
              {item.price}
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
              {t('CRUD.view')}
              </Link>
              <Link className="btn btn-info btn-sm" to={`/admin/changeprd/${item._id}`}>
                <i className="fas fa-pencil-alt">
                </i>
                {t('CRUD.edit')}
              </Link>
              <button onClick={() => dispatch(deletePrd(item._id))} className="btn btn-danger btn-sm" to="#">
                <i className="fas fa-trash">
                </i>
                {t('CRUD.delete')}
              </button>
            </td>
          </tr>
        </React.Fragment>
      )
    })
  }
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/admin">{t('admin.dash')}</Link></li>
                <li className="breadcrumb-item active">{t('admin.prd')}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
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
                  <th style={{ width: '1%' }}>
                    #
                  </th>
                  <th style={{ width: '15%' }}>
                    {t('CRUD.name')}
                  </th>
                  <th style={{ width: '10%' }}>
                  {t('CRUD.img')}
                  </th>
                  <th style={{ width: '15%' }}>
                  {t('CRUD.price')}
                  </th>
                  <th style={{ width: '15%' }} >
                  {t('CRUD.author')}
                  </th>
                  <th style={{ width: '15%' }} className="text-center">
                  {t('CRUD.status')}
                  </th>
                  <th style={{ width: '20%' }}>
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
            }} >
            <Link  to="/admin/addprd" style={{
              width:'15%'
            }} className="btn btn-sm btn-primary mt-3 mb-3 ml-3">
              {t('CRUD.create')}
            </Link>
         
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              pageCount={Math.ceil(products.total/ page.limit)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination justify-content-center justify-content-lg-end'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              nextClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Listproducts;
