import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
    const [searchItem, setSeatchItem]=useState('')
    const typing = useRef(null)
    const handleSearchItemChange =(e) => {
        const value = e.target.value
        setSeatchItem(value)
        if (!props.onSubmit) return
        if (typing.current) {
            clearTimeout(typing.current)
        }
        typing.current = setTimeout(()=>{
            const formValues = {
                searchItem: value
            }
            props.onSubmit(formValues)
        },700)
        }
        const search = document.getElementById('search')
        const handleFocus = () => {
            return search.style.display='block'
        }
        const handleBlur = () => {
            return search.style.display='none'
        }
    return (
        <div>
            <form>
                <input type='text'
                value={searchItem || ''}
                onChange={handleSearchItemChange}
                onFocus={handleFocus}
                onBlur ={handleBlur}
                />
            </form>
            {/* <ul className='navbar-nav mr-auto'>
                <li style={{
                    position: 'absolute',
                    border:'1px solid black',
                    width: '100px'  
                    
                }} className='nav-item'><Link  to={`/shop/productSearch/${props.data}`}>{props.data}</Link></li>
            </ul> */}
            <table className="table table-striped projects " style={{
                position: 'absolute',
                width: '200px',
                backgroundColor: 'white',
            }}>
                <tbody>
                    <tr>
                        <td  id='search' style={{
                            backgroundColor: 'white',
                            display: 'none'
                        }} className="project_progress" >
                            <Link  style={{
                                color:'black'
                            }}  to='#' >
                                Search "
                                {props.data}"
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Search;