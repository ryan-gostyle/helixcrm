import { Table } from 'antd';
import axios from 'axios'
import React, { Component } from 'react'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

class Tables extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

    fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    axios.get('https://randomuser.me/api', {
        params: {
            results: 10,
            ...params,
        },
        responseType: 'json',
    })
    .then(response => {
    // console.log(response.data.results);
    const pagination = {...this.state.pagination};
    // Read total count from server
    // pagination.total = data.totalCount;
    pagination.total = 200;
    this.setState({
        loading: false,
        data: response.data.results,
        pagination,
    });
    console.log(response.data.results);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

  };

  render() {
    return (
      <Table
      scroll={{ x: true, y: 550 }}
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}
export default Tables;