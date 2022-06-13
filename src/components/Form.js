import React from 'react'

import { Button, Checkbox, Form, Input,Modal} from 'antd';

const onFinish = (values) => {
    fetch("https://reqres.in/api/login",{
      method:'POST',
      mode: 'cors',
      data :{
        "email" : values.Email ,
        "username" : values.Email,
        "password" : values.Password
      },
     
    }).then((res)=> res.json())
    .then((data)=> {
      if(!data.error) Modal.success({
          content : data.token,
       })
      else if(data.error) Modal.error({
        content : data.error,
     })
      })
      };
  
  const onFinishFailed = (errorInfo) => {
    Modal.error({
     title : "Error",
     content : errorInfo ,
    });
  };


function SignForm() {
  return (
    
    <Form
    name="basic"
    wrapperCol={{
      span: 20,
      sm : 24
    }}
    
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please input your e-mail!',
        },
      ]}
    >
      <Input type='email' autoComplete='false'
      placeholder="Enter Email"/>
    </Form.Item>

    <Form.Item
      name="Password"
     
    >
      <Input.Password autoComplete='false'
      placeholder="Password" />
    </Form.Item>

    <Form.Item>
      <Button htmlType="submit" size='large' block>
        Login
      </Button>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
    >
      <div className='antd-rem'>

      <Checkbox>Remember me</Checkbox>
    <a href='/'>Forgot Password?</a>
      </div>
      
    </Form.Item>

  </Form>

  )
}

export default SignForm