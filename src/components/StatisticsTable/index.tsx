import React, {useMemo} from "react";
import {useTable, Column} from "react-table";
import {useSelector} from "react-redux";
import {selectTappedItems} from "@store/Slices/itemsCountersSlice";

import './index.scss';

const StatisticsTable = () => {
    interface TappedItemsState {
        category: string
        word: string,
        translation: string,
        taps: number,
        correct: number,
        incorrect: number,
        percent: number
    }
    const dataToDisplay = useSelector(selectTappedItems);
    const data = dataToDisplay;

    const columns: Column<TappedItemsState>[] = React.useMemo(
        () => [
            {
                Header: 'Word',
                accessor: 'word',
            },
            {
                Header: 'Translation',
                accessor: 'translation',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Taps',
                accessor: 'taps',
            },
            {
                Header: 'Correct',
                accessor: 'correct',
            },
            {
                Header: 'Incorrect',
                accessor: 'incorrect',
            },
            {
                Header: '%',
                accessor: 'percent',
            },
        ], []
    )

    const tableInstance = useTable<TappedItemsState>({columns, data});

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <table {...getTableProps()} className="statistics-table">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td  {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default StatisticsTable;