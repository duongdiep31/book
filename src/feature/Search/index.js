import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import styles from './search.module.css'
const Search = (props) => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const onsubmit = (e) => {
        const input = document.getElementById("search-input");
            input.value =''
        navigate(`/shop/productSearch/${e.key}`)
    }
    const clearInput = () => {
        const input = document.getElementById("search-input");
        input.value = "";
    }
    return (
        <div className='search' >
            <form className={styles.formSearch} onSubmit={handleSubmit(onsubmit)}
            >
                <input {...register('key', {required:true})} className={styles.inputSearch} id='search-input' type="text" required />
                <i id={styles.icon} className="fa fa-search" />
                <Link onClick={clearInput} className={styles.clearBtn} to="#" id="clear-btn">X</Link>
            </form>
        </div>
    );
}
export default Search;