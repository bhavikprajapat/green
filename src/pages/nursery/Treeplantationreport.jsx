import React from 'react'
import { Table, Tag, Space } from 'antd';

const Treeplantationreport = () => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'તારીખ',
            dataIndex: 'તારીખ',
            key: 'date',
        },
        {
            title: 'સ્થળ_સાઇટ',
            dataIndex: 'સ્થળ_સાઇટ',
            key: 'location',
            // Custom render example
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'ટીમ',
            dataIndex: 'ટીમ',
            key: 'team',
        },
        {
            title: 'દાતા',
            dataIndex: 'દાતા',
            key: 'donor',
            // Advanced custom render using tags
            render: (status) => {
                let color = status === 'active' ? 'green' : 'volcano';
                return <Tag color={color}>{status.toUpperCase()}</Tag>;
            },
        },
        {
            title: 'રોપાની_સંખ્યા',
            dataIndex: 'રોપાની_સંખ્યા',
            key: 'plantno',

        },
        {
            title: 'પાંજરા',
            dataIndex: 'પાંજરા',
            key: 'cases',

        },
        {
            title: 'સ્થિતિ',
            key: 'action',
            dataIndex: 'સ્થિતિ',

        },
    ];

    const data = [
        {
            key: '1',
            તારીખ: '24 મે, 2024',
            સ્થળ_સાઇટ: 'સ્વામિનારાયણ ગાર્ડન, રાજકોટ',
            ટીમ: 'ટીમ - અલ્ફા',
            દાતા: 'જયેશભાઈ પટેલ',
            રોપાની_સંખ્યા: '150',
            પાંજરા: '150',
            સ્થિતિ: 'પૂર્ણ',
        },
        {
            key: '2',
            તારીખ: '28 મે, 2024',
            સ્થળ_સાઇટ: 'રીંગ રોડ ફેઝ-૨',
            ટીમ: 'ટીમ - ડેલ્ટા',
            દાતા: 'ટ્રસ્ટ ફંડ',
            રોપાની_સંખ્યા: '180',
            પાંજરા: '180',
            સ્થિતિ: 'પૂર્ણ',
        },
        {
            key: '3',
            તારીખ: '220 મે, 2024	',
            સ્થળ_સાઇટ: 'ન્યુ કોલેજ કેમ્પસ',
            ટીમ: '	ટીમ - બ્રાવો',
            દાતા: '	એમ.કે. શાહ',
            રોપાની_સંખ્યા: '85',
            પાંજરા: '85',
            સ્થિતિ: 'ચાલુ છે',
        },
        {
            key: '4',
            તારીખ: '220 મે, 2024	',
            સ્થળ_સાઇટ: 'ન્યુ કોલેજ કેમ્પસ',
            ટીમ: '	ટીમ - બ્રાવો',
            દાતા: '	એમ.કે. શાહ',
            રોપાની_સંખ્યા: '85',
            પાંજરા: '85',
            સ્થિતિ: 'ચાલુ છે',
        },
        {
            key: '5',
            તારીખ: '220 મે, 2024	',
            સ્થળ_સાઇટ: 'ન્યુ કોલેજ કેમ્પસ',
            ટીમ: '	ટીમ - બ્રાવો',
            દાતા: '	એમ.કે. શાહ',
            રોપાની_સંખ્યા: '85',
            પાંજરા: '85',
            સ્થિતિ: 'ચાલુ છે',
        },
        {
            key: '6',
            તારીખ: '220 મે, 2024	',
            સ્થળ_સાઇટ: 'ન્યુ કોલેજ કેમ્પસ',
            ટીમ: '	ટીમ - બ્રાવો',
            દાતા: '	એમ.કે. શાહ',
            રોપાની_સંખ્યા: '85',
            પાંજરા: '85',
            સ્થિતિ: 'ચાલુ છે',
        },
        {
            key: '7',
            તારીખ: '220 મે, 2024	',
            સ્થળ_સાઇટ: 'ન્યુ કોલેજ કેમ્પસ',
            ટીમ: '	ટીમ - બ્રાવો',
            દાતા: '	એમ.કે. શાહ',
            રોપાની_સંખ્યા: '85',
            પાંજરા: '85',
            સ્થિતિ: 'ચાલુ છે',
        },

    ];
    return (
        <div>
            <div style={{ padding: '24px' }}>
                <h2>Employee Directory</h2>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                />
            </div>
        </div>
    )
}

export default Treeplantationreport