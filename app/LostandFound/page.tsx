// src/app/page.tsx
"use client"; // Client-side component

import { useEffect, useState } from 'react';
import AddItemForm from '@/components/AddItemForm'

interface Comment {
  id: number;
  imageId: string;
  description: string;
  name: string;
  contact: string;
  content: string;
}

export default function Page() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('/api/getComments');
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  const handleAddComment = async (comment: Comment) => {
    const response = await fetch('/api/addComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    const newComment = await response.json();
    setComments((prevComments) => [...prevComments, newComment]);
    setFormVisible(false);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  return (
    <div className="bg-white h-screen">
      {formVisible ? null : (
        <div className="grid grid-cols-3 gap-4 p-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white border-2 border-black p-4 rounded-md">
              <img src={comment.imageId} alt="Uploaded" className="w-full h-auto mb-4" />
              <p className="text-black"><strong>Description:</strong> {comment.description}</p>
              <p className="text-black"><strong>Name:</strong> {comment.name}</p>
              <p className="text-black"><strong>Contact:</strong> {comment.contact}</p>
              <p className="text-black"><strong>Comment:</strong> {comment.content}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mb-4">
        {formVisible ? (
          <AddItemForm onAddComment={handleAddComment} onCancel={handleCancel} />
        ) : (
          <button
            onClick={() => setFormVisible(true)}
            className="p-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
          >
            Report Lost Item
          </button>
        )}
      </div>
    </div>
  );
}