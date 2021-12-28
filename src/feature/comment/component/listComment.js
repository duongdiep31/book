import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import { t } from 'i18next';
import { listCommentAction, removeCommentAction } from '../../../Store/action/comment';

const Listcomment = () => {
  const comment = useSelector((state) => state.comment.comment)
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
    dispatch(listCommentAction(page))
  },[dispatch, page])
  let Result
  const listComment = comment.list
  if (listComment && Array.isArray(listComment)) {
      Result = listComment.map((item,index) => {
          console.log(item.productId.name);
            const status = () =>{
                if (item.status === 0) {
                    return t('comment.wait')
                }else{
                    return t('comment.comfirm')
                }
            }

        return (
          <React.Fragment key={index} >
                 <tr>
              <td>
                {index+1}
              </td>
              <td>
                {item.user.name}
              </td>
              <td>
                {item.productId.name}
              </td>
              <td>
              <img alt="Avatar" className="table-avatar" src={item.productId.image} />
              </td>
              <td>
                {item.content}
              </td>
              <td>
                {status()}
              </td>
              <td  className="project-actions text-right">
              <Link className="btn btn-info btn-sm" to={`/admin/statusComment/${item._id}`}>
                        <i className="fas fa-pencil-alt">
                        </i>
                        {t('CRUD.edit')}
                      </Link>
                <button
                 onClick={
                    ()=>{
                      dispatch(removeCommentAction(item._id))
                    }
                } 
                className="btn btn-danger btn-sm" to="#">
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
            <li className="breadcrumb-item active">{t('titlePage.comment')}</li>
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
            <tr  >
              <th style={{width: '1%'}}>
                #
              </th>
              <th style={{width: '10%'}}>
              {t('comment.user')}
              </th>
              <th style={{width: '15%'}}>
              {t('comment.product')}
              </th>
              <th style={{width: '10%'}} >
              {t('comment.img')}
              </th>
              <th style={{width: '30%'}} >
              {t('comment.content')}
              </th>
              <th>
              {t('comment.status')}
              </th>
              <th style={{textAlign:'center'}} >
              {t('comment.action')}
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
              pageCount={Math.ceil(comment.total / page.limit)}
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

export default Listcomment;
