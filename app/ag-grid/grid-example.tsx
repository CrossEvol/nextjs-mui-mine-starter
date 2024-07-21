'use client'

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import {
    CellClassRules,
    ColDef,
    ModuleRegistry,
    RowClassRules,
} from '@ag-grid-community/core'
import { AgGridReact } from '@ag-grid-community/react'
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-quartz.css'
import { useMemo, useState } from 'react'
import './styles.css'
import { initialData } from './data'

ModuleRegistry.registerModules([ClientSideRowModelModule])

const ragCellClassRules: CellClassRules = {
    // apply green to electric cars
    'rag-green': (params) => params.value === true,
}

export const GridExample = () => {
    const containerStyle = useMemo(() => ({ width: '80%', height: '100%' }), [])
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])
    const [rowData, setRowData] = useState<any[]>(initialData)
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {
            field: 'make',
            checkboxSelection: true,
        },
        { field: 'model' },
        {
            field: 'price',
            filter: 'agNumberColumnFilter',
            editable: true,
            cellEditor: 'agNumberCellEditor',
            cellEditorParams: {
                precision: 2,
                step: 10,
                showStepperButtons: true,
            },
        },
        {
            field: 'electric',
            editable: true,
            cellClassRules: ragCellClassRules,
            onCellValueChanged(event) {},
        },
        {
            field: 'month',
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
            },
            comparator: (valueA: string, valueB: string) => {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ]
                const idxA = months.indexOf(valueA)
                const idxB = months.indexOf(valueB)
                return idxA - idxB
            },
        },
    ])
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: true,
            flex: 1,
        }
    }, [])

    const rowClassRules = useMemo<RowClassRules>(() => {
        return {
            // apply red to Ford cars
            'rag-red': (params) => params.data.make === 'Ford',
        }
    }, [])

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className={'ag-theme-quartz'}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowClassRules={rowClassRules}
                    rowSelection={'multiple'}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 25, 50]}
                />
            </div>
        </div>
    )
}
