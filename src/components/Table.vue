<template>
    <div>
        <vxe-grid ref="xGrid" v-bind="gridOptions">
            <template #name_edit="{ row }">
                <vxe-input v-model="row.name"></vxe-input>
            </template>
            <template #nickname_edit="{ row }">
                <vxe-input v-model="row.nickname"></vxe-input>
            </template>
            <template #role_edit="{ row }">
                <vxe-input v-model="row.role"></vxe-input>
            </template>
            <template #address_edit="{ row }">
                <vxe-input v-model="row.address"></vxe-input>
            </template>
        </vxe-grid>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { VXETable } from "vxe-table";
const xGrid = ref();
const tableData = ref([
    {
        "start_timestamp": "2023-12-05T00:02:43.911Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0003",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 80,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-12-03T01:39:48.916Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0004",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 80,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-12-03T00:52:20.561Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0008",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 76,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-12-01T05:00:44.508Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0010",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 80,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-11-21T23:06:20.341Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0002",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 80,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-11-16T20:55:11.935Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0001",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 72,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-11-14T22:16:39.696Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0009",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 76,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    },
    {
        "start_timestamp": "2023-11-14T21:04:56.286Z",
        "trip_name": "Trip 1",
        "nickname": "MIH-0005",
        "driver_name": "John Doe",
        "vehicle_score": 0,
        "driving_score": 68,
        "trip_info": {
            "trip_start_timestamp": "2023-11-14T21:04:56.286Z",
            "trip_end_timestamp": "2023-11-14T21:27:20.133Z",
            "trip_duration_seconds": 1343.847,
            "trip_distance": 20.3
        },
        "driving_behavior": {
            "ideling_seconds": 0,
            "harsh_breaking": 6,
            "rapid_acceleration": 0,
            "harsh_cornering": 0,
            "collision": 0,
            "over_speeding": 0,
            "mobile": 10,
            "distracted": 1,
            "drinking": 0,
            "sleepy": 13
        }
    }
])
const gridOptions = reactive({
    border: true,
    keepSource: true,
    id: "toolbar_demo_1",
    height: 530,
    printConfig: {},
    importConfig: {},
    exportConfig: {},
    columnConfig: {
        resizable: true,
    },
    customConfig: {
        storage: true,
    },
    editConfig: {
        trigger: "click",
        mode: "row",
        showStatus: true,
    },
    columns: [
        {
            field: "start_timestamp",
            title: "start_timestamp",
        },
        {
            field: "trip_name",
            title: "trip_name",
        },
        {
            field: "nickname",
            title: "nickname",
            sortable: true,
        },
        {
            field: "driver_name",
            title: "driver_name",
        },
        {
            field: "vehicle_score",
            title: "vehicle_score",
        },
        {
            field: "driving_score",
            title: "driving_score",
        },
        {
            title: "trip_info",
            children: [
                {
                    field: "trip_info.trip_start_timestamp",
                    title: "trip_start_timestamp",
                },
                {
                    field: "trip_info.trip_end_timestamp",
                    title: "trip_end_timestamp",
                },
                {
                    field: "trip_info.trip_duration_seconds",
                    title: "trip_duration_seconds",
                },
                {
                    field: "trip_info.trip_distance",
                    title: "trip_distance",
                },
            ],
        },
        {
            title: "driving_behavior",
            children: [
                {
                    field: "driving_behavior.ideling_seconds",
                    title: "ideling_seconds",
                },
                {
                    field: "driving_behavior.harsh_breaking",
                    title: "harsh_breaking",
                },
                {
                    field: "driving_behavior.rapid_acceleration",
                    title: "rapid_acceleration",
                },
                {
                    field: "driving_behavior.harsh_cornering",
                    title: "harsh_cornering",
                },
                {
                    field: "driving_behavior.collision",
                    title: "collision",
                },
                {
                    field: "driving_behavior.over_speeding",
                    title: "over_speeding",
                },
                {
                    field: "driving_behavior.mobile",
                    title: "mobile",
                },
                {
                    field: "driving_behavior.distracted",
                    title: "distracted",
                },
                {
                    field: "driving_behavior.drinking",
                    title: "drinking",
                },
                {
                    field: "driving_behavior.sleepy",
                    title: "sleepy",
                },
            ]
        },

        // { type: "checkbox", width: 50 },
        // { type: "seq", width: 60 },
        // {
        //     field: "name",
        //     title: "Name",
        //     editRender: {},
        //     slots: { edit: "name_edit" },
        // },
        // {
        //     title: "分类",
        //     children: [
        //         {
        //             field: "nickname",
        //             title: "Nickname",
        //             editRender: { autofocus: ".vxe-input--inner" },
        //             slots: { edit: "nickname_edit" },
        //         },
        //         {
        //             field: "role",
        //             title: "Role",
        //             editRender: {},
        //             slots: { edit: "role_edit" },
        //         },
        //     ],
        // },
        // {
        //     field: "address",
        //     title: "Address",
        //     showOverflow: true,
        //     editRender: {},
        //     slots: { edit: "address_edit" },
        // },
    ],
    toolbarConfig: {
        custom: true,
    },
    data: tableData.value
});
</script>
<style>
@import 'vxe-table/lib/style.css';

html.black-theme {
    --vxe-font-color: #98989E;
    --vxe-primary-color: #2C7ECF;
    --vxe-icon-background-color: #98989E;
    --vxe-table-font-color: #98989E;
    --vxe-table-resizable-color: #95969a;
    --vxe-table-header-background-color: #28282A;
    --vxe-table-body-background-color: #151518;
    --vxe-table-background-color: #4a5663;
    --vxe-table-border-width: 1px;
    --vxe-table-border-color: #37373A;
}
</style>
<!-- [
        {
            id: 10001,
            name: "Test1",
            nickname: "T1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "Shenzhen",
        },
        {
            id: 10002,
            name: "Test2",
            nickname: "T2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
        },
        {
            id: 10003,
            name: "Test3",
            nickname: "T3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
        },
        {
            id: 10004,
            name: "Test4",
            nickname: "T4",
            role: "Designer",
            sex: "Women",
            age: 23,
            address: "Shenzhen",
        },
        {
            id: 10005,
            name: "Test5",
            nickname: "T5",
            role: "Develop",
            sex: "Women",
            age: 30,
            address: "Shanghai",
        },
        {
            id: 10006,
            name: "Test6",
            nickname: "T6",
            role: "Designer",
            sex: "Women",
            age: 21,
            address: "Shenzhen",
        },
        {
            id: 10007,
            name: "Test7",
            nickname: "T7",
            role: "Test",
            sex: "Man",
            age: 29,
            address: "Shenzhen",
        },
        {
            id: 10008,
            name: "Test8",
            nickname: "T8",
            role: "Develop",
            sex: "Man",
            age: 35,
            address: "Shenzhen",
        },
    ], -->