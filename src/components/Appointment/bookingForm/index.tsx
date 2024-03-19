"use client";
import Button from "@/components/Common/Button";
import { HeadingH3 } from "@/components/Common/Heading";
import { Para14 } from "@/components/Common/Paragraph";
import Link from "next/link";
import {
  Checkbox,
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  GetProp,
  Input,
  Row,
  Select,
} from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const onCheckboxChange: (checkedValues: CheckboxValueType[]) => void = (
  checkedValues
) => {
  console.log("checked = ", checkedValues);
};
const BookingForm = () => {
  return (
    <div className="mt-20 max-w-screen-md mx-auto border p-2 md:p-4 bg-primary-orange-300 rounded-md space-y-5">
      <HeadingH3
        className="text-center text-white"
        title={"Appointment Booking Form"}
      />
      <Form layout="vertical">
        <Row gutter={10}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Appointment Date"
              name={"Date"}
              className="font-medium"
              rules={[{ required: true, message: "Please Enter Date!" }]}
            >
              <DatePicker
                onChange={onChange}
                style={{ backgroundColor: "white", height: "48px" }}
                className="w-full h-13 bg-white text-black h-8 bg-transparent hover:bg-transparent outline-none focus:outline-none"
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Visa Type"
              name={"visaType"}
              className="font-medium"
              rules={[{ required: true, message: "Please Select Visa type!" }]}
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
              name="firstName"
              label="First Name"
              className="font-medium"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input
                className="h-12"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="lastName"
              label="Last Name"
              className="font-medium"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
            >
              <Input
                className="h-12"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Date of Birth"
              name={"DateofBirth"}
              className="font-medium"
              rules={[
                { required: true, message: "Please Enter Date of Birth!" },
              ]}
            >
              <DatePicker
                onChange={onChange}
                style={{ backgroundColor: "white", height: "48px" }}
                className="w-full h-13 bg-white text-black h-8 bg-transparent hover:bg-transparent outline-none focus:outline-none"
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
              <Input
                className="h-12"
                style={{ width: "20%", borderRadius: "5px 0px 0px 5px" }}
                defaultValue="+92"
              />
              <Input
                className="h-12"
                style={{ width: "80%", borderRadius: "0px 5px 5px 0px" }}
              />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Nationality"
              name={"Nationality"}
              className="font-medium"
              rules={[
                { required: true, message: "Please Select Nationality!" },
              ]}
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
              label="Passport Type"
              name={"PassportType"}
              className="font-medium"
              rules={[
                { required: true, message: "Please Select Passport Type!" },
              ]}
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
              name="PassportNumber"
              label="Passport Number"
              className="font-medium"
              rules={[
                {
                  required: true,
                  message: "Please input your Passport Number!",
                },
              ]}
            >
              <Input
                className="h-12"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Passport Issue Date"
              name={"issueDate"}
              className="font-medium"
              rules={[
                {
                  required: true,
                  message: "Please Enter Passport Issue Date!",
                },
              ]}
            >
              <DatePicker
                onChange={onChange}
                style={{ backgroundColor: "white", height: "48px" }}
                className="w-full h-13 bg-white text-black h-8 bg-transparent hover:bg-transparent outline-none focus:outline-none"
              />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Passport Expiry Date"
              name={"ExpiryDate"}
              className="font-medium"
              rules={[
                {
                  required: true,
                  message: "Please Enter Passport Expiry Date!",
                },
              ]}
            >
              <DatePicker
                onChange={onChange}
                style={{ backgroundColor: "white", height: "48px" }}
                className="w-full h-13 bg-white text-black h-8 bg-transparent hover:bg-transparent outline-none focus:outline-none"
              />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="issueplace"
              label="Passport Issue Place"
              className="font-medium"
              rules={[
                {
                  required: true,
                  message: "Please input your Passport Issue Place!",
                },
              ]}
            >
              <Input
                className="h-12"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              />
            </Form.Item>
          </Col>
          <Col xxl={6} xl={8} lg={8} md={12} sm={24} xs={24}>
    <Form.Item
        name="Choose"
        label="Choose other services..."
        className="font-medium"
        rules={[
            {
                required: true,
                message: "Please input your Choose other services...!",
            },
        ]}
    >
        <Checkbox.Group className="w-full" onChange={onCheckboxChange}>
            <Row gutter={[10, 10]} >
                <Col span={12} sm={24}>
                    <Checkbox value="SMS">SMS</Checkbox>
                </Col>
                <Col span={12} sm={24}>
                    <Checkbox value="Filling">Form Filling</Checkbox>
                </Col>
                <Col span={12} sm={24}>
                    <Checkbox value="Photocopy">Photocopy B/W</Checkbox>
                </Col>
                <Col span={12} sm={24}>
                    <Checkbox value="Photograph">Photograph</Checkbox>
                </Col>
                <Col span={12} sm={24}>
                    <Checkbox value="Lounge">Premium Lounge</Checkbox>
                </Col>
                <Col span={12} sm={24}>
                    <Checkbox value="Prime">Prime Time Service</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    </Form.Item>
</Col>


          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item>
              <Para14 className="" title={"The Value Added Services are optional and doesn't in any way influence or fast track my application. The decision to grant a visa is purely a decision of the Consulate and BLS has no influence over the same."}/>
            </Form.Item>
          </Col>

          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item extra="We must make sure that your are a human.">
        <Row gutter={8} className="flex items-center">
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}
            >
              <Input
                className="h-12"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              />
            </Form.Item>
          </Col>
          <Col span={12} className="">
            <Button className="bg-primary-orange-400 text-white " title={"Get captcha"} />
          </Col>
        </Row>
      </Form.Item>
          </Col>

          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item className="flex justify-center">
            <Link href={"/appointment"} className="bg-primary-orange-400 text-white hover:text-white mt-5 flex justify-center p-3 rounded-md">Continue</Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingForm;
