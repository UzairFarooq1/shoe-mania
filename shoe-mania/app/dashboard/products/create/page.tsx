"use client";
import { createProduct } from "@/app/action";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/app/lib/zodSchema";
import { useState } from "react";
import Image from "next/image";

export default function ProductCreateRoute() {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      className="my-4"
      action={action}
    >
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
          <Link href="/dashboard/products">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="font-bold">New Product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add new Product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                className="w-full"
                placeholder="Product Name"
              />
              <p className="text-red-500">{fields.name.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                placeholder="Write your Description here...."
              />
              <p className="text-red-500">{fields.description.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={fields.price.initialValue}
                type="number"
                placeholder="$55"
              />
              <p className="text-red-500">{fields.price.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
              />
              <p className="text-red-500">{fields.isFeatured.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.status.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((image, index) => (
                    <div key={index} className="relative w-[100px] h-[100px]">
                      <Image
                        height={100}
                        width={100}
                        src={image}
                        alt="product image"
                        className="w-full h-full object-cover rounded-lg border "
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={() => {
                    alert("Error Uploading");
                  }}
                />
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Create Product</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
