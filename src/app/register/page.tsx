"use client";

import { Form, Input, Button } from "antd";
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "../utils/axiosInstance";
import Image from "next/image";
// import { useDispatch } from "react-redux";

const Register = () => {
//   const dispatchFunction = useDispatch();

  const navigation = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await axiosInstance.post(
        `/website/users/auth/register`,
        values
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      navigation.push("/products");
      message.success("Account created successfully!");

      window.location.replace("/");
    } catch (e: any) {
      if (e && e.response && e.response.data && e.response.data.message) {
        message.error(e.response.data.message);
      } else {
        message.error("Connection failed. Try again!");
      }
    }
  };

  return (
    <>
      <section className="container mx-auto ">
        <div className="2xl:mx-28 lg:mx-4 mx-2 gird flex items-center justify-center bg-[url('https://img.freepik.com/free-vector/abstract-digital-grid-vector-black-background_53876-111550.jpg')] h-[100%]">
          <div className="flex items-center justify-center bg-white my-10">
            <div className="shadow-xl px-4 py-10 rounded-md md:w-[500px] w-[100vw]">
              <div className="flex justify-center">
                {/* <Image
                  src={"/image.jpg"}
                  alt=""
                  className=" w-[100px] mb-10"
                  width={1000}
                  height={1000}
                /> */}
              </div>
              <Form
                name="basic"
                size="small"
                layout="vertical"
                className="w-full "
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  required
                  name="name"
                  label={<div className="font-bold">Name</div>}
                  rules={[
                    {
                      required: true,
                      message: "Name is required.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    type="name"
                    className="border border-gray-300 rounded-md w-full py-2 px-4"
                  />
                </Form.Item>

                <Form.Item
                  required
                  name="location"
                  label={<div className="font-bold">Location</div>}
                  rules={[
                    {
                      required: true,
                      message: "Location is required.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    type="location"
                    className="border border-gray-300 rounded-md w-full py-2 px-4"
                  />
                </Form.Item>

                <Form.Item
                  required
                  name="email"
                  label={<div className="font-bold">Email</div>}
                  rules={[
                    {
                      required: true,
                      message: "Email is required.",
                    },
                    {
                      pattern:
                        /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    type="email"
                    className="border border-gray-300 rounded-md w-full py-2 px-4"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={<div className="font-bold">Password</div>}
                  rules={[
                    {
                      required: true,
                      message: "Password is required.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input.Password className="border border-gray-300 rounded-md w-full py-2 px-4" />
                </Form.Item>

                <Form.Item
                  name="confirm_password"
                  label={<div className="font-bold">Confirm Password</div>}
                  rules={[
                    {
                      required: true,
                      message: "Confirm Password is required.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input.Password className="border border-gray-300 rounded-md w-full py-2 px-4" />
                </Form.Item>

                <Form.Item>
                  <button
                    type="submit"
                    className="bg-black text-white  font-semibold px-4 py-2 rounded-md w-full "
                  >
                    Register
                  </button>
                </Form.Item>
              </Form>
              <div className="mb-6">
                <Link className="" href={"/forgot-pw"}>
                  Forgot password?
                </Link>
              </div>
              <div className="text-center ">
                Already have an account? &nbsp;
                <Link
                  href={"/login"}
                  className="cursor-pointer font-bold underline underline-offset-4"
                >
                  Login.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
