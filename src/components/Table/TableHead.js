import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";


const context = useContext(DataAreaContext);

export default function TableHead() {
    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed">
                <thead className="thead-dark">
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    );
}