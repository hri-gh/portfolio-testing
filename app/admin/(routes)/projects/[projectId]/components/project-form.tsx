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
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "@/components/image-upload";

// ICON
import { Trash } from "lucide-react";

// PRISMA
import { Project, Image } from "@prisma/client";

// SCHEMA
import { ProjectFormSchema } from "@/schemas";


type ProjectFormValues = z.infer<typeof ProjectFormSchema>

interface IProjectFormProps {
    initialData: Project & {
        images: Image[];
    } | null;
};


export const ProjectForm: React.FC<IProjectFormProps> = ({ initialData }) => {
    const params = useParams()
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Project" : "Create Project"
    const description = initialData ? "Edit a project" : "Add a new project"
    const toastMessage = initialData ? "Project updated" : "Project created"
    const action = initialData ? "Save changes" : "Create"



    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: initialData || {
            images: [],
            projectName: '',
            aboutProject: '',
            technologies: '',
            liveDemoLink: '',
            websiteLink: '',
            githubLink: '',
            gitlabLink: '',
            bitbucketLink: '',
            projectType: '',

        },
    });

    const onSubmit = async (data: ProjectFormValues) => {

        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/projects/${params.projectId}`, data);
            } else {
                await axios.post(`/api/projects`, data);
            }
            router.push(`/admin/projects`)
            router.refresh();
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/projects/${params.projectId}`);
            router.push(`/admin/projects`)
            router.refresh();
            toast.success('Content deleted.');
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setOpen(false);
            setLoading(false);
        }

    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading
                    title={title}
                    description={description}
                />
                {/* Delete Button */}
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="grid grid-cols-3 gap-8">

                        {/* IMAGE FIELD */}
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <ImageUpload
                                            value={field.value.map((image) => image.url)}
                                            disabled={loading}
                                            onChange={(url) => field.onChange([...field.value, { url }])}
                                            onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PROJECT NAME FIELD */}
                        <FormField
                            control={form.control}
                            name="projectName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Project's name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ABOUT PROJECT FIELD */}
                        <FormField
                            control={form.control}
                            name="aboutProject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>About Project</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Project description..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* LIVE DEMO LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="liveDemoLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Live Demo Link (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Demo link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* GITHUB LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="githubLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitHub Link</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Source code link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* GITLAB LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="gitlabLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitLab Link (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Source code link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* BITBUCKET LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="bitbucketLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>BitBucket Link (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Source code link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* WEBSITE LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="websiteLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website Link (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Website link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PROJECT TYPE FIELD */}
                        <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Type</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Type of project" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* TECHNOLOGIES FIELD */}

                        <FormField
                            control={form.control}
                            name="technologies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Technologies</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Technologies used in project" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    )
}
