import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  deleteUser, userList } from '../../../Store/action/userAction';
import ReactPaginate from 'react-paginate'
import { t } from 'i18next';

const Listuser = () => {
  const user = useSelector((state) => state.user.user)
  const [page, setPage] = useState({
    page :1,
    limit: 9
  })
  const handlePageClick = (data) => {
    setPage({
      page: data.selected+1,
      limit: 9
    })
  }
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(userList(page))
  },[dispatch, page])
  let Result
  const listUser = user.list
  if (listUser && Array.isArray(listUser)) {
      const filter = listUser.filter(item => item.role !== 0)
      Result = filter.map((item,index) => {
        const role = () => {
          if (item.role === 0) {
              return 'Hoàng thượng'
          }else if(item.role === 2){
            return 'Giám đốc'
          }else if (item.role === 3) {
            return 'Content'
          }else if (item.role === 4) {
            return 'Giỏ Hàng'
          }else{
            return 'Khách hàng'
          }
        }
   
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
                {
                 role()
                }
              </td>
              <td className="project-actions text-right">
              <Link className="btn btn-info btn-sm" to={`/admin/roleuser/${item._id}`}>
                        <i className="fas fa-pencil-alt">
                        </i>
                        {t('CRUD.edit')}
                      </Link>
                <button onClick={
                   async ()=>{
                   await   dispatch(deleteUser(item._id))
                    }
                } className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  {t('CRUD.delete')}
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
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/admin">{t('admin.dash')}</Link></li>
            <li className="breadcrumb-item active">{t('admin.user')}</li>
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
                Email
              </th>
              <th>
              {t('CRUD.role')}
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

        <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              marginPagesDisplayed={2}
              pageCount={Math.ceil(user.total / page.limit)}
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
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
    </>
    );
}

export default Listuser;
