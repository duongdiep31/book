import React from 'react';

const Orderstatus = () => {
    return (
        <div>
            <div className="card mb-4" id="tables">
                <div className="card-header">Tables</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order Code</th>
                                <th>PayMent</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Michael</td>
                                <td>Are formatted like this</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Orderstatus;
