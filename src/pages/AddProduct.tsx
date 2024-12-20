import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon, AddIcon, PublishIcon, StoreIcon } from "../icons";
import {
  Card,
  CardBody,
  Label,
  Input,
  Textarea,
  Button,
  Select,
} from "@windmill/react-ui";
import { PropsWithChildren } from "react";

const CustomInput = Input as unknown as React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
>;
// type TextareaProps = React.ComponentProps<typeof Textarea>;
// const CustomTextarea: React.FC<TextareaProps> = (props) => {
//   return <Textarea {...props} />;
// };

const FormTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  return (
    <div>
      <PageTitle>Add New Product</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink to="/app/dashboard" className="mx-2">
            Dashboard
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Add new Product</p>
      </div>

      <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
        <Card className="row-span-2 md:col-span-2">
          <CardBody>
            <FormTitle>Product Image</FormTitle>
            <input
              type="file"
              className="mb-4 text-gray-800 dark:text-gray-300"
            />

            <FormTitle>Product Name</FormTitle>
            <Label>
              <CustomInput
                className="mb-4 px-4 py-2"
                placeholder="Type product name here"
              />
            </Label>

            <FormTitle>Product Price</FormTitle>
            <Label>
              <CustomInput
                className="mb-4  px-4 py-2"
                placeholder="Enter product price here"
              />
            </Label>

            <FormTitle>Short description</FormTitle>
            <Label>
              <Textarea
                className="mb-4  px-4 py-2"
                rows={3}
                placeholder="Enter product short description here"
                aria-label="Text area"
                onPointerEnterCapture={() => console.log("Pointer entered")}
                onPointerLeaveCapture={() => console.log("Pointer left")}
                css={{ borderColor: "gray" }}
              />
            </Label>

            <FormTitle>Stock Qunatity</FormTitle>
            <Label>
              <CustomInput
                className="mb-4  px-4 py-2"
                placeholder="Enter product stock quantity"
              />
            </Label>

            <FormTitle>Full description</FormTitle>
            <Label>
              <Textarea
                className="mb-4  px-4 py-2"
                rows={5}
                placeholder="Enter product full description here"
                aria-label="Text area"
                onPointerEnterCapture={() => console.log("Pointer entered")}
                onPointerLeaveCapture={() => console.log("Pointer left")}
                css={{ borderColor: "gray" }}
              />
            </Label>

            <div className="w-full">
              <Button size="large" iconLeft={(props) => <AddIcon {...props} />} className="px-4 py-2">
                Add Product
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="h-48">
          <CardBody>
            <div className="flex mb-8">
              <Button
                layout="primary"
                className="mr-3"
                iconLeft={(props) => <PublishIcon {...props} />}
              >
                Publish
              </Button>
              <Button
                layout="link"
                iconLeft={(props) => <StoreIcon {...props} />}
              >
                Save as Draft
              </Button>
            </div>
            <Label className="mt-4">
              <FormTitle>Select Product Category</FormTitle>
              <Select
                className="mt-1 px-4 py-2"
                placeholder="Category"
                onPointerEnterCapture={() => console.log("Pointer entered")}
                onPointerLeaveCapture={() => console.log("Pointer left")}
                css={{ borderColor: "gray" }} // Đảm bảo sử dụng đúng kiểu css nếu thư viện yêu cầu
                required
              >
                <option>Electronic</option>
                <option>Fashion</option>
                <option>Cosmatics</option>
                <option>Food and Meal</option>
              </Select>
            </Label>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
