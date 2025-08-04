
import { useState } from 'react';
import { useFeatureStore } from '@/store/project-feature-store';
import { ProjectFeature as Feature } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Delete, Trash } from 'lucide-react';
import { AlertModal } from '@/components/modals/alert-modal';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useRouter } from "next/navigation";

interface Props {
  feature: Feature
}

const FeatureCard: React.FC<Props> = ({ feature }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const { deleteFeature } = useFeatureStore();
  const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(featureTitle);
  // const [editedDescription, setEditedDescription] = useState(featureDescription);

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };


  const handleSave = () => {
    // Call an update action in your store here (add it later if needed)
    setIsEditing(false);
    // You would update the store here if you had an update function in the store
  };

  // const handleDelete = () => {
  //   deleteFeature(id);
  // };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={async () => {
          try {
            setLoading(true);
            const res = await axios.delete(`/api/projects/${feature.projectId}/features/${feature.id}`);
            if (res.status === 200) {
              toast.success('Content deleted.');
              deleteFeature(feature.id);
            }
            // router.refresh();
          } catch (error) {
            toast.error('Something went wrong');
          } finally {
            setOpen(false);
            setLoading(false);
          }
        }}
        loading={loading}
      />
      <Card className='w-[350px] mb-4'>
        <CardHeader>
          <CardTitle>{feature.featureTitle}</CardTitle>
          {/* <CardDescription>{feature.featureDescription}</CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* <p>Card Content</p> */}
          <CardDescription>{feature.featureDescription}</CardDescription>
        </CardContent>
        <CardFooter>
          {/* <p>Card Footer</p> */}
          <div className='flex gap-2'>
          <Link href={`/admin/projects/${feature.projectId}/features/${feature.id}`}>
            {/* <p className=' bg-gray-600 rounded-md p-2'>Features</p> */}
            <Button variant={'outline'}
            >Edit</Button>
          </Link>

          <Button variant={"destructive"} size={"icon"}>
            <Trash
              className="hover:text-red-200"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                setOpen(true)
              }} />
          </Button>
          </div>
        </CardFooter>
      </Card>

    </>
    // <div className="p-4 border rounded-md shadow-md">
    //   <img src={featureImage} alt={featureTitle} className="h-32 w-full object-cover rounded-md" />
    //   <div className="mt-4">
    //     {isEditing ? (
    //       <input
    //         type="text"
    //         value={editedTitle}
    //         onChange={(e) => setEditedTitle(e.target.value)}
    //         className="w-full px-2 py-1 mb-2 border rounded-md"
    //       />
    //     ) : (
    //       <h3 className="text-xl font-bold">{featureTitle}</h3>
    //     )}

    //     {isEditing ? (
    //       <textarea
    //         value={editedDescription}
    //         onChange={(e) => setEditedDescription(e.target.value)}
    //         className="w-full px-2 py-1 mb-2 border rounded-md"
    //       />
    //     ) : (
    //       <p>{featureDescription}</p>
    //     )}
    //   </div>
    //   <div className="flex justify-end space-x-2 mt-4">
    //     {isEditing ? (
    //       <button
    //         onClick={handleSave}
    //         className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
    //       >
    //         Save
    //       </button>
    //     ) : (
    //       <button
    //         onClick={handleEdit}
    //         className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
    //       >
    //         Edit
    //       </button>
    //     )}
    //     <button
    //       onClick={handleDelete}
    //       className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </div>
  );
};

export default FeatureCard;
