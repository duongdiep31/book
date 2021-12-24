import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getOrder } from '../../../api/orderApi';
import { updateStatusAction } from '../../../Store/action/orderAction';
import {useTranslation} from 'react-i18next'
const Editorderuser = () => {
  const {t} = useTranslation()
    const {id} = useParams()
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fetchUser = useSelector((state) => state.auth.auth)
    useEffect(() => {
        getOrder(id)
            .then(response => {
                reset(response.data)
            })
    }, [id, reset])
    const onHandleSubmit = async (e) => {
        await dispatch(updateStatusAction(e))
        navigate("/profile/orderStatus", { replace: true })
    }
    return (
        <div>
              <form onSubmit={handleSubmit(onHandleSubmit)} className="row">
          <div className="row">
            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="name">{t('profile.name')}</label>
              <input disabled {...register('nameKh', { required: true })} defaultValue={fetchUser.users.name} className="form-control form-control-lg" id="name" type="text" placeholder="Enter your first name" />

            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="email">{t('profile.email')}</label>
              <input disabled  {...register('email', { required: true })} defaultValue={fetchUser.users.email} className="form-control form-control-lg" id="email" type="email" placeholder="e.g. Jason@example.com" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="phone">{t('profile.phone')}</label>
              <input  {...register('phone', { required: true })} defaultValue={fetchUser.users.phone} className="form-control form-control-lg" id="phone" type="tel" placeholder="e.g. +02 245354745" />
            </div>

            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="address">{t('profile.address')}</label>
              <input  {...register('address', { required: true })} className="form-control form-control-lg" id="address" type="text" placeholder="House number and street name" />
            </div>
            {/* <div>
              <div className="form-check">
                <input onChange={check} defaultChecked className="form-check-input"
                  onClick={() => {
                    const check = document.getElementById('check')
                    return check.style.display = 'none'
                  }} type="radio" name="flexRadioDefault" defaultValue={2} id="trực tiếp" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Thanh toán trực tiếp
                </label>
              </div>
              <div className="form-check">
                <input onChange={check} defaultValue={4} onClick={() => {
                  const check = document.getElementById('check')
                  return check.style.display = 'block'
                }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Chuyển Khoản
                </label>
                <div id='check' style={{ display: 'none' }}   >
                  <h3>
                    TechComBank<br />
                    Dương Văn Điệp<br />
                    19037121604010
                  </h3>
                </div>
              </div>
            </div> */}
            <div className="col-lg-12 form-group">
              <button className="btn btn-dark">{t('profile.comfirm')}</button>
            </div>
          </div>
        </form>
        </div>
    );
}

export default Editorderuser;
