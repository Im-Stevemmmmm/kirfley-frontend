interface PostProps {
  title: string;
  user: string;
  body: string;
  images?: string[];
}

export const PreviewPost = ({ body, user, images, title }: PostProps) => {
  return (
    <div className="flex-grow bg-white rounded border border-blue-300 p-3 cursor-pointer">
      <h3 className="text-gray-500">@{user} posted...</h3>
      <h1 className="font-semibold">{title}</h1>

      <p className="text-sm">{body}</p>
    </div>
  );
};
