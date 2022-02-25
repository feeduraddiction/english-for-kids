import React from "react";
import {useTable, useSortBy, Column} from "react-table";
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

    const data = useSelector(selectTappedItems);
    // const data = dataToDisplay;

    const columns: Column<TappedItemsState>[] = React.useMemo(
        () => [
            {
                Header: 'Word',
                accessor: 'word',
                sortType: 'basic',
            },
            {
                Header: 'Translation',
                accessor: 'translation',
                sortType: 'basic',
            },
            {
                Header: 'Category',
                accessor: 'category',
                sortType: 'basic',
            },
            {
                Header: 'Taps',
                accessor: 'taps',
                sortType: 'basic',
            },
            {
                Header: 'Correct',
                accessor: 'correct',
                sortType: 'basic',
            },
            {
                Header: 'Incorrect',
                accessor: 'incorrect',
                sortType: 'basic',
            },
            {
                Header: '%',
                accessor: 'percent',
                sortType: 'basic',
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