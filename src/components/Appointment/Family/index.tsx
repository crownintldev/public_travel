import Button from "@/components/Common/Button";
import { Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import Link from "next/link";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Family = () => {
  return (
    <div className="mt-10">
      <Form layout="vertical">
        <Row gutter={10}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Slect Your Center"
              name={"Center"}
              className="font-medium"
              rules={[{ required: true, message: "Please Select Center!" }]}
            >
              <Select
                className="h-12"
                defaultValue="Select"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name={"FamilyMember"}
              label="Family Member"
              className="font-medium"
              rules={[{ required: true, message: "Please Select Member!" }]}
            >
              <Select
                className="h-12"
                defaultValue="Slected Member"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name={"AppointmentCategory"}
              label="Appointment Category"
              className="font-medium"
              rules={[{ required: true, message: "Please Select Category!" }]}
            >
              <Select
                className="h-12"
                defaultValue="Slected Category"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="phone"
              label="Phone Number"
              className="font-medium"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
                 <Input className="h-12" style={{ width: '20%', borderRadius:"5px 0px 0px 5px" }} defaultValue="+92" />
                 <Input className="h-12" style={{ width: '80%', borderRadius:"0px 5px 5px 0px" }} />

            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="email"
              label="Register Email Address"
              className="font-medium"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input className="h-12" style={{ borderRadius:"5px 5px 5px 5px" }} />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item className="flex items-center justify-center">
            <Button className="bg-primary-orange-400 text-white flex items-center justify-center  mt-2 md:mt-8" title="Request Verification Code"/>
            </Form.Item>
          </Col>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
              name="code"
              label="Verification Code"
              className="font-medium"
              rules={[
                { required: true, message: "Please input your Verification Code!" },
              ]}
            >
              <Input className="h-12" style={{ borderRadius:"5px 5px 5px 5px" }} />
            </Form.Item>
          </Col>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item className="flex justify-center">
          <Link href={"/appointment/visabooking"} className="bg-primary-orange-400 text-white hover:text-white mt-5 flex justify-center p-3 rounded-md">Continue</Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Family