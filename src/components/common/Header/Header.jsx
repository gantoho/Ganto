import { useState, useEffect, useRef } from 'react'
import { Drawer, Button, Modal, Form, Input, Cascader, Table, message } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import qs from 'query-string';
import http from '../../../utils/request'
import MainTabBar from '../../../components/content/MainTabBar'
import citys from '../../../utils/city'
import { image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16 } from '../../../assets/images'

import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const myform = useRef();

  useEffect(() => {
    getOrderList();
  }, [])

  const _ = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  // 订单
  const getOrderList = () => {
    http.get("/user/order", {
      params: {
        id: 2
      }
    })
      .then(({ data: res }) => {
        if (res.code === 200) {
          // console.log(res.data);
          setOrderList(res.data)
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  // 对话框相关方法
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 表单相关方法
  const onFinish = (values) => {
    let date = new Date();
    values.ordernumber = '';
    values.uid = 2;
    values.createtime = date.getFullYear() + "-"
      + (date.getMonth() + 1) + "-"
      + date.getDate() + " "
      + date.getHours() + ":"
      + date.getMinutes() + ":"
      + date.getSeconds();
    const data = qs.stringify({ ...values });
    http.post("/addorder", data)
      .then(({ data: res }) => {
        // console.log(res);
        if (res.code === 200) {
          // 提交成功 关闭对话框
          setIsModalOpen(false);
          // 提交成功 提示信息
          message.success("提交成功！");
          // 提交成功 获取最新的订单列表
          getOrderList();
          // 提交成功 清空Form表单的字段值
          myform.current.resetFields()
        }
      })
      .catch(err => {
        console.error(err);
      })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // 级联选择 数据
  const residences = citys;

  // 订单数量 自定义验证规则
  const valiDate = (rule, value) => {
    if (!value) {
      return Promise.reject('不能为空!');
    } else if (value <= 0) {
      return Promise.reject('不能少于1!');
    } else if (value >= 100) {
      return Promise.reject('不能大于100!');
    } else {
      return Promise.resolve();
    }
  };

  // 表格头
  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    // },
    {
      title: '订单号',
      dataIndex: 'ordernumber',
      key: 'ordernumber',
    },
    {
      title: '订单内容',
      dataIndex: 'ordercontent',
      key: 'ordercontent',
    },
    {
      title: '数量',
      dataIndex: 'orderquantity',
      key: 'orderquantity',
    },
    {
      title: '收货地址',
      dataIndex: 'orderaddress',
      key: 'orderaddress',
    },
    {
      title: '下单日期',
      dataIndex: 'createtime',
      key: 'createtime',
    },
    {
      title: '备注',
      dataIndex: 'orderremarks',
      key: 'orderremarks',
    },
    // {
    //   title: '归属',
    //   dataIndex: 'uid',
    //   key: 'uid',
    // },
  ];

  return (
    <div className='header'>
      <div
        className="after"
      ></div>
      <div className="container">
        <div className="info">
          <h1 className='name' onClick={_} >干徒</h1>
        </div>
        <MainTabBar />
      </div>
      <Drawer
        title="彩蛋页"
        placement={"right"}
        onClose={onClose}
        open={open}
        closable={true}
        closeIcon={<CloseCircleOutlined />}
        width={"100%"}
      // headerStyle={{
      //   backgroundColor: "#252526",
      //   color: "#fff",
      //   borderBottom: "1px solid #fff"
      // }}
      // bodyStyle={{
      //   backgroundColor: "#252526",
      // }}
      >
        <Button
          type={"primary"}
          style={{ marginBottom: "10px", }}
          onClick={() => showModal()}
        >提交订单</Button>

        <Table
          columns={columns}
          dataSource={orderList}
          scroll={{
            x: 300
          }}
          rowKey="id"
        />
        {/* 图片 */}
        <div className='images'>
          <p><img src={image0} alt={image0} title={image0} /></p>
          <p><img src={image1} alt={image1} title={image1} /></p>
          <p><img src={image2} alt={image2} title={image2} /></p>
          <p><img src={image3} alt={image3} title={image3} /></p>
          <p><img src={image4} alt={image4} title={image4} /></p>
          <p><img src={image5} alt={image5} title={image5} /></p>
          <p><img src={image6} alt={image6} title={image6} /></p>
          <p><img src={image7} alt={image7} title={image7} /></p>
          <p><img src={image8} alt={image8} title={image8} /></p>
          <p><img src={image9} alt={image9} title={image9} /></p>
          <p><img src={image10} alt={image10} title={image10} /></p>
          <p><img src={image11} alt={image11} title={image11} /></p>
          <p><img src={image12} alt={image12} title={image12} /></p>
          <p><img src={image13} alt={image13} title={image13} /></p>
          <p><img src={image14} alt={image14} title={image14} /></p>
          <p><img src={image15} alt={image15} title={image15} /></p>
          <p><img src={image16} alt={image16} title={image16} /></p>
        </div>
      </Drawer>

      {/* destroyOnClose 每次打开Modal对话框，内部都是默认值，清空Form表单 */}
      <Modal
        title="提交订单"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        styles={{
          body: {
            paddingTop: "30px",
          }
        }}
        destroyOnClose
      >
        <Form
          name="basic"
          initialValues={{
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={myform}
        >
          <Form.Item
            label="订单内容"
            name="ordercontent"
            rules={[
              {
                required: true,
                message: '订单内容不能为空',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="购买数量"
            name="orderquantity"
            rules={[
              {
                required: true,
                message: '数量不能为空',
              },
              {
                validator: valiDate, // 自定义验证规则
              }
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="收货地址"
            name="orderaddress"
            rules={[
              {
                type: 'array',
                required: true,
                message: '收货地址不能为空',
              },
            ]}
          >
            {/* <Input /> */}
            <Cascader options={residences} />
          </Form.Item>

          <Form.Item
            label="备注"
            labelCol={{
              span: 4,
            }}
            name="orderremarks"
          >
            <Input placeholder='来将可留姓名' />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </div>
  )
}
