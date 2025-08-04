"use client"

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
import { Textarea } from "@/components/ui/textarea";
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "@/components/image-upload";

// ICON
import { Trash } from "lucide-react";

// PRISMA
import { Project, Image } from "@prisma/client";

// SCHEMA
import { ProjectFeatureSchema } from "@/schemas";

import { useFeatureStore } from "@/store/project-feature-store";

type ProjectFormValues = z.infer<typeof ProjectFeatureSchema>


export const AddFeatureForm = () => {
    const params = useParams()
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { addFeature } = useFeatureStore()


    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(ProjectFeatureSchema),
        defaultValues: {
            featureTitle: "",
            featureDescription: "",
            featureImage: "",
            featureVideo: "",

        },
    });

    const onSubmit = async (data: ProjectFormValues) => {

        try {
            setLoading(true);
            const res = await axios.post(`/api/projects/${params.projectId}/features`, data);
            if (res.data && res.status === 200) {
                addFeature(res.data);
                toast.success("New feature added");
            }
            // toast.error("Failed to add feature. Please try again later.");
        } catch (error: any) {
            toast.error('Something went wrong.');
            // if (error.response && error.response.status === 401) {
            //     toast.error("You are not authorized to add features.");
            // } else if (error.response && error.response.status === 500) {
            //     toast.error("Internal server error. Please try again later.");
            // } else {
            //     toast.error("Failed to add feature. Please try again later.");
            // }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* <div className="flex items-center justify-between">
            </div> */}
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
