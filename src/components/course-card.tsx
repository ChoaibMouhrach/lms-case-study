import { CalendarIcon, UserIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { useNavigate } from "@tanstack/react-router";

interface CourseCardProps {
  course: {
    progress: number;
    id: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    instructor: {
      name: string;
    };
  };
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate({
      to: "/courses/$courseId",
      params: {
        courseId: course.id,
      },
    });
  };

  return (
    <div
      className="border rounded-md overflow-hidden bg-background hover:bg-background/50 cursor-pointer delay-100 transition select-none"
      onClick={onNavigate}
    >
      <img src={course.thumbnail} className="aspect-video object-cover" />
      <div className="p-4">
        <span>{course.title}</span>

        <div className="flex flex-wrap gap-2 mt-2">
          {course.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="my-4">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span className="text-primary">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="mt-1 h-2.5" />
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground ">
          <UserIcon size={16} /> {course.instructor.name}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
          <CalendarIcon size={16} /> {new Date().toDateString()}
        </div>
      </div>
    </div>
  );
};
