"use client"

import React from 'react'
import * as z from "zod"
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

// UI COMPONENTS
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "@/components/image-upload";

// ICON
import { Trash } from "lucide-react";

// PRISMA
import { ProjectFeature as Feature } from '@prisma/client'

// SCHEMA
import { ProjectFeatureSchema as FeatureFormSchema } from "@/schemas";


interface Props {
  feature: Feature
}

type FeatureFormValues = z.infer<typeof FeatureFormSchema>

const FeatureEditForm: React.FC<Props> = ({ feature }) => {
  const params = useParams()
  const router = useRouter()
  const { projectId, featureId } = params

  const [loading, setLoading] = useState(false);

  const form = useForm<FeatureFormValues>({
    resolver: zodResolver(FeatureFormSchema),
    defaultValues: feature
  })

  const onSubmit = async (data: FeatureFormValues) => {

    try {
      setLoading(true);
      const res = await axios.patch(`/api/projects/${projectId}/features/${featureId}`, data);

      console.log(res)

      if (res.status === 200) {
        toast.success("Feature updated");
      }

      // router.push(`/admin/projects`)
      // router.refresh();
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (


    <>
      <h1>Edit Feature</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-4 space-y-8 w-full">
          <div className=" grid grid-cols-3 gap-8">

            {/*FEATURE IMAGE FIELD */}
            <FormField
              control={form.control}
              name="featureImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*FEATURE VIDEO FIELD */}
            <FormField
              control={form.control}
              name="featureVideo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* FEATURE TITLE FIELD */}
            <FormField
              control={form.control}
              name="featureTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature Title</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Title.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  FEATURE DESCRIPTION */}
            <FormField
              control={form.control}
              name="featureDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Project</FormLabel>
                  <FormControl>
                    <Textarea disabled={loading} placeholder="Feature description..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            className="ml-auto" type="submit">
            Add
          </Button>
        </form>
      </Form>
    </>
  )
}

export default FeatureEditForm
