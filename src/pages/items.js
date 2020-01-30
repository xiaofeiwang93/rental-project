import { connect } from 'dva'
import React, { Component } from 'react'
import styles from './items.css';

@connect(
  state=>({
    itemsList:state.items,
  }),
  {
    getList:()=>(
      {type:'items/getList'}  
    ),
  }
)

export default class extends Component() {
  componentDidMount(){
    this.props.getList()
  }
  render(){
    return (
      <div className={styles.normal}>
        <Row gutter={16}>
            <Col span={16}>
                <img src='https://s2.best-wallpaper.net/wallpaper/3840x1200/1607/Fostla-BMW-M3-E92-coupe-side-view_3840x1200.jpg'
                    style={{width:'890px',height:'190px'}}
                />
            </Col>
            <Col span={8}>
                <div className="gutter-box">
                    <h1>RenTal</h1>
                    <p>Enjoy the total piece of mind knowing your rental property is in the best hands</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24} className='table-title'>
                <h1>Item List</h1>
            </Col>
            <Table pagination={false} columns={columns} dataSource={data} />
        </Row>
    </div>
    );
  }
}
